@extends('admin.layout.app')

@section('content')
<div class="content-body">
    <div class="container-fluid">
        <div class="form-head page-titles d-flex align-items-center">
            <div class="me-auto">
                <h4 class="mb-1">Edit Client</h4>
                <ol class="breadcrumb">
                    <li class="breadcrumb-item"><a href="{{ route('admin.clients.index') }}">Clients</a></li>
                    <li class="breadcrumb-item active"><a href="javascript:void(0)">Edit</a></li>
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
                            <form action="{{ route('admin.clients.update', $client->id) }}" method="POST" enctype="multipart/form-data">
                                @csrf
                                @method('PUT')
                                <div class="row">
                                    <div class="mb-3 col-md-6">
                                        <label class="form-label">Client Name</label>
                                        <input type="text" name="name" class="form-control" value="{{ $client->name }}" required>
                                    </div>
                                    <div class="mb-3 col-md-6">
                                        <label class="form-label">Sort Order</label>
                                        <input type="number" name="sort_order" class="form-control" value="{{ $client->sort_order }}">
                                    </div>
                                    <div class="mb-3 col-md-12">
                                        <label class="form-label">Client Logo (Leave empty to keep current)</label>
                                        <div class="form-file">
                                            <input type="file" name="logo" class="form-file-input form-control" accept="image/*">
                                        </div>
                                        @if($client->logo)
                                        <div class="mt-2">
                                            <img src="{{ asset('storage/clients/' . $client->logo) }}" width="100">
                                        </div>
                                        @endif
                                    </div>
                                    <div class="mb-3 col-md-6">
                                        <div class="form-check custom-checkbox mb-3">
                                            <input type="checkbox" class="form-check-input" id="customCheckBox1" name="status" value="1" {{ $client->status ? 'checked' : '' }}>
                                            <label class="form-check-label" for="customCheckBox1">Active</label>
                                        </div>
                                    </div>
                                    <div class="mb-3 col-md-6">
                                        <div class="form-check custom-checkbox mb-3">
                                            <input type="checkbox" class="form-check-input" id="customCheckBox2" name="show_on_homepage" value="1" {{ $client->show_on_homepage ? 'checked' : '' }}>
                                            <label class="form-check-label" for="customCheckBox2">Show on Homepage</label>
                                        </div>
                                    </div>
                                </div>
                                <button type="submit" class="btn btn-primary">Update Client</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
@endsection