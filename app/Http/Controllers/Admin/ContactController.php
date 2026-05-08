<?php

namespace App\Http\Controllers\Admin;

use App\Exports\ContactsExport;
use App\Http\Controllers\Controller;
use App\Models\ContactUs;
use App\Models\LeadLog;
use Illuminate\Http\Request;
use Maatwebsite\Excel\Facades\Excel;
use Yajra\DataTables\Facades\DataTables;
use Illuminate\Support\Str;

class ContactController extends Controller
{
    public function list()
    {
        $contacts = ContactUs::orderBy('created_at', 'DESC')->get();
        return view('admin.contact.queries', compact('contacts'));
    }

    public function show($id)
    {
        $contact = ContactUs::findOrFail($id);
        return view('admin.contact.show', compact('contact'));
    }

    public function export()
    {
        return Excel::download(new ContactsExport, 'contacts.xlsx');
    }

    public function leadsManager()
    {
        $leads = ContactUs::orderBy('created_at', 'DESC')->paginate(20);
        return view('admin.contact.leads-management', compact('leads'));
    }

    public function leadsAjax(Request $request)
    {
        if ($request->ajax()) {
            $leads = ContactUs::query();
    
            // Apply filters if present
            if ($request->filled('name')) {
                $leads->where('name', 'like', '%' . $request->name . '%');
            }
            if ($request->filled('phone')) {
                $leads->where('phone', 'like', '%' . $request->phone . '%');
            }
            if ($request->filled('status')) {
                $leads->where('status', $request->status);
            }
    
            // Order by created_at desc
            $leads->orderBy('created_at', 'desc');
    
            // Return the response to DataTables without using paginate()
            return DataTables::of($leads)
                ->addColumn('contact', function ($lead) {
                    $contactInfo = "<div>" . $lead->name . "</div>";
                    $contactInfo .= $lead->phone ? "<div>" . $lead->phone . "</div>" : "";
                    $contactInfo .= $lead->email ? "<div>" . $lead->email . "</div>" : "";
                    return $contactInfo;
                })
                ->addColumn('status', function ($lead) {
                    $statusFormatted = Str::title(str_replace('_', ' ', $lead->status));
                    $badgeClass = $this->getBadgeClass($lead->status);
                    return '<span class="badge ' . $badgeClass . '">' . $statusFormatted . '</span>';
                })
                ->addColumn('url', function ($lead) {
                    if (empty($lead->url)) {
                        return '-';
                    }

                    return '<a href="' . e($lead->url) . '" target="_blank" rel="noopener noreferrer">' . e($lead->url) . '</a>';
                })
                ->addColumn('action', function ($lead) {
                    return '<a href="' . route('admin.leads.edit', $lead->id) . '" class="btn btn-sm btn-primary">Edit</a>';
                })
                ->rawColumns(['contact', 'status', 'url', 'action'])
                ->make(true);
        }
    }
    
    

private function getBadgeClass($status)
{
    switch ($status) {
        case 'good_lead':
            return 'badge-success';
        case 'dead_lead':
            return 'badge-danger';
        case 'call_back':
            return 'badge-warning';
        case 'do_not_pick_up':
            return 'badge-info';
        case 'not_interested':
            return 'badge-secondary';
        case 'new_lead':
            return 'badge-primary';
        default:
            return 'badge-light';
    }
}

    
    
    
    public function editLead($id)
    {
        $lead = ContactUs::findOrFail($id);

        $leadLogs = LeadLog::where('lead_id', $id)->orderBy('created_at', 'desc')->get();
        return view('admin.contact.lead-edit', compact('lead', 'leadLogs'));
    }
    public function updateLead(Request $request, $id)
    {
        $lead = ContactUs::findOrFail($id);
        $lead->status = $request->status;
        $lead->save();

        // Log the status change with comment
        LeadLog::create([
            'lead_id' => $id,
            'status' => $request->status,
            'comment' => $request->comment,
        ]);

        return redirect()->back()->with('success', 'Lead updated successfully');
    }
}
