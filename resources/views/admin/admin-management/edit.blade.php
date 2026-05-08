@extends('admin.layout.app')
@section('content')
<style>
    .card-form {
        background: #fff;
        border-radius: 12px;
        box-shadow: 0 2px 20px rgba(0,0,0,0.08);
        overflow: hidden;
    }
    .card-form-header {
        background: #143642;
        padding: 24px 32px;
        color: #fff;
    }
    .card-form-header h4 {
        margin: 0;
        font-size: 20px;
        font-weight: 700;
        color: #fff;
    }
    .card-form-body {
        padding: 32px;
    }
    .permission-box {
        border: 1px solid #dee2e6;
        border-radius: 8px;
        padding: 20px;
        background-color: #fcfdfe;
    }
    .form-check-label {
        font-weight: 500;
        color: #333;
        cursor: pointer;
    }
    .form-check-input {
        cursor: pointer;
    }
    .back-btn {
        display: inline-flex;
        align-items: center;
        gap: 8px;
        background: #fff;
        color: #555;
        border: 1px solid #ddd;
        padding: 8px 18px;
        border-radius: 8px;
        font-size: 13px;
        font-weight: 500;
        text-decoration: none;
        transition: all 0.2s;
    }
    .back-btn:hover {
        background: #f5f5f5;
        color: #333;
        text-decoration: none;
    }
</style>

<div class="content-body">
    <div class="container-fluid">
        <div class="form-head page-titles d-flex align-items-center mb-4">
            <div class="me-auto">
                <h4 class="mb-1">Edit Sub-Admin / Employer</h4>
                <ol class="breadcrumb">
                    <li class="breadcrumb-item active">Masters</li>
                    <li class="breadcrumb-item"><a href="{{ route('admin.sub-admins.index') }}">Admin Management</a></li>
                    <li class="breadcrumb-item">Edit</li>
                </ol>
            </div>
            <a href="{{ route('admin.sub-admins.index') }}" class="back-btn">
                <i class="fa fa-arrow-left"></i> Back to List
            </a>
        </div>

        <div class="row">
            <div class="col-xl-8 col-lg-10 mx-auto">
                @include('utils.show_error')

                <div class="card-form">
                    <div class="card-form-header">
                        <h4>Update Account & Permissions</h4>
                    </div>

                    <div class="card-form-body">
                        <form action="{{ route('admin.sub-admins.update', $subAdmin->id) }}" method="POST">
                            @csrf
                            @method('PUT')

                            <div class="row">
                                <div class="col-md-6 mb-3">
                                    <label class="form-label font-weight-bold">Name <span class="text-danger">*</span></label>
                                    <input type="text" name="name" class="form-control" placeholder="Enter Full Name" value="{{ old('name', $subAdmin->name) }}" required>
                                </div>
                                <div class="col-md-6 mb-3">
                                    <label class="form-label font-weight-bold">Email Address <span class="text-danger">*</span></label>
                                    <input type="email" name="email" class="form-control" placeholder="Enter Email Address" value="{{ old('email', $subAdmin->email) }}" required>
                                </div>
                            </div>

                            <div class="row">
                                <div class="col-md-12 mb-4">
                                    <label class="form-label font-weight-bold">Password</label>
                                    <input type="password" name="password" class="form-control" placeholder="Leave blank to keep current password">
                                    <small class="text-muted">Minimum length of password should be 6 characters.</small>
                                </div>
                            </div>

                            <div class="row mb-4">
                                <div class="col-md-12">
                                    <label class="form-label font-weight-bold mb-2">Allowed Tabs / Modules <span class="text-danger">*</span></label>
                                    <p class="text-muted mb-3" style="font-size:13px;">Check the tabs that this sub-admin/employer should see in their sidebar menu and have access to.</p>
                                    
                                    <div class="permission-box">
                                        <div class="row">
                                            @foreach($modules as $slug => $label)
                                            <div class="col-md-6 col-lg-4 mb-3">
                                                <div class="form-check">
                                                    <input class="form-check-input" type="checkbox" name="permissions[]" value="{{ $slug }}" id="perm_{{ $slug }}" {{ is_array(old('permissions', $subAdmin->permissions)) && in_array($slug, old('permissions', $subAdmin->permissions)) ? 'checked' : '' }}>
                                                    <label class="form-check-label" for="perm_{{ $slug }}">
                                                        {{ $label }}
                                                    </label>
                                                </div>
                                            </div>
                                            @endforeach
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div class="d-flex justify-content-start gap-2">
                                <button type="submit" class="btn btn-primary" style="background-color:#143642; border-color:#143642;">
                                    <i class="fa fa-check me-1"></i> Update Sub-Admin
                                </button>
                                <a href="{{ route('admin.sub-admins.index') }}" class="btn btn-light">
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
