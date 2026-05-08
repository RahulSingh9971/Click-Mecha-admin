@extends('admin.layout.app')

@section('content')
<div class="content-body">
    <div class="container-fluid">
        <div class="form-head page-titles d-flex align-items-center">
            <div class="me-auto">
                <h4 class="mb-1">Add SEO Setting</h4>
                <ol class="breadcrumb">
                    <li class="breadcrumb-item"><a href="{{ route('admin.seo-settings.index') }}">SEO Settings</a></li>
                    <li class="breadcrumb-item active"><a href="javascript:void(0)">Add</a></li>
                </ol>
            </div>
        </div>

        <div class="row">
            <div class="col-xl-12 col-lg-12">
                <div class="card">
                    <div class="card-header">
                        <h4 class="card-title">SEO Meta Tags</h4>
                    </div>
                    <div class="card-body">
                        <div class="basic-form">
                            <form action="{{ route('admin.seo-settings.store') }}" method="POST" enctype="multipart/form-data">
                                @csrf

                                <!-- Basic Meta Tags -->
                                <h5 class="mb-3">Basic Meta Tags</h5>
                                <div class="row">
                                    <div class="mb-3 col-md-12">
                                        <label class="form-label">Page Name * <small>(e.g., home, about, contact)</small></label>
                                        <input type="text" name="page_name" class="form-control" placeholder="home" required value="{{ old('page_name') }}">
                                        @error('page_name')
                                        <small class="text-danger">{{ $message }}</small>
                                        @enderror
                                    </div>
                                    <div class="mb-3 col-md-12">
                                        <label class="form-label">Meta Title</label>
                                        <input type="text" name="meta_title" class="form-control" placeholder="Your Page Title" value="{{ old('meta_title') }}">
                                        @error('meta_title')
                                        <small class="text-danger">{{ $message }}</small>
                                        @enderror
                                    </div>
                                    <div class="mb-3 col-md-12">
                                        <label class="form-label">Meta Description</label>
                                        <textarea name="meta_description" class="form-control" rows="3" placeholder="Brief description of the page...">{{ old('meta_description') }}</textarea>
                                        @error('meta_description')
                                        <small class="text-danger">{{ $message }}</small>
                                        @enderror
                                    </div>
                                    <div class="mb-3 col-md-12">
                                        <label class="form-label">Meta Keywords <small>(comma separated)</small></label>
                                        <input type="text" name="meta_keywords" class="form-control" placeholder="keyword1, keyword2, keyword3" value="{{ old('meta_keywords') }}">
                                        @error('meta_keywords')
                                        <small class="text-danger">{{ $message }}</small>
                                        @enderror
                                    </div>
                                </div>

                                <!-- Open Graph Tags -->
                                <h5 class="mb-3 mt-4">Open Graph (Facebook)</h5>
                                <div class="row">
                                    <div class="mb-3 col-md-6">
                                        <label class="form-label">OG Title</label>
                                        <input type="text" name="og_title" class="form-control" placeholder="Title for social media" value="{{ old('og_title') }}">
                                        @error('og_title')
                                        <small class="text-danger">{{ $message }}</small>
                                        @enderror
                                    </div>
                                    <div class="mb-3 col-md-6">
                                        <label class="form-label">OG Type</label>
                                        <input type="text" name="og_type" class="form-control" placeholder="website" value="{{ old('og_type', 'website') }}">
                                        @error('og_type')
                                        <small class="text-danger">{{ $message }}</small>
                                        @enderror
                                    </div>
                                    <div class="mb-3 col-md-12">
                                        <label class="form-label">OG Description</label>
                                        <textarea name="og_description" class="form-control" rows="2" placeholder="Description for social media...">{{ old('og_description') }}</textarea>
                                        @error('og_description')
                                        <small class="text-danger">{{ $message }}</small>
                                        @enderror
                                    </div>
                                    <div class="mb-3 col-md-12">
                                        <label class="form-label">OG Image</label>
                                        <input type="file" name="og_image" class="form-control" accept="image/*">
                                        @error('og_image')
                                        <small class="text-danger">{{ $message }}</small>
                                        @enderror
                                    </div>
                                </div>

                                <!-- Twitter Card Tags -->
                                <h5 class="mb-3 mt-4">Twitter Card</h5>
                                <div class="row">
                                    <div class="mb-3 col-md-6">
                                        <label class="form-label">Twitter Card Type</label>
                                        <input type="text" name="twitter_card" class="form-control" placeholder="summary_large_image" value="{{ old('twitter_card', 'summary_large_image') }}">
                                        @error('twitter_card')
                                        <small class="text-danger">{{ $message }}</small>
                                        @enderror
                                    </div>
                                    <div class="mb-3 col-md-6">
                                        <label class="form-label">Twitter Title</label>
                                        <input type="text" name="twitter_title" class="form-control" placeholder="Title for Twitter" value="{{ old('twitter_title') }}">
                                        @error('twitter_title')
                                        <small class="text-danger">{{ $message }}</small>
                                        @enderror
                                    </div>
                                    <div class="mb-3 col-md-12">
                                        <label class="form-label">Twitter Description</label>
                                        <textarea name="twitter_description" class="form-control" rows="2" placeholder="Description for Twitter...">{{ old('twitter_description') }}</textarea>
                                        @error('twitter_description')
                                        <small class="text-danger">{{ $message }}</small>
                                        @enderror
                                    </div>
                                    <div class="mb-3 col-md-12">
                                        <label class="form-label">Twitter Image</label>
                                        <input type="file" name="twitter_image" class="form-control" accept="image/*">
                                        @error('twitter_image')
                                        <small class="text-danger">{{ $message }}</small>
                                        @enderror
                                    </div>
                                </div>

                                <!-- Additional Settings -->
                                <h5 class="mb-3 mt-4">Additional Settings</h5>
                                <div class="row">
                                    <div class="mb-3 col-md-12">
                                        <label class="form-label">Canonical URL</label>
                                        <input type="url" name="canonical_url" class="form-control" placeholder="https://example.com/page" value="{{ old('canonical_url') }}">
                                        @error('canonical_url')
                                        <small class="text-danger">{{ $message }}</small>
                                        @enderror
                                    </div>
                                    <div class="mb-3 col-md-12">
                                        <label class="form-label">Schema Markup (JSON-LD)</label>
                                        <textarea name="schema_markup" class="form-control" rows="5" placeholder='{"@context": "https://schema.org", ...}'>{{ old('schema_markup') }}</textarea>
                                        @error('schema_markup')
                                        <small class="text-danger">{{ $message }}</small>
                                        @enderror
                                    </div>
                                    <div class="mb-3 col-md-12">
                                        <div class="form-check custom-checkbox mb-3">
                                            <input type="checkbox" class="form-check-input" id="customCheckBox1" name="is_active" value="1" checked>
                                            <label class="form-check-label" for="customCheckBox1">Active</label>
                                        </div>
                                    </div>
                                </div>

                                <button type="submit" class="btn btn-primary">Save SEO Settings</button>
                                <a href="{{ route('admin.seo-settings.index') }}" class="btn btn-secondary">Cancel</a>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
@endsection