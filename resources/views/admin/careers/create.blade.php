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
                <h4 class="mb-1">Add Job Posting</h4>
                <ol class="breadcrumb">
                    <li class="breadcrumb-item"><a href="{{ route('admin.careers.index') }}">Careers</a></li>
                    <li class="breadcrumb-item active"><a href="javascript:void(0)">Add</a></li>
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
                            <form action="{{ route('admin.careers.store') }}" method="POST">
                                @csrf
                                <div class="row">
                                    <div class="mb-3 col-md-6">
                                        <label class="form-label">Job Title</label>
                                        <input type="text" name="title" class="form-control" placeholder="e.g. Video Editor" required>
                                    </div>
                                    <div class="mb-3 col-md-6">
                                        <label class="form-label">Category</label>
                                        <select name="category" class="form-control" required>
                                            <option value="">Choose...</option>
                                            <option value="Designing">Designing</option>
                                            <option value="Development">Development</option>
                                            <option value="Marketing">Marketing</option>
                                            <option value="Management">Management</option>
                                            <option value="Data Analyst">Data Analyst</option>
                                        </select>
                                    </div>
                                    <div class="mb-3 col-md-6">
                                        <label class="form-label">Job Type</label>
                                        <input type="text" name="type" class="form-control" placeholder="e.g. Full-Time Role (On-Site)" required>
                                    </div>
                                    <div class="mb-3 col-md-6">
                                        <label class="form-label">Experience</label>
                                        <input type="text" name="experience" class="form-control" placeholder="e.g. 2+ Years" required>
                                    </div>
                                    <div class="mb-3 col-md-6">
                                        <label class="form-label">Location</label>
                                        <input type="text" name="location" class="form-control" placeholder="e.g. Netaji Subhash Place" required>
                                    </div>
                                    <div class="mb-3 col-md-6">
                                        <label class="form-label">Tags (Comma Separated)</label>
                                        <input type="text" name="tags" class="form-control" placeholder="e.g. Adobe Premiere Pro, After Effects">
                                    </div>
                                    <div class="mb-3 col-md-12">
                                        <label class="form-label">Short Description (for card)</label>
                                        <textarea name="short_desc" class="form-control" rows="3" required></textarea>
                                    </div>
                                    <div class="mb-3 col-md-12">
                                        <label class="form-label">Job Summary</label>
                                        <textarea name="description" id="editor_description" class="form-control" rows="4"></textarea>
                                    </div>
                                    <div class="mb-3 col-md-12">
                                        <label class="form-label">Key Responsibilities (HTML/Bullets)</label>
                                        <textarea name="responsibilities" id="editor_responsibilities" class="form-control" rows="4" required></textarea>
                                    </div>
                                    <div class="mb-3 col-md-12">
                                        <label class="form-label">Required Skills (HTML/Bullets)</label>
                                        <textarea name="skills_required" id="editor_skills" class="form-control" rows="4" required></textarea>
                                    </div>
                                    <div class="mb-3 col-md-12">
                                        <label class="form-label">Nice To Have (HTML/Bullets)</label>
                                        <textarea name="nice_to_have" id="editor_nice_to_have" class="form-control" rows="4"></textarea>
                                    </div>

                                    <div class="mb-3 col-md-6">
                                        <div class="form-check custom-checkbox mb-3">
                                            <input type="checkbox" class="form-check-input" id="customCheckBox1" name="status" value="1" checked>
                                            <label class="form-check-label" for="customCheckBox1">Active</label>
                                        </div>
                                    </div>
                                </div>
                                <button type="submit" class="btn btn-primary">Save Job</button>
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