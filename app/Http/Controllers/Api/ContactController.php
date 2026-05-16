<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\ContactUs;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;
use Illuminate\Support\Facades\Mail;
use App\Mail\ContactUsNotifiyMail;
use Illuminate\Support\Facades\Log;
class ContactController extends Controller
{
    /**
     * Handle incoming contact form submission.
     */
    public function store(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'name' => 'required|string|max:255',
            'email' => 'required|email|max:255',
            'phone' => 'nullable|string|max:20',
            'company_name' => 'nullable|string|max:255',
            'services' => 'nullable', // Removed array validation to allow strings
            'budget' => 'nullable|string|max:255',
            'url' => 'nullable|string|max:2048',
            'page_url' => 'nullable|string|max:2048',
            'message' => 'nullable|string'
        ]);

        if ($validator->fails()) {
            return response()->json([
                'status' => false,
                'errors' => $validator->errors()
            ], 422);
        }

        try {
            $data = $request->only([
                'name',
                'email',
                'phone',
                'company_name',
                'budget',
                'message',
                'url'
            ]);

            // Frontend can send page_url; store it in existing `url` column.
            if ($request->filled('page_url')) {
                $data['url'] = $request->input('page_url');
            }

            // Handle services array -> string
            if ($request->has('services')) {
                $services = $request->services;
                if (is_array($services)) {
                    $data['services'] = implode(', ', $services);
                } else {
                    $data['services'] = $services;
                }
            }

            // Optional: location (IP based or passed)
            // $data['location'] = $request->ip(); 

            $contact = ContactUs::create($data);

            try {
                Mail::to(['kavya@clickmecha.com'])->send(new ContactUsNotifiyMail($contact));
            } catch (\Throwable $e) {
                Log::error('Contact email failed', [
                    'contact_id' => $contact->id,
                    'error'      => $e->getMessage(),
                ]);
            }

            return response()->json([
                'status' => true,
                'message' => 'Thank you! Your query has been submitted successfully.',
                'data' => $contact
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
