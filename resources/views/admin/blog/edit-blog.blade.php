@extends('admin.layout.app')
@section('content')

<style>
    .avatar-upload {
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
    }

    .avatar-preview {
        width: 150px;
        height: 150px;
        border-radius: 50%;
        background-size: cover;
        background-position: center;
        background-color: #f8f8f8;
        border: 1px solid #d3d3d3;
        margin-bottom: 10px;
    }

    .change-btn {
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .form-container {
        margin-top: 30px;
    }

    .form-label {
        font-weight: 600;
    }
</style>

<div class="content-body">
    <div class="container-fluid">
        <div class="page-titles">
            <ol class="breadcrumb">
                <li class="breadcrumb-item"><a href="javascript:void(0)">CMS</a></li>
                <li class="breadcrumb-item active"><a href="javascript:void(0)">Edit
                        Blog</a></li>
            </ol>
        </div>
        <!-- Row -->
        <div class="row">
            <div class="col-xl-12">
                <div class="mb-4">
                    <ul class="d-flex align-items-center flex-wrap">
                        <li><a href="add-email.html" class="btn btn-primary btn-sm">Blog
                                List</a></li>
                        <li><a href="{{ route('admin.blog-cat.add') }}" class="btn btn-primary btn-sm mx-1">Blog Category</a></li>
                    </ul>
                </div>

                @include('utils.show_success')
                @include('utils.show_error')

                <form method="POST" action="{{ route('admin.blogs.update', $blog->id) }}" enctype="multipart/form-data">
                    @csrf
                    <div class="row">
                        <div class="col-xl-12">
                            <div class="card h-auto">
                                <div class="card-body">
                                    <div class="mb-3">
                                        <label class="form-label">Title <span class="text-danger">*</span> </label>
                                        <input type="text" class="form-control" placeholder="Title" name="title" id="title" value="{{ $blog->title }}">
                                    </div>
                                    <div class="d-flex gap-3">
                                        <div class="mb-3 col-6">
                                            <label class="form-label">Sub Title</label>
                                            <input type="text" class="form-control" placeholder="Sub Title" name="subTitle" id="subTitle" value="{{ $blog->subtitle }}">
                                        </div>
                                        <!-- <div class="mb-3  col-6">
                                            <label class="form-label">Slug <span class="text-danger">*</span> </label>
                                            <input type="text" class="form-control" placeholder="Slug" name="slug" id="slug" value="{{ $blog->slug }}">
                                        </div> -->
                                    </div>
                                    <div class="mb-3">
                                        <label class="form-label" for="desc">Description <span class="text-danger">*</span></label>
                                        <textarea class="form-control" name="desc" id="desc" placeholder="Description">{{ $blog->desc }}</textarea>
                                    </div>
                                    <div class="d-flex gap-3">
                                        <div class="mb-3 col-6">
                                            <label class="form-label">Date <span class="text-danger">*</span> </label>
                                            <input type="date" class="form-control" name="date" id="date" value="{{ $blog->date }}">
                                        </div>
                                        <div class="mb-3  col-6">
                                            <label class="form-label">Category <span class="text-danger">*</span> </label>
                                            <select class="form-control default-select h-auto wide" name="blog_category_id" id="blog_category_id" required>
                                                <option value="">Select Category</option>
                                                @foreach($categories as $cat)
                                                <option value="{{ $cat->id }}" {{ $cat->id == $blog->blog_category_id ? 'selected' : '' }}>{{ $cat->name }}</option>
                                                @endforeach
                                            </select>
                                        </div>
                                    </div>
                                    <div class="d-flex gap-3">
                                        <div class="mb-3 col-6">
                                            <label class="form-label">Author <span class="text-danger">*</span> </label>
                                            <select class="form-control default-select h-auto wide" name="author_id" id="author_id" required>
                                                <option value="">Select Author</option>
                                                @foreach($authors as $author)
                                                <option value="{{ $author->id }}" {{ $author->id == $blog->author_id ? 'selected' : '' }}>{{ $author->name }}</option>
                                                @endforeach
                                            </select>
                                        </div>
                                        <div class="mb-3  col-6">
                                            <label class="form-label">Sort Order </label>
                                            <input type="text" class="form-control" placeholder="Sort Order" name="sortOrder" id="sortOrder" value="{{ $blog->sortOrder }}">
                                        </div>
                                    </div>
                                    <div class="d-flex gap-3">
                                        <div class="mb-3  col-6">
                                            <label class="form-label">Meta Title <span class="text-danger">*</span></label>
                                            <input type="text" class="form-control" placeholder="Meta Title" name="metaTitle" id="metaTitle" value="{{ $blog->metaTitle }}">
                                        </div>
                                        <div class="mb-3  col-6">
                                            <label class="form-label">Meta Keywords <span class="text-danger">*</span></label>
                                            <input type="text" class="form-control" placeholder="Meta Keywords" name="metaKeyword" id="metaKeyword" value="{{ $blog->metaKeyword }}">
                                        </div>
                                    </div>
                                    <div class="d-flex gap-3">
                                        <div class="mb-3  col-6">
                                            <label class="form-label">Meta Description <span class="text-danger">*</span></label>
                                            <input type="text" class="form-control" placeholder="Meta Description" name="metaDesc" id="metaDesc" value="{{ $blog->metaDesc }}">
                                        </div>

                                        <div class="mb-3 col-6 d-flex justify-content-center align-items-center">
                                            <div class="avatar-upload">
                                                <div class="avatar-preview" id="imagePreview" style="background-image: url('{{ asset('storage/blogs/media/' . $blog->image) }}');"></div>
                                                <div class="change-btn">
                                                    <input type='file' class="form-control d-none" id="imageUpload" name="image" accept=".png, .jpg, .jpeg">
                                                    <label for="imageUpload" class="btn btn-primary light btn-sm ms-0">Select Image</label>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <hr>
                                    <h4>FAQ Section</h4>
                                    <div id="faq-section">
                                        @if($blog->faqs && $blog->faqs->count() > 0)
                                            @foreach($blog->faqs as $faq)
                                            <div class="faq-item row mb-3">
                                                <div class="col-md-5">
                                                    <label class="form-label">Question</label>
                                                    <input type="text" name="faq_question[]" class="form-control" value="{{ $faq->question }}" placeholder="Question">
                                                </div>
                                                <div class="col-md-6">
                                                    <label class="form-label">Answer</label>
                                                    <textarea name="faq_answer[]" class="form-control" placeholder="Answer">{{ $faq->answer }}</textarea>
                                                </div>
                                                <div class="col-md-1 d-flex align-items-end">
                                                    <button type="button" class="btn btn-danger btn-sm remove-faq">X</button>
                                                </div>
                                            </div>
                                            @endforeach
                                        @else
                                            <div class="faq-item row mb-3">
                                                <div class="col-md-5">
                                                    <label class="form-label">Question</label>
                                                    <input type="text" name="faq_question[]" class="form-control" placeholder="Question">
                                                </div>
                                                <div class="col-md-6">
                                                    <label class="form-label">Answer</label>
                                                    <textarea name="faq_answer[]" class="form-control" placeholder="Answer"></textarea>
                                                </div>
                                                <div class="col-md-1 d-flex align-items-end">
                                                    <button type="button" class="btn btn-danger btn-sm remove-faq">X</button>
                                                </div>
                                            </div>
                                        @endif
                                    </div>
                                    <button type="button" class="btn btn-success btn-sm mb-3" id="add-faq">Add More FAQ</button>
                                    <hr>

                                    <div class="col text-start">
                                        <button type="submit" class="btn btn-primary">Save</button>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </form>

            </div>
        </div>
    </div>
</div>

@endsection

@push('scripts')
<script>
    document.addEventListener('DOMContentLoaded', function() {
        const imageUpload = document.getElementById('imageUpload');
        const imagePreview = document.getElementById('imagePreview');

        imageUpload.addEventListener('change', function() {
            const file = this.files[0];

            if (file) {
                const reader = new FileReader();
                reader.onload = function(e) {
                    imagePreview.style.backgroundImage = 'url(' + e.target.result + ')';
                }
                reader.readAsDataURL(file);
            }
        });
    });
</script>
<script>
    document.addEventListener('DOMContentLoaded', function() {
        CKEDITOR.replace('desc');
        
        document.getElementById('add-faq').addEventListener('click', function() {
            const section = document.getElementById('faq-section');
            const newFaq = document.createElement('div');
            newFaq.className = 'faq-item row mb-3';
            newFaq.innerHTML = `
                <div class="col-md-5">
                    <input type="text" name="faq_question[]" class="form-control" placeholder="Question">
                </div>
                <div class="col-md-6">
                    <textarea name="faq_answer[]" class="form-control" placeholder="Answer"></textarea>
                </div>
                <div class="col-md-1 d-flex align-items-end">
                    <button type="button" class="btn btn-danger btn-sm remove-faq">X</button>
                </div>
            `;
            section.appendChild(newFaq);
        });

        document.getElementById('faq-section').addEventListener('click', function(e) {
            if (e.target.classList.contains('remove-faq')) {
                e.target.closest('.faq-item').remove();
            }
        });
    });
</script>

@endpush