@extends('admin.layout.app')
@section('content')
<div class="content-body">
    <div class="container-fluid">
        <div class="page-titles">
            <ol class="breadcrumb">
                <li class="breadcrumb-item"><a href="{{ route('admin.policies.index') }}">Policies</a></li>
                <li class="breadcrumb-item active"><a href="javascript:void(0)">Add Policy</a></li>
            </ol>
        </div>
        <div class="row">
            <div class="col-xl-12">
                @include('utils.show_success')
                @include('utils.show_error')
                <div class="filter cm-content-box box-primary">
                    <div class="content-title">
                        <div class="cpa">
                            <i class="fa-solid fa-file-lines me-2"></i>Add New Policy
                        </div>
                    </div>
                    <div class="cm-content-body form excerpt">
                        <div class="card-body">
                            <form action="{{ route('admin.policies.store') }}" method="POST">
                                @csrf
                                
                                <div class="row">
                                    <div class="col-xl-6 mb-3">
                                        <label class="form-label">Page Type <span class="text-danger">*</span></label>
                                        <select class="form-control" name="page_type" required>
                                            <option value="">Select Page Type</option>
                                            <option value="privacy-policy">Privacy Policy</option>
                                            <option value="terms-conditions">Terms & Conditions</option>
                                            <option value="payment-policy">Payment Policy</option>
                                            <option value="refund-policy">Refund & Cancellation Policy</option>
                                        </select>
                                    </div>

                                    <div class="col-xl-6 mb-3">
                                        <label class="form-label">Page Title <span class="text-danger">*</span></label>
                                        <input type="text" class="form-control" name="page_title" placeholder="e.g., Privacy Policy" required>
                                    </div>

                                    <div class="col-xl-12 mb-3">
                                        <div class="form-check">
                                            <input class="form-check-input" type="checkbox" name="is_active" id="is_active" checked>
                                            <label class="form-check-label" for="is_active">
                                                Active
                                            </label>
                                        </div>
                                    </div>
                                </div>

                                <hr>

                                <div id="sections-container">
                                    <h5 class="mb-3">Policy Sections</h5>
                                    <div class="section-item border p-3 mb-3" data-index="0">
                                        <div class="d-flex justify-content-between align-items-center mb-2">
                                            <h6>Section 1</h6>
                                            <button type="button" class="btn btn-danger btn-sm remove-section">Remove</button>
                                        </div>
                                        <div class="row">
                                            <div class="col-xl-12 mb-3">
                                                <label class="form-label">Section Title <span class="text-danger">*</span></label>
                                                <input type="text" class="form-control" name="sections[0][title]" placeholder="e.g., Information We Collect" required>
                                            </div>
                                            <div class="col-xl-12 mb-3">
                                                <label class="form-label">Section Content <span class="text-danger">*</span></label>
                                                <textarea class="form-control" name="sections[0][content]" rows="4" placeholder="Enter section content..." required></textarea>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <button type="button" class="btn btn-info btn-sm mb-3" id="add-section">Add Section</button>

                                <div class="row">
                                    <div class="col-12">
                                        <button type="submit" class="btn btn-primary">Create Policy</button>
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
let sectionIndex = 1;

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
                    <input type="text" class="form-control" name="sections[${sectionIndex}][title]" placeholder="e.g., Data Security" required>
                </div>
                <div class="col-xl-12 mb-3">
                    <label class="form-label">Section Content <span class="text-danger">*</span></label>
                    <textarea class="form-control" name="sections[${sectionIndex}][content]" rows="4" placeholder="Enter section content..." required></textarea>
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
