<?php

namespace App\Http\Controllers\Web;

use App\Http\Controllers\Controller;
use App\Mail\ContactUsNotifiyMail;
use App\Models\Blog;
use App\Models\ContactUs;
use App\Models\PageMeta;
use App\Models\Policy;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Mail;
use Illuminate\Support\Facades\Validator;
use Illuminate\Support\Facades\Log;
use Symfony\Component\HttpFoundation\StreamedResponse;
use Illuminate\Support\Facades\Http;

class HomeController extends Controller
{

    // public function index(Request $request)
    // {
    //      [$a, $b] = [random_int(1, 9), random_int(1, 9)];
    //     $request->session()->put('captcha_result', $a + $b);


    //      return view('web.downtime', [
    //         'captchaQuestion' => "What is {$a} + {$b}?",
    //     ]);

    // }
    public function home(Request $request)
    {
        [$a, $b] = [random_int(1, 9), random_int(1, 9)];
        $request->session()->put('captcha_result', $a + $b);

        return view('web.home', [
            'captchaQuestion' => "What is {$a} + {$b}?",
        ]);
    }
    public function privacy(Request $request)
    {
        $policy = Policy::where('page_type', 'privacy-policy')
            ->where('is_active', 1)
            ->first();
        
        return view('web.pages.privacy-policy', compact('policy'));
    }
    public function accommodations(Request $request)
    {
        return view('web.pages.accommodations');
    }
    public function aboutUs(Request $request)
    {
        return view('web.pages.about-us');
    }
    public function clubRooms(Request $request)
    {
        return view('web.pages.club-rooms');
    }
    public function villasSweets(Request $request)
    {
        return view('web.pages.villas-sweets');
    }
    public function dinning(Request $request)
    {
        return view('web.pages.dinning');
    }
    public function lawnsBanquet(Request $request)
    {
        return view('web.pages.lawns-and-banquet');
    }
    public function gallery(Request $request)
    {
        return view('web.pages.gallery');
    }
    public function thankyou(Request $request)
    {
        return view('web.pages.thank-you');
    }
    public function termsConditions(Request $request)
    {
        $policy = Policy::where('page_type', 'terms-conditions')
            ->where('is_active', 1)
            ->first();
        
        return view('web.pages.terms-and-conditions', compact('policy'));
    }

    public function contact()
    {
        $pageMeta = PageMeta::where('slug', 'contact')->first();

        $data = [
            'pageMeta'      => $pageMeta
        ];


        return view('web.contact', $data);
    }

    // submit contact form

    public function storeContact(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'name'   => 'required|string|max:255',
            'phone'  => 'required|numeric|digits_between:7,15',
            'email'  => [
                'required',
                'regex:/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/',
                'max:255'
            ],
            'location'       => 'nullable|string|max:255',
            'captcha_answer' => 'required|numeric',
            'url'            => 'nullable|url',
            'reason'         => 'nullable|string',
            'message'        => 'nullable|string',
            'service'        => 'nullable|string',
        ]);

        if ($validator->fails()) {
            return response()->json([
                'success' => false,
                'errors'  => $validator->errors()
            ], 422);
        }

        // CAPTCHA check
        if ((int)$request->captcha_answer !== (int)session('captcha_result')) {
            return response()->json([
                'success' => false,
                'errors'  => ['captcha_answer' => ['Invalid CAPTCHA answer.']]
            ], 422);
        }

        $data = $validator->validated();
        $data['url'] = $request->input('url') ?: ($request->headers->get('referer') ?: $request->fullUrl());

        $contact = ContactUs::create($data);

        $emailSent = false;
        try {
            Mail::to(['kavya@clickmecha.com'])->send(new ContactUsNotifiyMail($contact));
            $emailSent = true;
        } catch (\Throwable $e) {
            Log::error('Contact email failed', [
                'contact_id' => $contact->id,
                'error'      => $e->getMessage(),
            ]);
            // continue; success response will still be returned
        }

        return response()->json([
            'success'    => true,
            'message'    => $emailSent
                ? 'Contact submitted successfully.'
                : 'Contact submitted successfully (email could not be sent right now).',
        ]);
    }

    // Blogs
    public function blogs()
    {
        $pageMeta = PageMeta::where('slug', 'blogs')->first();

        $blogs = Blog::where('status', 1)
            ->orderBy('created_at', 'desc')
            ->with(['author', 'category'])
            ->get();

        $data = [
            'blogs'         => $blogs,
            'pageMeta'      => $pageMeta
        ];

        return view('web.blog.blogs', $data);
    }

    public function blogDetails($slug)
    {
        $blogs = Blog::where('status', 1)
            ->orderBy('created_at', 'desc')
            ->with(['author', 'category'])
            ->get();

        $blog = Blog::where('status', 1)
            ->with(['author', 'category'])
            ->where('slug', $slug)
            ->firstOrFail();

        $pageMeta = [
            'metaTitle'     => $blog->metaTitle,
            'metaDesc'      => $blog->metaDesc,
            'metaKeyword'   => $blog->metaKeyword,
        ];

        $data = [
            'blog'          => $blog,
            'blogs'         => $blogs,
            'pageMeta'      => $pageMeta
        ];

        return view('web.blog.blog-details', $data);
    }
    public function esteemMistyHills()
    {
        // Devanahalli / your resort approx
        $lat = 13.2400;
        $lon = 77.7100;

        // Open-Meteo current weather API (no key needed)
        $response = Http::get('https://api.open-meteo.com/v1/forecast', [
            'latitude' => $lat,
            'longitude' => $lon,
            'current_weather' => true,
        ]);

        if ($response->failed()) {
            return response()->json(['error' => 'unable to fetch weather'], 500);
        }

        $data = $response->json();

        // Open-Meteo returns temp in °C directly
        $tempC = $data['current_weather']['temperature'] ?? null;

        // Convert to F
        $tempF = $tempC !== null ? round(($tempC * 9 / 5) + 32, 1) : null;

        // They also give weathercode (we can map later if you want)
        return response()->json([
            'temp_c' => $tempC,
            'temp_f' => $tempF,
            'source' => 'open-meteo',
        ]);
    }
}
