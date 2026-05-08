@extends('admin.layout.app')

@section('content')
<div class="content-body">
    <div class="container-fluid">
        <h4 class="mb-1">Edit Lead Status</h4>

        <!-- Card for Lead Basic Details -->
        <div class="card mb-4">
        @include('utils.show_success')
        @include('utils.show_error')
            <div class="card-body">
                <h5 class="card-title">Lead Details</h5>
                <div class="row">
                    <div class="col-md-6">
                        <p><strong>Name:</strong> {{ $lead->name }}</p>
                        <p><strong>Phone:</strong> {{ $lead->phone }}</p>
                        <p><strong>Email:</strong> {{ $lead->email }}</p>
                        <p><strong>Current Status:</strong> {{ Str::title(str_replace('_', ' ', @$lead->status)) }}</p>
                    </div>
                    <div class="col-md-6">
                        <p><strong>Location:</strong> {{ $lead->location }}</p>
                        <p><strong>Date Created:</strong> {{ optional($lead->created_at)->format('M d, Y h:i A') }}</p>
                        <p><strong>URL:</strong> <a href="{{ $lead->url }}" target="_blank">{{ $lead->url }}</a></p>
                    </div>
                </div>
            </div>
        </div>

        <!-- Form to Edit Lead Status -->
        <form action="{{ route('admin.leads.update', $lead->id) }}" method="POST">
            @csrf
            @method('PUT')
            <div class="row">
                <div class="col-md-6">
                    <div class="form-group">
                        <label for="status">Lead Status</label>
                        <select class="form-control" name="status" id="status">
                            <option value="good_lead" {{ $lead->status == 'good_lead' ? 'selected' : '' }}>Good Lead</option>
                            <option value="dead_lead" {{ $lead->status == 'dead_lead' ? 'selected' : '' }}>Dead Lead</option>
                            <option value="do_not_pick_up" {{ $lead->status == 'do_not_pick_up' ? 'selected' : '' }}>Do Not Pick Up</option>
                            <option value="call_back" {{ $lead->status == 'call_back' ? 'selected' : '' }}>Call Back</option>
                            <option value="not_interested" {{ $lead->status == 'not_interested' ? 'selected' : '' }}>Not Interested</option>
                            <option value="new_lead" {{ $lead->status == 'new_lead' ? 'selected' : '' }}>New Lead</option>
                        </select>
                    </div>
                    <div class="form-group">
                        <label for="comment">Comment</label>
                        <textarea class="form-control" name="comment" id="comment" rows="4" placeholder="Add a comment..."></textarea>
                    </div>
                    <button type="submit" class="btn btn-primary">Update Lead</button>
                </div>

                <!-- Scrollable Lead Logs Section -->
                <div class="col-md-6">
                    <h5>Lead Logs</h5>
                    <div class="card" style="max-height: 500px; overflow-y: auto;">
                        <div class="card-body">
                            @if($leadLogs->count())
                                @foreach($leadLogs as $log)
                                    <div class="log-item mb-3">
                                        <p><strong>Status:</strong> {{ Str::title(str_replace('_', ' ', $log->status)) }}</p>
                                        <p><strong>Comment:</strong> {{ $log->comment ?? 'No comment' }}</p>
                                        <p><small>{{ $log->created_at->format('M d, Y h:i A') }}</small></p>
                                        <hr>
                                    </div>
                                @endforeach
                            @else
                                <p>No logs available.</p>
                            @endif
                        </div>
                    </div>
                </div>
            </div>
        </form>
    </div>
</div>
@endsection
