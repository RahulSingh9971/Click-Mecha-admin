@extends('admin.layout.app')

@section('content')
<div class="content-body">
    <div class="container-fluid">
        <div class="form-head page-titles d-flex align-items-center">
            <div class="me-auto">
                <h4 class="mb-1">Add Client</h4>
                <ol class="breadcrumb">
                    <li class="breadcrumb-item"><a href="{{ route('admin.clients.index') }}">Clients</a></li>
                    <li class="breadcrumb-item active"><a href="javascript:void(0)">Add</a></li>
                </ol>
            </div>
        </div>

        <div class="row">
            <div class="col-xl-12 col-lg-12">
                <div class="card">
                    <div class="card-header">
                        <h4 class="card-title">Client Details</h4>
                    </div>
                    <div class="card-body">
                        <div class="basic-form">
                            <form action="{{ route('admin.clients.store') }}" method="POST" enctype="multipart/form-data">
                                @csrf
                                <div class="row">
                                    <div class="mb-3 col-md-6">
                                        <label class="form-label">Client Name</label>
                                        <input type="text" name="name" class="form-control" placeholder="Client Name" required>
                                    </div>
                                    <div class="mb-3 col-md-6">
                                        <label class="form-label">Sort Order</label>
                                        <input type="number" name="sort_order" class="form-control" value="0">
                                    </div>
                                    <div class="mb-3 col-md-12">
                                        <label class="form-label">Client Logo</label>
                                        <div class="form-file">
                                            <input type="file" name="logo" class="form-file-input form-control" required accept="image/*">
                                        </div>
                                    </div>
                                    <div class="mb-3 col-md-6">
                                        <div class="form-check custom-checkbox mb-3">
                                            <input type="checkbox" class="form-check-input" id="customCheckBox1" name="status" value="1" checked>
                                            <label class="form-check-label" for="customCheckBox1">Active</label>
                                        </div>
                                    </div>
                                    <div class="mb-3 col-md-6">
                                        <div class="form-check custom-checkbox mb-3">
                                            <input type="checkbox" class="form-check-input" id="customCheckBox2" name="show_on_homepage" value="1">
                                            <label class="form-check-label" for="customCheckBox2">Show on Homepage</label>
                                        </div>
                                    </div>
                                </div>
                                <button type="submit" class="btn btn-primary">Save Client</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
@endsection