@extends('admin.layout.app')

@section('content')
<style>
    .cke_notifications_area{
        display: none;
    }
</style>
<div class="content-body">
    <div class="container-fluid">
        <div class="form-head page-titles d-flex align-items-center">
            <div class="me-auto">
                <h4 class="mb-1">Edit Job Posting</h4>
                <ol class="breadcrumb">
                    <li class="breadcrumb-item"><a href="{{ route('admin.careers.index') }}">Careers</a></li>
                    <li class="breadcrumb-item active"><a href="javascript:void(0)">Edit</a></li>
                </ol>
            </div>
        </div>

        <div class="row">
            <div class="col-xl-12 col-lg-12">
                <div class="card">
                    <div class="card-header">
                        <h4 class="card-title">Job Details</h4>
                    </div>
                    <div class="card-body">
                        <div class="basic-form">
                            <form action="{{ route('admin.careers.update', $career->id) }}" method="POST">
                                @csrf
                                @method('PUT')
                                <div class="row">
                                    <div class="mb-3 col-md-6">
                                        <label class="form-label">Job Title</label>
                                        <input type="text" name="title" class="form-control" value="{{ $career->title }}" required>
                                    </div>
                                    <div class="mb-3 col-md-6">
                                        <label class="form-label">Category</label>
                                        <select name="category" class="form-control" required>
                                            <option value="">Choose...</option>
                                            <option value="Designing" {{ $career->category == 'Designing' ? 'selected' : '' }}>Designing</option>
                                            <option value="Development" {{ $career->category == 'Development' ? 'selected' : '' }}>Development</option>
                                            <option value="Marketing" {{ $career->category == 'Marketing' ? 'selected' : '' }}>Marketing</option>
                                            <option value="Management" {{ $career->category == 'Management' ? 'selected' : '' }}>Management</option>
                                            <option value="Data Analyst" {{ $career->category == 'Data Analyst' ? 'selected' : '' }}>Data Analyst</option>
                                        </select>
                                    </div>
                                    <div class="mb-3 col-md-6">
                                        <label class="form-label">Job Type</label>
                                        <input type="text" name="type" class="form-control" value="{{ $career->type }}" required>
                                    </div>
                                    <div class="mb-3 col-md-6">
                                        <label class="form-label">Experience</label>
                                        <input type="text" name="experience" class="form-control" value="{{ $career->experience }}" required>
                                    </div>
                                    <div class="mb-3 col-md-6">
                                        <label class="form-label">Location</label>
                                        <input type="text" name="location" class="form-control" value="{{ $career->location }}" required>
                                    </div>
                                    <div class="mb-3 col-md-6">
                                        <label class="form-label">Tags</label>
                                        <input type="text" name="tags" class="form-control" value="{{ $career->tags }}">
                                    </div>
                                    <div class="mb-3 col-md-12">
                                        <label class="form-label">Short Description</label>
                                        <textarea name="short_desc" class="form-control" rows="3" required>{{ $career->short_desc }}</textarea>
                                    </div>
                                    <div class="mb-3 col-md-12">
                                        <label class="form-label">Job Summary</label>
                                        <textarea name="description" id="editor_description" class="form-control" rows="4">{{ $career->description }}</textarea>
                                    </div>
                                    <div class="mb-3 col-md-12">
                                        <label class="form-label">Key Responsibilities</label>
                                        <textarea name="responsibilities" id="editor_responsibilities" class="form-control" rows="4" required>{{ $career->responsibilities }}</textarea>
                                    </div>
                                    <div class="mb-3 col-md-12">
                                        <label class="form-label">Required Skills</label>
                                        <textarea name="skills_required" id="editor_skills" class="form-control" rows="4" required>{{ $career->skills_required }}</textarea>
                                    </div>
                                    <div class="mb-3 col-md-12">
                                        <label class="form-label">Nice To Have</label>
                                        <textarea name="nice_to_have" id="editor_nice_to_have" class="form-control" rows="4">{{ $career->nice_to_have }}</textarea>
                                    </div>

                                    <div class="mb-3 col-md-6">
                                        <div class="form-check custom-checkbox mb-3">
                                            <input type="checkbox" class="form-check-input" id="customCheckBox1" name="status" value="1" {{ $career->status ? 'checked' : '' }}>
                                            <label class="form-check-label" for="customCheckBox1">Active</label>
                                        </div>
                                    </div>
                                </div>
                                <button type="submit" class="btn btn-primary">Update Job</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>

<script>
    // Initialize CKEditor
    window.addEventListener('load', function() {
        if (typeof CKEDITOR !== 'undefined') {
            CKEDITOR.replace('editor_description');
            CKEDITOR.replace('editor_responsibilities');
            CKEDITOR.replace('editor_skills');
            CKEDITOR.replace('editor_nice_to_have');
        }
    });
</script>
@endsection