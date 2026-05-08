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
                <li class="breadcrumb-item active"><a href="javascript:void(0)">Blog Category</a></li>
            </ol>
        </div>
        @include('utils.show_success')
        @include('utils.show_error')
        <!-- Row -->
        <div class="row">
            <div class="col-xl-4">
                <div class="filter cm-content-box box-primary">
                    <div class="content-title SlideToolHeader">
                        <div class="cpa">
                            Add Blog Category
                        </div>
                        <div class="tools">
                            <a href="javascript:void(0);" class="expand handle"><i class="fal fa-angle-down"></i></a>
                        </div>
                    </div>

                    <div class="cm-content-body form excerpt">
                        <form action="{{ route('admin.blog-cat.add') }}" method="POST">
                            @csrf
                            <div class="card-body">
                                <div class="mb-3">
                                    <label class="form-label">Category Name</label>
                                    <input type="text" class="form-control" id="name" name="name" placeholder="Name" required>
                                </div>
                                <div class="mb-3">
                                    <label class="form-label">Parent Category</label>
                                    <select id="parent_category_id" name="blog_category_id" class="form-control">
                                        <option value="">Select Blog Categories</option>
                                        @foreach($blogCategories as $list)
                                        <option value="{{$list->id}}">
                                            {{$list->name}}
                                        </option>
                                        @endforeach
                                    </select>
                                </div>
                                <div>
                                    <button type="submit" class="btn btn-primary">Save</button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            <div class="col-xl-8">
                <div class="filter cm-content-box box-primary">
                    <div class="content-title SlideToolHeader">
                        <div class="cpa">
                            Blog Category List
                        </div>
                        <div class="tools">
                            <a href="javascript:void(0);" class="expand handle"><i class="fal fa-angle-down"></i></a>
                        </div>
                    </div>
                    <div class="cm-content-body publish-content form excerpt">
                        <div class="card-body">
                            <div class="table-responsive">
                                <table id="example" class="table table-bordered table-striped verticle-middle table-responsive-sm">
                                    <thead>
                                        <tr>
                                            <th scope="col ms-2">S.No</th>
                                            <th scope="col">Name</th>
                                            <th scope="col">Status</th>
                                            <th scope="col">Actions</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        @foreach($blogCategories as $list)
                                        <tr>
                                            <td class="ms-2">{{ $loop->iteration }}</td>
                                            <td>{{ $list->name }}</td>
                                            <td>
                                                <form id="status-form-{{ $list->id }}" action="{{ route('admin.blog-cat.status') }}" method="POST">
                                                    @csrf
                                                    <span class="badge light badge-{{ getStatusClass($list->status) }}">{{ getStatusName($list->status) }}</span>
                                                    <input type="hidden" name="id" value="{{ $list->id }}">
                                                    <input type="hidden" name="status" value="{{ $list->status ? 0 : 1 }}">
                                                    <label class="switch">
                                                        <input type="checkbox" onchange="document.getElementById('status-form-{{ $list->id }}').submit()" {{ $list->status ? 'checked' : '' }}>
                                                        <span class="slider round"></span>
                                                    </label>
                                                </form>
                                            </td>
                                            <td>
                                                <div>
                                                    <a href="javascript:void(0);">Edit</a>
                                                    <span>|</span>
                                                    <a href="javascript:void(0);">Up</a>
                                                    <span>|</span>
                                                    <a href="javascript:void(0);">down</a>
                                                    <span>|</span>
                                                    <a href="javascript:void(0);">delete</a>
                                                </div>
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
</div>
@endsection