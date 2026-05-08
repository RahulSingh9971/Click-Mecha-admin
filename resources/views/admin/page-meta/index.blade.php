@extends('admin.layout.app')

@section('content')
<div class="content-body">
    <div class="container-fluid">

        {{-- Page Header --}}
        <div class="form-head page-titles d-flex align-items-center mb-4">
            <div class="me-auto">
                <h4 class="mb-1">Page Meta Management</h4>
                <ol class="breadcrumb">
                    <li class="breadcrumb-item active"><a href="javascript:void(0)">SEO</a></li>
                    <li class="breadcrumb-item"><a href="javascript:void(0)">Page Meta</a></li>
                </ol>
            </div>
            <a href="{{ route('admin.page-meta.create') }}" class="btn btn-primary rounded light">
                <i class="fa fa-plus me-1"></i> Add Page Meta
            </a>
        </div>

        {{-- Alerts --}}
        @if(session('success'))
        <div class="alert alert-success alert-dismissible fade show" role="alert">
            <i class="fa fa-check-circle me-2"></i>{{ session('success') }}
            <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
        </div>
        @endif
        @if(session('error'))
        <div class="alert alert-danger alert-dismissible fade show" role="alert">
            <i class="fa fa-exclamation-circle me-2"></i>{{ session('error') }}
            <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
        </div>
        @endif

        {{-- Info Card --}}
        <div class="alert alert-info alert-dismissible fade show" role="alert">
            <i class="fa fa-info-circle me-2"></i>
            <strong>About Page Meta:</strong> Each entry maps a <strong>page slug</strong> (e.g. <code>home</code>, <code>about</code>, <code>services</code>) to its SEO meta title, description, and keywords. Your React app can fetch these via <code>GET /api/page-meta/{slug}</code>.
            <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
        </div>

        {{-- Table --}}
        <div class="row">
            <div class="col-12">
                <div class="card">
                    <div class="card-header d-flex justify-content-between align-items-center">
                        <h4 class="card-title mb-0">All Page Meta Entries</h4>
                        <span class="badge badge-primary">{{ $pageMetas->count() }} total</span>
                    </div>
                    <div class="card-body">
                        <div class="table-responsive">
                            <table class="table table-responsive-md" id="example">
                                <thead>
                                    <tr>
                                        <th><strong>#</strong></th>
                                        <th><strong>Page Slug</strong></th>
                                        <th><strong>Meta Title</strong></th>
                                        <th><strong>Meta Description</strong></th>
                                        <th><strong>Keywords</strong></th>
                                        <th><strong>API Endpoint</strong></th>
                                        <th><strong>Actions</strong></th>
                                    </tr>
                                </thead>
                                <tbody>
                                    @forelse($pageMetas as $index => $meta)
                                    <tr>
                                        <td>{{ $index + 1 }}</td>
                                        <td>
                                            <span class="badge badge-primary">{{ $meta->slug }}</span>
                                        </td>
                                        <td>
                                            <span title="{{ $meta->metaTitle }}">
                                                {{ Str::limit($meta->metaTitle, 45) }}
                                            </span>
                                        </td>
                                        <td>
                                            <span title="{{ $meta->metaDesc }}">
                                                {{ Str::limit($meta->metaDesc, 60) }}
                                            </span>
                                        </td>
                                        <td>
                                            <span title="{{ $meta->metaKeyword }}">
                                                {{ Str::limit($meta->metaKeyword, 40) }}
                                            </span>
                                        </td>
                                        <td>
                                            <code class="text-muted" style="font-size:11px;">/api/page-meta/{{ $meta->slug }}</code>
                                        </td>
                                        <td>
                                            <div class="d-flex gap-1">
                                                <a href="{{ route('admin.page-meta.edit', $meta->id) }}"
                                                    class="btn btn-primary shadow btn-xs sharp me-1"
                                                    title="Edit">
                                                    <i class="fas fa-pencil-alt"></i>
                                                </a>
                                                <form action="{{ route('admin.page-meta.destroy', $meta->id) }}"
                                                    method="POST"
                                                    onsubmit="return confirm('Are you sure you want to delete this page meta entry?')">
                                                    @csrf
                                                    @method('DELETE')
                                                    <button type="submit"
                                                        class="btn btn-danger shadow btn-xs sharp"
                                                        title="Delete">
                                                        <i class="fa fa-trash"></i>
                                                    </button>
                                                </form>
                                            </div>
                                        </td>
                                    </tr>
                                    @empty
                                    <tr>
                                        <td colspan="7" class="text-center py-4">
                                            <div class="text-muted">
                                                <i class="fa fa-search fa-2x mb-3 d-block"></i>
                                                No page meta entries found.
                                                <a href="{{ route('admin.page-meta.create') }}" class="d-block mt-2">Add your first page meta</a>
                                            </div>
                                        </td>
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