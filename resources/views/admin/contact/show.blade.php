@extends('admin.layout.app')
@section('content')
<style>
    .detail-card {
        background: #fff;
        border-radius: 12px;
        box-shadow: 0 2px 20px rgba(0,0,0,0.08);
        overflow: hidden;
    }
    .detail-card-header {
        background: #143642;
        padding: 28px 32px;
        color: #fff;
    }
    .detail-card-header h4 {
        margin: 0 0 4px;
        font-size: 22px;
        font-weight: 700;
        letter-spacing: 0.3px;
    }
    .detail-card-header p {
        margin: 0;
        opacity: 0.85;
        font-size: 13px;
    }
    .detail-body {
        padding: 32px;
    }
    .detail-section-title {
        font-size: 12px;
        font-weight: 700;
        text-transform: uppercase;
        letter-spacing: 1px;
        color: #aaa;
        margin: 0 0 16px;
        padding-bottom: 8px;
        border-bottom: 1px solid #f0f0f0;
    }
    .detail-grid {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
        gap: 20px;
        margin-bottom: 32px;
    }
    .detail-item label {
        display: block;
        font-size: 11px;
        font-weight: 600;
        text-transform: uppercase;
        letter-spacing: 0.8px;
        color: #999;
        margin-bottom: 5px;
    }
    .detail-item .value {
        font-size: 15px;
        color: #2c2c2c;
        font-weight: 500;
        word-break: break-word;
    }
    .detail-item .value.empty {
        color: #ccc;
        font-style: italic;
        font-weight: 400;
    }
    .detail-item .value a {
        color: #143642;
        word-break: break-all;
    }
    .message-box {
        background: #f0f5f7;
        border-left: 4px solid #143642;
        border-radius: 0 8px 8px 0;
        padding: 18px 20px;
        font-size: 15px;
        color: #333;
        line-height: 1.7;
        white-space: pre-wrap;
        margin-bottom: 32px;
    }
    .badge-info-custom {
        display: inline-block;
        padding: 4px 12px;
        border-radius: 50px;
        font-size: 12px;
        font-weight: 600;
        background: rgba(20, 54, 66, 0.15);
        color: #143642;
    }
    .back-btn {
        display: inline-flex;
        align-items: center;
        gap: 8px;
        background: #fff;
        color: #555;
        border: 1px solid #ddd;
        padding: 8px 18px;
        border-radius: 8px;
        font-size: 13px;
        font-weight: 500;
        text-decoration: none;
        transition: all 0.2s;
    }
    .back-btn:hover {
        background: #f5f5f5;
        color: #333;
        text-decoration: none;
    }
</style>

<div class="content-body">
    <div class="container-fluid">

        {{-- Page Header --}}
        <div class="form-head page-titles d-flex align-items-center mb-4">
            <div class="me-auto">
                <h4 class="mb-1">Contact Query Details</h4>
                <ol class="breadcrumb">
                    <li class="breadcrumb-item active">Masters</li>
                    <li class="breadcrumb-item"><a href="{{ route('admin.contact.queries') }}">Contact Form</a></li>
                    <li class="breadcrumb-item">View</li>
                </ol>
            </div>
            <a href="{{ route('admin.contact.queries') }}" class="back-btn">
                <i class="fa fa-arrow-left"></i> Back to List
            </a>
        </div>

        <div class="row">
            <div class="col-xl-10 col-lg-12 mx-auto">
                <div class="detail-card">

                    {{-- Card Header --}}
                    <div class="detail-card-header">
                        <h4>{{ $contact->name ?? 'N/A' }}</h4>
                        <p>
                            <i class="fa fa-clock-o me-1"></i>
                            Submitted on {{ optional($contact->created_at)->format('F d, Y \a\t h:i A') }}
                            &nbsp;&nbsp;|&nbsp;&nbsp;
                            <span class="badge-info-custom" style="background:rgba(255,255,255,0.2);color:#fff;">
                                Query #{{ $contact->id }}
                            </span>
                        </p>
                    </div>

                    <div class="detail-body">

                        {{-- Personal Information --}}
                        <p class="detail-section-title">Personal Information</p>
                        <div class="detail-grid">
                            <div class="detail-item">
                                <label>Full Name</label>
                                <div class="value">{{ $contact->name ?? '' }}<span class="{{ $contact->name ? 'd-none' : '' }} empty">—</span></div>
                            </div>
                            <div class="detail-item">
                                <label>Email Address</label>
                                <div class="value">
                                    @if($contact->email)
                                        <a href="mailto:{{ $contact->email }}">{{ $contact->email }}</a>
                                    @else
                                        <span class="empty">—</span>
                                    @endif
                                </div>
                            </div>
                            <div class="detail-item">
                                <label>Phone Number</label>
                                <div class="value">
                                    @if($contact->phone)
                                        <a href="tel:{{ $contact->phone }}">{{ $contact->phone }}</a>
                                    @else
                                        <span class="empty">—</span>
                                    @endif
                                </div>
                            </div>
                            <div class="detail-item">
                                <label>Company Name</label>
                                <div class="value {{ $contact->company_name ? '' : 'empty' }}">
                                    {{ $contact->company_name ?? '—' }}
                                </div>
                            </div>
                            <div class="detail-item">
                                <label>Location</label>
                                <div class="value {{ $contact->location ? '' : 'empty' }}">
                                    {{ $contact->location ?? '—' }}
                                </div>
                            </div>
                        </div>

                        {{-- Project Details --}}
                        <p class="detail-section-title">Project Details</p>
                        <div class="detail-grid">
                            <div class="detail-item">
                                <label>Services Required</label>
                                <div class="value {{ $contact->services ? '' : 'empty' }}">
                                    {{ $contact->services ?? '—' }}
                                </div>
                            </div>
                            <div class="detail-item">
                                <label>Budget</label>
                                <div class="value {{ $contact->budget ? '' : 'empty' }}">
                                    {{ $contact->budget ?? '—' }}
                                </div>
                            </div>
                            <div class="detail-item">
                                <label>Page Title</label>
                                <div class="value {{ $contact->title ? '' : 'empty' }}">
                                    {{ $contact->title ?? '—' }}
                                </div>
                            </div>
                            <div class="detail-item">
                                <label>Source Page URL</label>
                                <div class="value">
                                    @if($contact->url)
                                        <a href="{{ $contact->url }}" target="_blank" rel="noopener noreferrer">
                                            {{ $contact->url }}
                                            <i class="fa fa-external-link ms-1" style="font-size:11px;"></i>
                                        </a>
                                    @else
                                        <span class="empty">—</span>
                                    @endif
                                </div>
                            </div>
                        </div>

                        {{-- Message --}}
                        @if($contact->message)
                        <p class="detail-section-title">Message</p>
                        <div class="message-box">{{ $contact->message }}</div>
                        @endif

                        {{-- Footer Actions --}}
                        <div class="d-flex gap-2">
                            <a href="{{ route('admin.contact.queries') }}" class="back-btn">
                                <i class="fa fa-arrow-left"></i> Back to List
                            </a>
                            @if($contact->email)
                            <a href="mailto:{{ $contact->email }}" class="btn btn-sm btn-success" style="padding:8px 18px;border-radius:8px;">
                                <i class="fa fa-envelope me-1"></i> Reply via Email
                            </a>
                            @endif
                            @if($contact->phone)
                            <a href="tel:{{ $contact->phone }}" class="btn btn-sm btn-info" style="padding:8px 18px;border-radius:8px;color:#fff;">
                                <i class="fa fa-phone me-1"></i> Call
                            </a>
                            @endif
                        </div>

                    </div>{{-- end detail-body --}}
                </div>{{-- end detail-card --}}
            </div>
        </div>

    </div>
</div>
@endsection
