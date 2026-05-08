@extends('admin.layout.app')

@section('content')
<div class="content-body">
    <div class="container-fluid">

        {{-- Page Header --}}
        <div class="form-head page-titles d-flex align-items-center mb-4">
            <div class="me-auto">
                <h4 class="mb-1">Add Page Meta</h4>
                <ol class="breadcrumb">
                    <li class="breadcrumb-item"><a href="{{ route('admin.page-meta.index') }}">Page Meta</a></li>
                    <li class="breadcrumb-item active"><a href="javascript:void(0)">Add New</a></li>
                </ol>
            </div>
            <a href="{{ route('admin.page-meta.index') }}" class="btn btn-secondary rounded light">
                <i class="fa fa-arrow-left me-1"></i> Back to List
            </a>
        </div>

        <div class="row justify-content-center">
            <div class="col-lg-8">
                <div class="card">
                    <div class="card-header">
                        <h4 class="card-title mb-0">
                            <i class="fa fa-tags me-2 text-primary"></i>New Page Meta Entry
                        </h4>
                    </div>
                    <div class="card-body">

                        @if($errors->any())
                        <div class="alert alert-danger alert-dismissible fade show" role="alert">
                            <ul class="mb-0">
                                @foreach($errors->all() as $error)
                                <li>{{ $error }}</li>
                                @endforeach
                            </ul>
                            <button type="button" class="btn-close" data-bs-dismiss="alert"></button>
                        </div>
                        @endif

                        <form action="{{ route('admin.page-meta.store') }}" method="POST">
                            @csrf

                            {{-- Slug --}}
                            <div class="mb-4">
                                <label for="slug" class="form-label fw-bold">
                                    Page Slug <span class="text-danger">*</span>
                                </label>
                                <input type="text"
                                    class="form-control @error('slug') is-invalid @enderror"
                                    id="slug"
                                    name="slug"
                                    value="{{ old('slug') }}"
                                    placeholder="e.g. home, about, services, contact"
                                    required>
                                <div class="form-text text-muted">
                                    This is the unique identifier for your React page. Use lowercase with hyphens (e.g., <code>home</code>, <code>about-us</code>, <code>contact</code>).
                                    The API will be accessible at <code>/api/page-meta/{slug}</code>.
                                </div>
                                @error('slug')
                                <div class="invalid-feedback">{{ $message }}</div>
                                @enderror
                            </div>

                            {{-- Meta Title --}}
                            <div class="mb-4">
                                <label for="metaTitle" class="form-label fw-bold">
                                    Meta Title <span class="text-danger">*</span>
                                </label>
                                <input type="text"
                                    class="form-control @error('metaTitle') is-invalid @enderror"
                                    id="metaTitle"
                                    name="metaTitle"
                                    value="{{ old('metaTitle') }}"
                                    placeholder="e.g. Home | My Awesome Company"
                                    maxlength="255"
                                    required>
                                <div class="form-text d-flex justify-content-between">
                                    <span class="text-muted">Recommended: 50–60 characters. This appears in browser tabs and search results.</span>
                                    <span id="titleCount" class="text-muted">0/255</span>
                                </div>
                                @error('metaTitle')
                                <div class="invalid-feedback">{{ $message }}</div>
                                @enderror
                            </div>

                            {{-- Meta Description --}}
                            <div class="mb-4">
                                <label for="metaDesc" class="form-label fw-bold">
                                    Meta Description <span class="text-danger">*</span>
                                </label>
                                <textarea class="form-control @error('metaDesc') is-invalid @enderror"
                                    id="metaDesc"
                                    name="metaDesc"
                                    rows="4"
                                    placeholder="A brief, compelling description of this page for search engines..."
                                    required>{{ old('metaDesc') }}</textarea>
                                <div class="form-text d-flex justify-content-between">
                                    <span class="text-muted">Recommended: 150–160 characters. Shown in Google search result snippets.</span>
                                    <span id="descCount" class="text-muted">0 chars</span>
                                </div>
                                @error('metaDesc')
                                <div class="invalid-feedback">{{ $message }}</div>
                                @enderror
                            </div>

                            {{-- Meta Keywords --}}
                            <div class="mb-4">
                                <label for="metaKeyword" class="form-label fw-bold">
                                    Meta Keywords <span class="text-danger">*</span>
                                </label>
                                <input type="text"
                                    class="form-control @error('metaKeyword') is-invalid @enderror"
                                    id="metaKeyword"
                                    name="metaKeyword"
                                    value="{{ old('metaKeyword') }}"
                                    placeholder="keyword1, keyword2, keyword3"
                                    required>
                                <div class="form-text text-muted">
                                    Comma-separated keywords related to this page (e.g., <em>web design, digital marketing, SEO</em>).
                                </div>
                                @error('metaKeyword')
                                <div class="invalid-feedback">{{ $message }}</div>
                                @enderror
                            </div>

                            {{-- Submit --}}
                            <div class="d-flex gap-2">
                                <button type="submit" class="btn btn-primary">
                                    <i class="fa fa-save me-1"></i> Save Page Meta
                                </button>
                                <a href="{{ route('admin.page-meta.index') }}" class="btn btn-light">
                                    Cancel
                                </a>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>

    </div>
</div>
@endsection

@push('scripts')
<script>
    // Character counters
    const titleInput = document.getElementById('metaTitle');
    const descArea = document.getElementById('metaDesc');
    const titleCount = document.getElementById('titleCount');
    const descCount = document.getElementById('descCount');

    titleInput.addEventListener('input', function() {
        const len = this.value.length;
        titleCount.textContent = len + '/255';
        titleCount.className = len > 60 ? 'text-warning' : 'text-muted';
    });

    descArea.addEventListener('input', function() {
        const len = this.value.length;
        descCount.textContent = len + ' chars';
        descCount.className = (len > 160) ? 'text-warning' : 'text-muted';
    });

    // Auto-format slug on input
    document.getElementById('slug').addEventListener('input', function() {
        this.value = this.value.toLowerCase().replace(/\s+/g, '-').replace(/[^a-z0-9\-]/g, '');
    });
</script>
@endpush