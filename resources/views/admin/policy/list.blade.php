@extends('admin.layout.app')
@section('content')
<div class="content-body">
    <div class="container-fluid">
        <div class="page-titles">
            <ol class="breadcrumb">
                <li class="breadcrumb-item"><a href="javascript:void(0)">Policies</a></li>
                <li class="breadcrumb-item active"><a href="javascript:void(0)">Policy List</a></li>
            </ol>
        </div>
        <!-- Row -->
        <div class="row">
            <div class="col-xl-12">
                <div class="mb-4 pb-3">
                    <ul class="d-flex align-items-center flex-wrap">
                        <li>
                            <a href="{{ route('admin.policies.create') }}" class="btn btn-primary btn-sm">
                                Add New Policy
                            </a>
                        </li>
                    </ul>
                </div>

                @include('utils.show_success')
                @include('utils.show_error')
                <div class="filter cm-content-box box-primary">
                    <div class="content-title SlideToolHeader">
                        <div class="cpa">
                            <i class="fa-solid fa-file-lines me-1"></i>Policies List
                        </div>
                        <div class="tools">
                            <a href="javascript:void(0);" class="expand handle"><i class="fal fa-angle-down"></i></a>
                        </div>
                    </div>
                    <div class="cm-content-body form excerpt">
                        <div class="card-body pb-4">
                            <div class="table-responsive fs-14">
                                <table class="table display mb-4 dataTablesCard overflow-hidden card-table" id="example5">
                                    <thead>
                                        <tr>
                                            <th>S.No</th>
                                            <th>Page Type</th>
                                            <th>Page Title</th>
                                            <th>Sections</th>
                                            <th>Status</th>
                                            <th>Actions</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        @foreach($policies as $policy)
                                        <tr>
                                            <td>{{ $loop->iteration }}</td>
                                            <td>{{ ucwords(str_replace('-', ' ', $policy->page_type)) }}</td>
                                            <td>{{ $policy->page_title }}</td>
                                            <td>{{ count($policy->sections) }} sections</td>
                                            <td>
                                                <span class="badge light badge-{{ $policy->is_active ? 'success' : 'danger' }}">
                                                    {{ $policy->is_active ? 'Active' : 'Inactive' }}
                                                </span>
                                            </td>
                                            <td class="text-nowrap">
                                                <a href="{{ route('admin.policies.edit', $policy->id) }}" class="btn btn-warning btn-sm content-icon">
                                                    <i class="fa-solid fa-pen-to-square"></i>
                                                </a>
                                                <form action="{{ route('admin.policies.destroy', $policy->id) }}" method="POST" style="display:inline-block;">
                                                    @csrf
                                                    @method('DELETE')
                                                    <button type="submit" class="btn btn-danger btn-sm content-icon" onclick="return confirm('Are you sure you want to delete this policy?');"> <i class="fa-solid fa-trash"></i></button>
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
</div>

@endsection
