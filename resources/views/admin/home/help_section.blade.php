@extends('admin.layout.app')

@section('content')
<div class="content-body">
    <div class="container-fluid">
        <div class="form-head page-titles d-flex align-items-center">
            <div class="me-auto">
                <h4 class="mb-1">Help Section (CTA)</h4>
                <ol class="breadcrumb">
                    <li class="breadcrumb-item active"><a href="javascript:void(0)">Home</a></li>
                    <li class="breadcrumb-item"><a href="javascript:void(0)">Help Section</a></li>
                </ol>
            </div>
        </div>

        @if(session('success'))
        <div class="alert alert-success alert-dismissible fade show" role="alert">
            {{ session('success') }}
            <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
        </div>
        @endif

        <div class="row">
            <div class="col-xl-12 col-lg-12">
                <div class="card">
                    <div class="card-header">
                        <h4 class="card-title">Manage "Let's Talk About Your Next Project" Section</h4>
                    </div>
                    <div class="card-body">
                        <div class="basic-form">
                            <form action="{{ route('admin.help-section.update') }}" method="POST">
                                @csrf

                                <div class="row">
                                    <div class="mb-3 col-md-12">
                                        <label class="form-label">Title *</label>
                                        <input type="text" name="title" class="form-control" placeholder="Let's Talk About Your Next Project" required value="{{ old('title', $helpSection->title) }}">
                                        @error('title')
                                        <small class="text-danger">{{ $message }}</small>
                                        @enderror
                                    </div>

                                    <div class="mb-3 col-md-6">
                                        <label class="form-label">Phone Number 1</label>
                                        <input type="text" name="phone_1" class="form-control" placeholder="+91-99996-73073" value="{{ old('phone_1', $helpSection->phone_1) }}">
                                        @error('phone_1')
                                        <small class="text-danger">{{ $message }}</small>
                                        @enderror
                                    </div>

                                    <div class="mb-3 col-md-6">
                                        <label class="form-label">Phone Number 2</label>
                                        <input type="text" name="phone_2" class="form-control" placeholder="+91-99990-08998" value="{{ old('phone_2', $helpSection->phone_2) }}">
                                        @error('phone_2')
                                        <small class="text-danger">{{ $message }}</small>
                                        @enderror
                                    </div>

                                    <div class="mb-3 col-md-6">
                                        <label class="form-label">Email</label>
                                        <input type="email" name="email" class="form-control" placeholder="kavya@clickmecha.com" value="{{ old('email', $helpSection->email) }}">
                                        @error('email')
                                        <small class="text-danger">{{ $message }}</small>
                                        @enderror
                                    </div>

                                    <div class="mb-3 col-md-6"></div>

                                    <div class="mb-3 col-md-6">
                                        <label class="form-label">Button Text</label>
                                        <input type="text" name="button_text" class="form-control" placeholder="BOOK A 30 MIN CALL" value="{{ old('button_text', $helpSection->button_text) }}">
                                        @error('button_text')
                                        <small class="text-danger">{{ $message }}</small>
                                        @enderror
                                    </div>

                                    <div class="mb-3 col-md-6">
                                        <label class="form-label">Button Link</label>
                                        <input type="text" name="button_link" class="form-control" placeholder="https://calendly.com/..." value="{{ old('button_link', $helpSection->button_link) }}">
                                        @error('button_link')
                                        <small class="text-danger">{{ $message }}</small>
                                        @enderror
                                    </div>

                                    <div class="mb-3 col-md-12">
                                        <div class="form-check custom-checkbox mb-3">
                                            <input type="checkbox" class="form-check-input" id="customCheckBox1" name="is_active" value="1" {{ old('is_active', $helpSection->is_active) ? 'checked' : '' }}>
                                            <label class="form-check-label" for="customCheckBox1">Active</label>
                                        </div>
                                    </div>
                                </div>

                                <button type="submit" class="btn btn-primary">Update Help Section</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
@endsection