@extends('admin.layout.app')

@section('content')

<style>
    /* Unique CSS only for profile page */
    .admin-profile-card {
        border-radius: 14px;
        border: 1px solid #f0f0f0;
    }

    .admin-profile-avatar {
        width: 60px;
        height: 60px;
        border-radius: 50%;
        background: #111827;
        color: #fff;
        display: flex;
        align-items: center;
        justify-content: center;
        font-weight: 700;
        font-size: 20px;
        flex-shrink: 0;
    }

    .admin-profile-input {
        height: 46px;
        border-radius: 10px;
    }

    .admin-profile-btn {
        border-radius: 10px;
        height: 42px;
    }

    .admin-profile-alert {
        border-radius: 10px;
    }
</style>

<div class="content-body">
    <div class="container-fluid">

        {{-- Page Header (same like contact form) --}}
        <div class="form-head page-titles d-flex align-items-center">
            <div class="me-auto">
                <h4 class="mb-1">Admin Profile</h4>
                <ol class="breadcrumb">
                    <li class="breadcrumb-item active">Masters</li>
                    <li class="breadcrumb-item"><a href="javascript:void(0)">Profile</a></li>
                </ol>
            </div>
        </div>

        {{-- Alerts --}}
        @if(session('success'))
            <div class="alert alert-success alert-dismissible fade show admin-profile-alert" role="alert">
                {{ session('success') }}
                <button type="button" class="btn-close" data-bs-dismiss="alert"></button>
            </div>
        @endif

        @if($errors->any())
            <div class="alert alert-danger alert-dismissible fade show admin-profile-alert" role="alert">
                <strong>Please fix these errors:</strong>
                <ul class="mb-0 mt-2">
                    @foreach($errors->all() as $err)
                        <li>{{ $err }}</li>
                    @endforeach
                </ul>
                <button type="button" class="btn-close" data-bs-dismiss="alert"></button>
            </div>
        @endif

        <div class="row">

            {{-- LEFT CARD: Profile Info --}}
            <div class="col-xl-4 col-lg-5 mb-4">
                <div class="card admin-profile-card shadow-sm">
                    <div class="card-body p-4">

                        <div class="d-flex align-items-center gap-3">
                            <div class="admin-profile-avatar">
                                {{ strtoupper(substr($admin->name ?? 'A', 0, 1)) }}
                            </div>
                            <div>
                                <h5 class="mb-0 fw-bold">{{ $admin->name ?? 'N/A' }}</h5>
                                <small class="text-muted">Administrator</small>
                            </div>
                        </div>

                        <hr class="my-4">

                        <div class="mb-3">
                            <small class="text-muted d-block">Email</small>
                            <div class="fw-semibold">{{ $admin->email }}</div>
                        </div>

                        <div class="mb-0">
                            <small class="text-muted d-block">Status</small>
                            <span class="badge bg-success">Active</span>
                        </div>

                    </div>
                </div>
            </div>

            {{-- RIGHT CARD: Update Email + Password --}}
            <div class="col-xl-8 col-lg-7 mb-4">
                <div class="card admin-profile-card shadow-sm">
                    <div class="card-body p-4">

                        <h5 class="fw-bold mb-1">Account Settings</h5>
                        <p class="text-muted mb-4">Update your email and password</p>

                        {{-- Update Email --}}
                        <div class="mb-4">
                            <h6 class="fw-bold mb-2">Update Email</h6>

                            <form method="POST" action="{{ route('admin.profile.updateEmail') }}">
                                @csrf

                                <div class="mb-3">
                                    <label class="form-label fw-semibold">Email Address</label>
                                    <input type="email"
                                           name="email"
                                           value="{{ old('email', $admin->email) }}"
                                           class="form-control admin-profile-input"
                                           required>
                                </div>

                                <button type="submit" class="btn btn-primary admin-profile-btn px-4">
                                    Save Email
                                </button>
                            </form>
                        </div>

                        <hr>

            {{-- Update Password --}}
<div>
    <h6 class="fw-bold mb-2">Update Password</h6>

    <form method="POST" action="{{ route('admin.profile.updatePassword') }}">
        @csrf

        {{-- Current Password --}}
        <div class="mb-3">
            <label class="form-label fw-semibold">Current Password</label>

            <div class="input-group">
                <input type="password"
                       name="current_password"
                       id="current_password"
                       class="form-control admin-profile-input"
                       required>

                <button class="btn btn-outline-secondary admin-eye-btn"
                        type="button"
                        onclick="togglePassword('current_password', this)">
                    <i class="bi bi-eye"></i>
                </button>
            </div>
        </div>

        <div class="row">
            {{-- New Password --}}
            <div class="col-md-6 mb-3">
                <label class="form-label fw-semibold">New Password</label>

                <div class="input-group">
                    <input type="password"
                           name="new_password"
                           id="new_password"
                           class="form-control admin-profile-input"
                           required>

                    <button class="btn btn-outline-secondary admin-eye-btn"
                            type="button"
                            onclick="togglePassword('new_password', this)">
                        <i class="bi bi-eye"></i>
                    </button>
                </div>
            </div>

            {{-- Confirm Password --}}
            <div class="col-md-6 mb-3">
                <label class="form-label fw-semibold">Confirm Password</label>

                <div class="input-group">
                    <input type="password"
                           name="new_password_confirmation"
                           id="new_password_confirmation"
                           class="form-control admin-profile-input"
                           required>

                    <button class="btn btn-outline-secondary admin-eye-btn"
                            type="button"
                            onclick="togglePassword('new_password_confirmation', this)">
                        <i class="bi bi-eye"></i>
                    </button>
                </div>
            </div>
        </div>

        <button type="submit" class="btn btn-success admin-profile-btn px-4">
            Update Password
        </button>
    </form>
</div>


                    </div>
                </div>
            </div>

        </div>

    </div>
</div>
<script>
    function togglePassword(inputId, btn) {
        const input = document.getElementById(inputId);
        const icon = btn.querySelector('i');

        if (input.type === "password") {
            input.type = "text";
            icon.classList.remove("bi-eye");
            icon.classList.add("bi-eye-slash");
        } else {
            input.type = "password";
            icon.classList.remove("bi-eye-slash");
            icon.classList.add("bi-eye");
        }
    }
</script>

@endsection
