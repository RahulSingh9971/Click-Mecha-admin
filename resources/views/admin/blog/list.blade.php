@extends('admin.layout.app')
@section('content')
<style>
    .switch {
        position: relative;
        display: inline-block;
        width: 50px;
        height: 24px;
    }

    .switch input {
        opacity: 0;
        width: 0;
        height: 0;
    }

    .slider {
        position: absolute;
        cursor: pointer;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background-color: #ccc;
        transition: .4s;
        border-radius: 34px;
    }

    .slider:before {
        position: absolute;
        content: "";
        height: 20px;
        width: 20px;
        left: 2px;
        bottom: 2px;
        background-color: white;
        transition: .4s;
        border-radius: 50%;
    }

    input:checked+.slider {
        background-color: #2196F3;
    }

    input:checked+.slider:before {
        transform: translateX(26px);
    }
</style>
<div class="content-body">
    <div class="container-fluid">
        <div class="page-titles">
            <ol class="breadcrumb">
                <li class="breadcrumb-item"><a href="javascript:void(0)">Blog</a></li>
                <li class="breadcrumb-item active"><a href="javascript:void(0)">Blogs</a></li>
            </ol>
        </div>
        <!-- Row -->
        <div class="row">
            <div class="col-xl-12">
                <div class="filter cm-content-box box-primary">
                    <div class="content-title SlideToolHeader">
                        <div class="cpa">
                            <i class="fa-sharp fa-solid fa-filter me-2"></i>Filter
                        </div>
                        <div class="tools">
                            <a href="javascript:void(0);" class="expand handle"><i class="fal fa-angle-down"></i></a>
                        </div>
                    </div>
                    <div class="cm-content-body form excerpt">
                        <div class="card-body">
                            <form method="GET" action="{{ route('admin.blogs') }}">
                                <div class="row">
                                    <div class="col-xl-3 col-sm-6">
                                        <label class="form-label">Title</label>
                                        <input type="text" class="form-control mb-xl-0 mb-3" name="title" placeholder="Title" value="{{ request('title') }}">
                                    </div>
                                    <div class="col-xl-3 col-sm-6 mb-3 mb-xl-0">
                                        <label class="form-label">Status</label>
                                        <select class="form-control default-select h-auto wide" name="status">
                                            <option value="">Select Status</option>
                                            <option value="1" {{ request('status') == '1' ? 'selected' : '' }}>Active</option>
                                            <option value="0" {{ request('status') == '0' ? 'selected' : '' }}>Inactive</option>
                                        </select>
                                    </div>
                                    <div class="col-xl-3 col-sm-6">
                                        <label class="form-label">Date</label>
                                        <div class="input-hasicon mb-sm-0 mb-3">
                                            <input type="date" name="date" class="form-control " value="{{ request('date') }}">
                                            <div class="icon"><i class="far fa-calendar"></i></div>
                                        </div>
                                    </div>
                                    <div class="col-xl-3 col-sm-6 align-self-end">
                                        <div>
                                            <button class="btn btn-primary rounded-sm me-2" title="Click here to Search" type="submit"><i class="fa fa-search me-1"></i>Filter</button>
                                            <a href="{{ route('admin.blogs') }}" class="btn btn-danger rounded-sm light" title="Click here to remove filter">
                                                Remove Filter
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
                <div class="mb-4 pb-3">
                    <ul class="d-flex align-items-center flex-wrap">
                        <li>
                            <a href="{{ route('admin.blog.add') }}" class="btn btn-primary btn-sm">
                                Add Blog
                            </a>
                        </li>
                        <li>
                            <a href="{{ route('admin.blog-cat.add') }}" class="btn btn-primary btn-sm mx-1">
                                Blog Category
                            </a>
                        </li>
                    </ul>
                </div>

                @include('utils.show_success')
                @include('utils.show_error')
                <div class="filter cm-content-box box-primary">
                    <div class="content-title SlideToolHeader">
                        <div class="cpa">
                            <i class="fa-solid fa-file-lines me-1"></i>Blogs List
                        </div>
                        <div class="tools">
                            <a href="javascript:void(0);" class="expand handle"><i class="fal fa-angle-down"></i></a>
                        </div>
                    </div>
                    <div class="cm-content-body form excerpt">
                        <div class="card-body pb-4">
                                <table class="table display mb-4 dataTablesCard overflow-hidden card-table" id="example">
                                    <thead>
                                        <tr>
                                            <th>S.No</th>
                                            <th>Title</th>
                                            <th>Sub Title</th>
                                            <th>Date</th>
                                            <th>Category</th>
                                            <th>Status</th>
                                            <th>Actions</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        @foreach($blogs as $blog)
                                        <tr>
                                            <td>{{ $loop->iteration }}</td>
                                            <td>{{ $blog->title }}</td>
                                            <td>{{ $blog->subtitle }}</td>
                                            <td>{{ date('d M Y', strtotime($blog->date)) }}</td>
                                            <td>{{ $blog->category->name }}</td>
                                            <td>
                                                <form id="status-form-{{ $blog->id }}" action="{{ route('admin.blog.status') }}" method="POST">
                                                    @csrf
                                                    <span class="badge light badge-{{ getStatusClass($blog->status) }}">{{ getStatusName($blog->status) }}</span>
                                                    <input type="hidden" name="id" value="{{ $blog->id }}">
                                                    <input type="hidden" name="status" value="{{ $blog->status ? 0 : 1 }}">
                                                    <label class="switch">
                                                        <input type="checkbox" onchange="document.getElementById('status-form-{{ $blog->id }}').submit()" {{ $blog->status ? 'checked' : '' }}>
                                                        <span class="slider round"></span>
                                                    </label>
                                                </form>
                                            </td>
                                            <td class="text-nowrap">
                                                <a href="{{ route('admin.blog.edit', $blog->id) }}" class="btn btn-warning btn-sm content-icon">
                                                    <i class="fa-solid fa-pen-to-square"></i>
                                                </a>
                                                <form action="{{ route('admin.blog.delete', $blog->id) }}" method="POST" style="display:inline-block;">
                                                    @csrf
                                                    @method('DELETE')
                                                    <button type="submit" class="btn btn-danger btn-sm content-icon" onclick="return confirm('Are you sure you want to delete this blog?');"> <i class="fa-solid fa-trash"></i></button>
                                                </form>
                                            </td>
                                        </tr>
                                        @endforeach
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