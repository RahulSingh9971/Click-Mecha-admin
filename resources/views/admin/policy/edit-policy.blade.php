@extends('admin.layout.app')
@section('content')
<div class="content-body">
    <div class="container-fluid">
        <div class="page-titles">
            <ol class="breadcrumb">
                <li class="breadcrumb-item"><a href="{{ route('admin.policies.index') }}">Policies</a></li>
                <li class="breadcrumb-item active"><a href="javascript:void(0)">Edit Policy</a></li>
            </ol>
        </div>
        <div class="row">
            <div class="col-xl-12">
                @include('utils.show_success')
                @include('utils.show_error')
                <div class="filter cm-content-box box-primary">
                    <div class="content-title">
                        <div class="cpa">
                            <i class="fa-solid fa-file-lines me-2"></i>Edit Policy - {{ $policy->page_title }}
                        </div>
                    </div>
                    <div class="cm-content-body form excerpt">
                        <div class="card-body">
                            <form action="{{ route('admin.policies.update', $policy->id) }}" method="POST">
                                @csrf
                                @method('PUT')
                                
                                <div class="row">
                                    <div class="col-xl-6 mb-3">
                                        <label class="form-label">Page Type <span class="text-danger">*</span></label>
                                        <select class="form-control" name="page_type" required>
                                            <option value="">Select Page Type</option>
                                            <option value="privacy-policy" {{ $policy->page_type == 'privacy-policy' ? 'selected' : '' }}>Privacy Policy</option>
                                            <option value="terms-conditions" {{ $policy->page_type == 'terms-conditions' ? 'selected' : '' }}>Terms & Conditions</option>
                                            <option value="payment-policy" {{ $policy->page_type == 'payment-policy' ? 'selected' : '' }}>Payment Policy</option>
                                            <option value="refund-policy" {{ $policy->page_type == 'refund-policy' ? 'selected' : '' }}>Refund & Cancellation Policy</option>
                                        </select>
                                    </div>

                                    <div class="col-xl-6 mb-3">
                                        <label class="form-label">Page Title <span class="text-danger">*</span></label>
                                        <input type="text" class="form-control" name="page_title" value="{{ $policy->page_title }}" required>
                                    </div>

                                    <div class="col-xl-12 mb-3">
                                        <div class="form-check">
                                            <input class="form-check-input" type="checkbox" name="is_active" id="is_active" {{ $policy->is_active ? 'checked' : '' }}>
                                            <label class="form-check-label" for="is_active">
                                                Active
                                            </label>
                                        </div>
                                    </div>
                                </div>

                                <hr>

                                <div id="sections-container">
                                    <h5 class="mb-3">Policy Sections</h5>
                                    @foreach($policy->sections as $index => $section)
                                    <div class="section-item border p-3 mb-3" data-index="{{ $index }}">
                                        <div class="d-flex justify-content-between align-items-center mb-2">
                                            <h6>Section {{ $index + 1 }}</h6>
                                            <button type="button" class="btn btn-danger btn-sm remove-section">Remove</button>
                                        </div>
                                        <div class="row">
                                            <div class="col-xl-12 mb-3">
                                                <label class="form-label">Section Title <span class="text-danger">*</span></label>
                                                <input type="text" class="form-control" name="sections[{{ $index }}][title]" value="{{ $section['title'] }}" required>
                                            </div>
                                            <div class="col-xl-12 mb-3">
                                                <label class="form-label">Section Content <span class="text-danger">*</span></label>
                                                <textarea class="form-control" name="sections[{{ $index }}][content]" rows="4" required>{{ $section['content'] }}</textarea>
                                            </div>
                                        </div>
                                    </div>
                                    @endforeach
                                </div>

                                <button type="button" class="btn btn-info btn-sm mb-3" id="add-section">Add Section</button>

                                <div class="row">
                                    <div class="col-12">
                                        <button type="submit" class="btn btn-primary">Update Policy</button>
                                        <a href="{{ route('admin.policies.index') }}" class="btn btn-secondary">Cancel</a>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>

<script>
let sectionIndex = {{ count($policy->sections) }};

document.getElementById('add-section').addEventListener('click', function() {
    const container = document.getElementById('sections-container');
    const newSection = `
        <div class="section-item border p-3 mb-3" data-index="${sectionIndex}">
            <div class="d-flex justify-content-between align-items-center mb-2">
                <h6>Section ${sectionIndex + 1}</h6>
                <button type="button" class="btn btn-danger btn-sm remove-section">Remove</button>
            </div>
            <div class="row">
                <div class="col-xl-12 mb-3">
                    <label class="form-label">Section Title <span class="text-danger">*</span></label>
                    <input type="text" class="form-control" name="sections[${sectionIndex}][title]" required>
                </div>
                <div class="col-xl-12 mb-3">
                    <label class="form-label">Section Content <span class="text-danger">*</span></label>
                    <textarea class="form-control" name="sections[${sectionIndex}][content]" rows="4" required></textarea>
                </div>
            </div>
        </div>
    `;
    container.insertAdjacentHTML('beforeend', newSection);
    sectionIndex++;
});

document.addEventListener('click', function(e) {
    if (e.target.classList.contains('remove-section') || e.target.closest('.remove-section')) {
        const sectionItem = e.target.closest('.section-item');
        if (document.querySelectorAll('.section-item').length > 1) {
            sectionItem.remove();
        } else {
            alert('At least one section is required!');
        }
    }
});
</script>

@endsection
