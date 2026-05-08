@extends('admin.layout.app')

@section('content')
<div class="content-body">
    <div class="container-fluid">
        <div class="form-head page-titles d-flex align-items-center">
            <div class="me-auto">
                <h4 class="mb-1">Add Video Testimonial</h4>
                <ol class="breadcrumb">
                    <li class="breadcrumb-item"><a href="{{ route('admin.video-testimonials.index') }}">Video Testimonials</a></li>
                    <li class="breadcrumb-item active"><a href="javascript:void(0)">Add</a></li>
                </ol>
            </div>
        </div>

        <div class="row">
            <div class="col-xl-12 col-lg-12">
                <div class="card">
                    <div class="card-header">
                        <h4 class="card-title">Video Testimonial Details</h4>
                    </div>
                    <div class="card-body">
                        <div class="basic-form">
                            <form action="{{ route('admin.video-testimonials.store') }}" method="POST" enctype="multipart/form-data">
                                @csrf

                                <!-- Client Information -->
                                <h5 class="mb-3">Client Information</h5>
                                <div class="row">
                                    <div class="mb-3 col-md-4">
                                        <label class="form-label">Client Name *</label>
                                        <input type="text" name="client_name" class="form-control" placeholder="John Doe" required value="{{ old('client_name') }}">
                                        @error('client_name')
                                        <small class="text-danger">{{ $message }}</small>
                                        @enderror
                                    </div>
                                    <div class="mb-3 col-md-4">
                                        <label class="form-label">Position</label>
                                        <input type="text" name="client_position" class="form-control" placeholder="CEO" value="{{ old('client_position') }}">
                                        @error('client_position')
                                        <small class="text-danger">{{ $message }}</small>
                                        @enderror
                                    </div>
                                    <div class="mb-3 col-md-4">
                                        <label class="form-label">Company</label>
                                        <input type="text" name="client_company" class="form-control" placeholder="Company Name" value="{{ old('client_company') }}">
                                        @error('client_company')
                                        <small class="text-danger">{{ $message }}</small>
                                        @enderror
                                    </div>
                                </div>

                                <!-- Testimonial Content -->
                                <h5 class="mb-3 mt-4">Testimonial Content</h5>
                                <div class="row">
                                    <div class="mb-3 col-md-12">
                                        <label class="form-label">Title *</label>
                                        <input type="text" name="title" class="form-control" placeholder="Testimonial title" required value="{{ old('title') }}">
                                        @error('title')
                                        <small class="text-danger">{{ $message }}</small>
                                        @enderror
                                    </div>
                                    <div class="mb-3 col-md-12">
                                        <label class="form-label">Description</label>
                                        <textarea name="description" class="form-control" rows="3" placeholder="Brief description...">{{ old('description') }}</textarea>
                                        @error('description')
                                        <small class="text-danger">{{ $message }}</small>
                                        @enderror
                                    </div>
                                </div>

                                <!-- Video Settings -->
                                <h5 class="mb-3 mt-4">Video Settings</h5>
                                <div class="row">
                                    <div class="mb-3 col-md-12">
                                        <label class="form-label">Video Type *</label>
                                        <select name="video_type" id="videoType" class="form-control" required>
                                            <option value="upload" {{ old('video_type') === 'upload' ? 'selected' : '' }}>Upload Video File</option>
                                            <option value="youtube" {{ old('video_type') === 'youtube' ? 'selected' : '' }}>YouTube URL</option>
                                            <option value="vimeo" {{ old('video_type') === 'vimeo' ? 'selected' : '' }}>Vimeo URL</option>
                                        </select>
                                        @error('video_type')
                                        <small class="text-danger">{{ $message }}</small>
                                        @enderror
                                    </div>

                                    <div class="mb-3 col-md-12" id="videoFileDiv">
                                        <label class="form-label">Video File * <small>(MP4, MOV, AVI, WMV - Max 100MB)</small></label>
                                        <input type="file" name="video_file" class="form-control" accept="video/*">
                                        @error('video_file')
                                        <small class="text-danger">{{ $message }}</small>
                                        @enderror
                                    </div>

                                    <div class="mb-3 col-md-12" id="videoUrlDiv" style="display: none;">
                                        <label class="form-label">Video URL *</label>
                                        <input type="url" name="video_url" class="form-control" placeholder="https://www.youtube.com/watch?v=..." value="{{ old('video_url') }}">
                                        <small class="text-muted">Paste the full YouTube or Vimeo URL</small>
                                        @error('video_url')
                                        <small class="text-danger">{{ $message }}</small>
                                        @enderror
                                    </div>

                                    <div class="mb-3 col-md-6">
                                        <label class="form-label">Thumbnail Image</label>
                                        <input type="file" name="thumbnail" class="form-control" accept="image/*">
                                        <small class="text-muted">Recommended: 1280x720px</small>
                                        @error('thumbnail')
                                        <small class="text-danger">{{ $message }}</small>
                                        @enderror
                                    </div>

                                    <div class="mb-3 col-md-3">
                                        <label class="form-label">Duration (seconds)</label>
                                        <input type="number" name="duration" class="form-control" placeholder="120" value="{{ old('duration') }}">
                                        @error('duration')
                                        <small class="text-danger">{{ $message }}</small>
                                        @enderror
                                    </div>

                                    <div class="mb-3 col-md-3">
                                        <label class="form-label">Display Order</label>
                                        <input type="number" name="display_order" class="form-control" value="{{ old('display_order', 0) }}">
                                        @error('display_order')
                                        <small class="text-danger">{{ $message }}</small>
                                        @enderror
                                    </div>

                                    <div class="mb-3 col-md-6">
                                        <div class="form-check custom-checkbox mb-3">
                                            <input type="checkbox" class="form-check-input" id="customCheckBox1" name="is_active" value="1" checked>
                                            <label class="form-check-label" for="customCheckBox1">Active</label>
                                        </div>
                                    </div>
                                    <div class="mb-3 col-md-6">
                                        <div class="form-check custom-checkbox mb-3">
                                            <input type="checkbox" class="form-check-input" id="customCheckBox2" name="show_on_homepage" value="1">
                                            <label class="form-check-label" for="customCheckBox2">Show on Homepage</label>
                                        </div>
                                    </div>
                                </div>

                                <button type="submit" class="btn btn-primary">Save Video Testimonial</button>
                                <a href="{{ route('admin.video-testimonials.index') }}" class="btn btn-secondary">Cancel</a>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>

<script>
    document.getElementById('videoType').addEventListener('change', function() {
        const videoFileDiv = document.getElementById('videoFileDiv');
        const videoUrlDiv = document.getElementById('videoUrlDiv');

        if (this.value === 'upload') {
            videoFileDiv.style.display = 'block';
            videoUrlDiv.style.display = 'none';
        } else {
            videoFileDiv.style.display = 'none';
            videoUrlDiv.style.display = 'block';
        }
    });
</script>
@endsection