@extends('admin.layout.app')

@section('content')
<div class="content-body">
    <div class="container-fluid">
        <div class="form-head page-titles d-flex align-items-center">
            <div class="me-auto">
                <h4 class="mb-1">Video Testimonials</h4>
                <ol class="breadcrumb">
                    <li class="breadcrumb-item active"><a href="javascript:void(0)">Video Testimonials</a></li>
                    <li class="breadcrumb-item"><a href="javascript:void(0)">List</a></li>
                </ol>
            </div>
            <a href="{{ route('admin.video-testimonials.create') }}" class="btn btn-primary rounded light">Add Video</a>
        </div>

        @if(session('success'))
        <div class="alert alert-success alert-dismissible fade show" role="alert">
            {{ session('success') }}
            <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
        </div>
        @endif

        <div class="row">
            <div class="col-12">
                <div class="card">
                    <div class="card-header">
                        <h4 class="card-title">Real Results, Real People</h4>
                    </div>
                    <div class="card-body">
                        <div class="table-responsive">
                            <table id="example" class="table table-responsive-md">
                                <thead>
                                    <tr>
                                        <th><strong>Order</strong></th>
                                        <th><strong>Thumbnail</strong></th>
                                        <th><strong>Client</strong></th>
                                        <th><strong>Title</strong></th>
                                        <th><strong>Type</strong></th>
                                        <th><strong>Duration</strong></th>
                                        <th><strong>Status</strong></th>
                                        <th><strong>Homepage</strong></th>
                                        <th><strong>Action</strong></th>
                                    </tr>
                                </thead>
                                <tbody>
                                    @forelse($videoTestimonials as $video)
                                    <tr>
                                        <td>{{ $video->display_order }}</td>
                                        <td>
                                            @if($video->thumbnail)
                                            <img src="{{ asset('storage/' . $video->thumbnail) }}" alt="{{ $video->title }}" width="80" style="object-fit: cover; height: 60px; border-radius: 4px;">
                                            @else
                                            <div style="width: 80px; height: 60px; background: #f0f0f0; border-radius: 4px; display: flex; align-items: center; justify-content: center;">
                                                <i class="fas fa-video"></i>
                                            </div>
                                            @endif
                                        </td>
                                        <td>
                                            <strong>{{ $video->client_name }}</strong><br>
                                            <small class="text-muted">{{ $video->client_position }}{{ $video->client_company ? ' at ' . $video->client_company : '' }}</small>
                                        </td>
                                        <td>{{ $video->title }}</td>
                                        <td>
                                            @if($video->video_type === 'upload')
                                            <span class="badge badge-primary">Upload</span>
                                            @elseif($video->video_type === 'youtube')
                                            <span class="badge badge-danger">YouTube</span>
                                            @else
                                            <span class="badge badge-info">Vimeo</span>
                                            @endif
                                        </td>
                                        <td>{{ $video->duration ? gmdate('i:s', $video->duration) : 'N/A' }}</td>
                                        <td>
                                            @if($video->is_active)
                                            <span class="badge light badge-success">Active</span>
                                            @else
                                            <span class="badge light badge-danger">Inactive</span>
                                            @endif
                                        </td>
                                        <td>
                                            @if($video->show_on_homepage)
                                            <span class="badge light badge-info">Yes</span>
                                            @else
                                            <span class="badge light badge-secondary">No</span>
                                            @endif
                                        </td>
                                        <td>
                                            <div class="d-flex">
                                                <a href="{{ route('admin.video-testimonials.edit', $video->id) }}" class="btn btn-primary shadow btn-xs sharp me-1"><i class="fas fa-pencil-alt"></i></a>
                                                <form action="{{ route('admin.video-testimonials.destroy', $video->id) }}" method="POST" onsubmit="return confirm('Are you sure?')">
                                                    @csrf
                                                    @method('DELETE')
                                                    <button type="submit" class="btn btn-danger shadow btn-xs sharp"><i class="fa fa-trash"></i></button>
                                                </form>
                                            </div>
                                        </td>
                                    </tr>
                                    @empty
                                    <tr>
                                        <td colspan="9" class="text-center">No video testimonials found.</td>
                                    </tr>
                                    @endforelse
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
@endsection