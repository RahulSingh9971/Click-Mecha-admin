@extends('admin.layout.app')

@section('content')
<div class="content-body">
    <div class="container-fluid">
        <div class="form-head page-titles d-flex align-items-center">
            <div class="me-auto">
                <h4 class="mb-1">Job Applications</h4>
                <ol class="breadcrumb">
                    <li class="breadcrumb-item"><a href="{{ route('admin.careers.index') }}">Careers</a></li>
                    <li class="breadcrumb-item active"><a href="javascript:void(0)">Applications</a></li>
                </ol>
            </div>
        </div>

        <div class="row">
            <div class="col-12">
                <div class="card">
                    <div class="card-header">
                        <h4 class="card-title">Applications Received</h4>
                    </div>
                    <div class="card-body">
                            <table id="example" class="table">
                                <thead>
                                    <tr>
                                        <th><strong>ID</strong></th>
                                        <th><strong>Applicant</strong></th>
                                        <th><strong>Job Position</strong></th>
                                        <th><strong>Email</strong></th>
                                        <th><strong>Phone</strong></th>
                                        <th><strong>Experience</strong></th>
                                        <th><strong>Date</strong></th>
                                        <th><strong>Resume</strong></th>
                                    </tr>
                                </thead>
                                <tbody>
                                    @foreach($applications as $app)
                                    <tr>
                                        <td>{{ $app->id }}</td>
                                        <td>{{ $app->name }}</td>
                                        <td>{{ $app->career->title ?? 'General' }}</td>
                                        <td>{{ $app->email }}</td>
                                        <td>{{ $app->phone }}</td>
                                        <td>{{ $app->experience }}</td>
                                        <td>{{ $app->created_at->format('M d, Y') }}</td>
                                        <td>
                                            @if($app->resume)
                                            <a href="{{ asset('storage/careers/resumes/' . $app->resume) }}" target="_blank" class="btn btn-primary btn-xs sharp"><i class="fa fa-download"></i></a>
                                            @else
                                            -
                                            @endif
                                        </td>
                                    </tr>
                                    @endforeach
                                </tbody>
                            </table>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
@endsection