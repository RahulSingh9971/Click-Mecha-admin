@extends('admin.layout.app')

@section('content')
<div class="content-body">
    <div class="container-fluid">
        <div class="form-head page-titles d-flex align-items-center">
            <div class="me-auto">
                <h4 class="mb-1">Careers</h4>
                <ol class="breadcrumb">
                    <li class="breadcrumb-item active"><a href="javascript:void(0)">Careers</a></li>
                    <li class="breadcrumb-item"><a href="javascript:void(0)">List</a></li>
                </ol>
            </div>
            <a href="{{ route('admin.careers.create') }}" class="btn btn-primary rounded light">Add New Job</a>
        </div>

        <div class="row">
            <div class="col-12">
                <div class="card">
                    <div class="card-header">
                        <h4 class="card-title">Job Postings</h4>
                    </div>
                    <div class="card-body">
                            <table id="example" class="table">
                                <thead>
                                    <tr>
                                        <th><strong>ID</strong></th>
                                        <th><strong>Title</strong></th>
                                        <th><strong>Category</strong></th>
                                        <th><strong>Location</strong></th>
                                        <th><strong>Experience</strong></th>
                                        <th><strong>Status</strong></th>
                                        <th><strong>Action</strong></th>
                                    </tr>
                                </thead>
                                <tbody>
                                    @foreach($careers as $career)
                                    <tr>
                                        <td>{{ $career->id }}</td>
                                        <td>{{ $career->title }}</td>
                                        <td>{{ $career->category }}</td>
                                        <td>{{ $career->location }}</td>
                                        <td>{{ $career->experience }}</td>
                                        <td>
                                            @if($career->status)
                                            <span class="badge light badge-success">Active</span>
                                            @else
                                            <span class="badge light badge-danger">Inactive</span>
                                            @endif
                                        </td>
                                        <td>
                                            <div class="d-flex">
                                                <a href="{{ route('admin.careers.edit', $career->id) }}" class="btn btn-primary shadow btn-xs sharp me-1"><i class="fas fa-pencil-alt"></i></a>
                                                <form action="{{ route('admin.careers.destroy', $career->id) }}" method="POST" onsubmit="return confirm('Are you sure?')">
                                                    @csrf
                                                    @method('DELETE')
                                                    <button type="submit" class="btn btn-danger shadow btn-xs sharp"><i class="fa fa-trash"></i></button>
                                                </form>
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
@endsection