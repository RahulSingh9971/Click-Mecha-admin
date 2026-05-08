<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Career;
use App\Models\CareerApplication;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;
use Illuminate\Support\Facades\Mail;
use App\Mail\CareerApplicationNotifyMail;
use Illuminate\Support\Facades\Log;
class CareerController extends Controller
{
    /**
     * List all active job postings
     */
    public function index(Request $request)
    {
        $query = Career::where('status', 1);

        if ($request->has('category') && !empty($request->category) && $request->category !== 'All Roles') {
            $query->where('category', $request->category);
        }

        $careers = $query->orderBy('sort_order', 'asc')
            ->orderBy('created_at', 'desc')
            ->get();

        return response()->json([
            'status' => true,
            'data' => $careers
        ]);
    }

    /**
     * Get job details by slug
     */
    public function show($slug)
    {
        $career = Career::where('slug', $slug)->where('status', 1)->first();

        if (!$career) {
            return response()->json([
                'status' => false,
                'message' => 'Job not found'
            ], 404);
        }

        return response()->json([
            'status' => true,
            'data' => $career
        ]);
    }

    /**
     * Submit a job application
     */
    public function apply(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'career_id' => 'required|exists:careers,id',
            'name' => 'required|string|max:255',
            'email' => 'required|email|max:255',
            'phone' => 'required|string|max:20',
            'state' => 'required|string|max:255',
            'experience' => 'required|string|max:255',
            'resume' => 'required|file|mimes:pdf,doc,docx|max:5048', // 2MB Max
            'linkedin' => 'nullable|url',
            'cover_letter' => 'nullable|string'
        ]);

        if ($validator->fails()) {
            return response()->json([
                'status' => false,
                'errors' => $validator->errors()
            ], 422);
        }

        try {
            $data = $request->except(['resume']);

            if ($request->hasFile('resume')) {
                $resumeName = time() . '_' . str_replace(' ', '_', $request->file('resume')->getClientOriginalName());
                $request->file('resume')->move(public_path('public/storage/careers/resumes'), $resumeName);
                $data['resume'] = $resumeName;
            }

            $application = CareerApplication::create($data);

            try {
                Mail::to(['kavya@clickmecha.com'])->send(new CareerApplicationNotifyMail($application));
            } catch (\Throwable $e) {
                Log::error('Career application email failed', [
                    'application_id' => $application->id,
                    'error'          => $e->getMessage(),
                ]);
            }

            return response()->json([
                'status' => true,
                'message' => 'Application submitted successfully!',
                'data' => $application
            ], 201);
        } catch (\Exception $e) {
            return response()->json([
                'status' => false,
                'message' => 'Something went wrong. Please try again later.',
                'error' => $e->getMessage()
            ], 500);
        }
    }
}
