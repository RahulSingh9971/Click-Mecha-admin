@extends('admin.layout.app')

@section('content')
<div class="content-body">
    <div class="container-fluid">

        {{-- Page Header --}}
        <div class="form-head page-titles d-flex align-items-center mb-4">
            <div class="me-auto">
                <h4 class="mb-1">Edit Page Meta</h4>
                <ol class="breadcrumb">
                    <li class="breadcrumb-item"><a href="{{ route('admin.page-meta.index') }}">Page Meta</a></li>
                    <li class="breadcrumb-item active"><a href="javascript:void(0)">Edit: {{ $pageMeta->slug }}</a></li>
                </ol>
            </div>
            <a href="{{ route('admin.page-meta.index') }}" class="btn btn-secondary rounded light">
                <i class="fa fa-arrow-left me-1"></i> Back to List
            </a>
        </div>

        <div class="row justify-content-center">
            <div class="col-lg-8">
                <div class="card">
                    <div class="card-header d-flex justify-content-between align-items-center">
                        <h4 class="card-title mb-0">
                            <i class="fa fa-edit me-2 text-primary"></i>Editing: <span class="badge badge-primary ms-1">{{ $pageMeta->slug }}</span>
                        </h4>
                        <small class="text-muted">API: <code>/api/page-meta/{{ $pageMeta->slug }}</code></small>
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

                        <form action="{{ route('admin.page-meta.update', $pageMeta->id) }}" method="POST">
                            @csrf
                            @method('PUT')

                            {{-- Slug --}}
                            <div class="mb-4">
                                <label for="slug" class="form-label fw-bold">
                                    Page Slug <span class="text-danger">*</span>
                                </label>
                                <input type="text"
                                    class="form-control @error('slug') is-invalid @enderror"
                                    id="slug"
                                    name="slug"
                                    value="{{ old('slug', $pageMeta->slug) }}"
                                    placeholder="e.g. home, about, services, contact"
                                    required>
                                <div class="form-text text-muted">
                                    ⚠️ Changing the slug will change the API endpoint. Update your React app accordingly.
                                    Current API: <code>/api/page-meta/{{ $pageMeta->slug }}</code>
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
                                    value="{{ old('metaTitle', $pageMeta->metaTitle) }}"
                                    maxlength="255"
                                    required>
                                <div class="form-text d-flex justify-content-between">
                                    <span class="text-muted">Recommended: 50–60 characters.</span>
                                    <span id="titleCount" class="text-muted">{{ strlen($pageMeta->metaTitle) }}/255</span>
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
                                    required>{{ old('metaDesc', $pageMeta->metaDesc) }}</textarea>
                                <div class="form-text d-flex justify-content-between">
                                    <span class="text-muted">Recommended: 150–160 characters.</span>
                                    <span id="descCount" class="text-muted">{{ strlen($pageMeta->metaDesc) }} chars</span>
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
                                    value="{{ old('metaKeyword', $pageMeta->metaKeyword) }}"
                                    placeholder="keyword1, keyword2, keyword3"
                                    required>
                                <div class="form-text text-muted">
                                    Comma-separated keywords.
                                </div>
                                @error('metaKeyword')
                                <div class="invalid-feedback">{{ $message }}</div>
                                @enderror
                            </div>

                            {{-- Submit --}}
                            <div class="d-flex gap-2">
                                <button type="submit" class="btn btn-primary">
                                    <i class="fa fa-save me-1"></i> Update Page Meta
                                </button>
                                <a href="{{ route('admin.page-meta.index') }}" class="btn btn-light">
                                    Cancel
                                </a>
                            </div>
                        </form>
                    </div>
                </div>

                {{-- Delete Card --}}
                <div class="card border border-danger mt-3">
                    <div class="card-body d-flex justify-content-between align-items-center">
                        <div>
                            <h6 class="text-danger mb-1">Danger Zone</h6>
                            <p class="mb-0 text-muted small">Permanently delete this page meta entry. This cannot be undone.</p>
                        </div>
                        <form action="{{ route('admin.page-meta.destroy', $pageMeta->id) }}"
                            method="POST"
                            onsubmit="return confirm('Are you sure you want to permanently delete this page meta entry?')">
                            @csrf
                            @method('DELETE')
                            <button type="submit" class="btn btn-danger btn-sm">
                                <i class="fa fa-trash me-1"></i> Delete Entry
                            </button>
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

    document.getElementById('slug').addEventListener('input', function() {
        this.value = this.value.toLowerCase().replace(/\s+/g, '-').replace(/[^a-z0-9\-]/g, '');
    });
</script>
@endpush