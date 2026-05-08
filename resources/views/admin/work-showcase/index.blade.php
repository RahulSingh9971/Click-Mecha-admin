@extends('admin.layout.app')

@section('content')
<div class="content-body">
    <div class="container-fluid">
        <div class="form-head page-titles d-flex align-items-center">
            <div class="me-auto">
                <h4 class="mb-1">Work Showcase</h4>
                <ol class="breadcrumb">
                    <li class="breadcrumb-item active"><a href="javascript:void(0)">Work Showcase</a></li>
                    <li class="breadcrumb-item"><a href="javascript:void(0)">List</a></li>
                </ol>
            </div>
            <a href="{{ route('admin.work-showcase.create') }}" class="btn btn-primary rounded light">Add Work</a>
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
                        <h4 class="card-title">Portfolio & Work Showcase</h4>
                    </div>
                    <div class="card-body">
                        <div class="table-responsive">
                            <table id="example" class="table table-responsive-md">
                                <thead>
                                    <tr>
                                        <th><strong>Order</strong></th>
                                        <th><strong>Image</strong></th>
                                        <th><strong>Title</strong></th>
                                        <th><strong>Category</strong></th>
                                        <th><strong>Status</strong></th>
                                        <th><strong>Homepage</strong></th>
                                        <th><strong>Action</strong></th>
                                    </tr>
                                </thead>
                                <tbody>
                                    @forelse($workShowcases as $work)
                                    <tr>
                                        <td>{{ $work->display_order }}</td>
                                        <td>
                                            <img src="{{ asset('storage/' . $work->image) }}" alt="{{ $work->title }}" width="100" style="object-fit: cover; height: 60px; border-radius: 4px;">
                                        </td>
                                        <td>{{ $work->title }}</td>
                                        <td>{{ $work->category ?? 'N/A' }}</td>
                                        <td>
                                            @if($work->is_active)
                                            <span class="badge light badge-success">Active</span>
                                            @else
                                            <span class="badge light badge-danger">Inactive</span>
                                            @endif
                                        </td>
                                        <td>
                                            @if($work->show_on_homepage)
                                            <span class="badge light badge-info">Yes</span>
                                            @else
                                            <span class="badge light badge-secondary">No</span>
                                            @endif
                                        </td>
                                        <td>
                                            <div class="d-flex">
                                                <a href="{{ route('admin.work-showcase.edit', $work->id) }}" class="btn btn-primary shadow btn-xs sharp me-1"><i class="fas fa-pencil-alt"></i></a>
                                                <form action="{{ route('admin.work-showcase.destroy', $work->id) }}" method="POST" onsubmit="return confirm('Are you sure?')">
                                                    @csrf
                                                    @method('DELETE')
                                                    <button type="submit" class="btn btn-danger shadow btn-xs sharp"><i class="fa fa-trash"></i></button>
                                                </form>
                                            </div>
                                        </td>
                                    </tr>
                                    @empty
                                    <tr>
                                        <td colspan="7" class="text-center">No work showcase items found.</td>
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