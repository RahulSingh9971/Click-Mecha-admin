@extends('admin.layout.app')

@section('content')
<div class="content-body">
    <div class="container-fluid">
        <div class="form-head page-titles d-flex align-items-center">
            <div class="me-auto">
                <h4 class="mb-1">Edit Work Showcase</h4>
                <ol class="breadcrumb">
                    <li class="breadcrumb-item"><a href="{{ route('admin.work-showcase.index') }}">Work Showcase</a></li>
                    <li class="breadcrumb-item active"><a href="javascript:void(0)">Edit</a></li>
                </ol>
            </div>
        </div>

        <div class="row">
            <div class="col-xl-12 col-lg-12">
                <div class="card">
                    <div class="card-header">
                        <h4 class="card-title">Work Details</h4>
                    </div>
                    <div class="card-body">
                        <div class="basic-form">
                            <form action="{{ route('admin.work-showcase.update', $workShowcase->id) }}" method="POST" enctype="multipart/form-data">
                                @csrf
                                @method('PUT')
                                <div class="row">
                                    <div class="mb-3 col-md-6">
                                        <label class="form-label">Title *</label>
                                        <input type="text" name="title" class="form-control" placeholder="Project Title" required value="{{ old('title', $workShowcase->title) }}">
                                        @error('title')
                                        <small class="text-danger">{{ $message }}</small>
                                        @enderror
                                    </div>
                                    <div class="mb-3 col-md-6">
                                        <label class="form-label">Category</label>
                                        <input type="text" name="category" class="form-control" placeholder="e.g., Web Development, UI/UX" value="{{ old('category', $workShowcase->category) }}">
                                        @error('category')
                                        <small class="text-danger">{{ $message }}</small>
                                        @enderror
                                    </div>
                                    <div class="mb-3 col-md-12">
                                        <label class="form-label">Description *</label>
                                        <textarea name="description" class="form-control" rows="4" placeholder="Project description..." required>{{ old('description', $workShowcase->description) }}</textarea>
                                        @error('description')
                                        <small class="text-danger">{{ $message }}</small>
                                        @enderror
                                    </div>
                                    <div class="mb-3 col-md-6">
                                        <label class="form-label">Project Link (URL)</label>
                                        <input type="url" name="link" class="form-control" placeholder="https://example.com" value="{{ old('link', $workShowcase->link) }}">
                                        @error('link')
                                        <small class="text-danger">{{ $message }}</small>
                                        @enderror
                                    </div>
                                    <div class="mb-3 col-md-6">
                                        <label class="form-label">Display Order</label>
                                        <input type="number" name="display_order" class="form-control" value="{{ old('display_order', $workShowcase->display_order) }}">
                                        @error('display_order')
                                        <small class="text-danger">{{ $message }}</small>
                                        @enderror
                                    </div>
                                    <div class="mb-3 col-md-12">
                                        <label class="form-label">Project Image</label>
                                        <div class="form-file">
                                            <input type="file" name="image" class="form-file-input form-control" accept="image/*">
                                        </div>
                                        @if($workShowcase->image)
                                        <div class="mt-2">
                                            <img src="{{ asset('storage/' . $workShowcase->image) }}" alt="{{ $workShowcase->title }}" width="200" style="border-radius: 4px;">
                                        </div>
                                        @endif
                                        @error('image')
                                        <small class="text-danger">{{ $message }}</small>
                                        @enderror
                                    </div>
                                    <div class="mb-3 col-md-6">
                                        <div class="form-check custom-checkbox mb-3">
                                            <input type="checkbox" class="form-check-input" id="customCheckBox1" name="is_active" value="1" {{ old('is_active', $workShowcase->is_active) ? 'checked' : '' }}>
                                            <label class="form-check-label" for="customCheckBox1">Active</label>
                                        </div>
                                    </div>
                                    <div class="mb-3 col-md-6">
                                        <div class="form-check custom-checkbox mb-3">
                                            <input type="checkbox" class="form-check-input" id="customCheckBox2" name="show_on_homepage" value="1" {{ old('show_on_homepage', $workShowcase->show_on_homepage) ? 'checked' : '' }}>
                                            <label class="form-check-label" for="customCheckBox2">Show on Homepage</label>
                                        </div>
                                    </div>
                                </div>
                                <button type="submit" class="btn btn-primary">Update Work</button>
                                <a href="{{ route('admin.work-showcase.index') }}" class="btn btn-secondary">Cancel</a>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
@endsection