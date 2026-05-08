@extends('admin.layout.app')

@section('content')
<div class="content-body">
    <div class="container-fluid">
        <div class="form-head page-titles d-flex align-items-center">
            <div class="me-auto">
                <h4 class="mb-1">Company Highlights</h4>
                <ol class="breadcrumb">
                    <li class="breadcrumb-item active"><a href="javascript:void(0)">Home</a></li>
                    <li class="breadcrumb-item"><a href="javascript:void(0)">Company Highlights</a></li>
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
                        <h4 class="card-title">Manage Your Digital Growth Partner Section</h4>
                    </div>
                    <div class="card-body">
                        <div class="basic-form">
                            <form action="{{ route('admin.company-highlight.update') }}" method="POST" enctype="multipart/form-data">
                                @csrf

                                <div class="row">
                                    <div class="mb-3 col-md-12">
                                        <label class="form-label">Section Title *</label>
                                        <input type="text" name="section_title" class="form-control" placeholder="Your Digital Growth Partner" required value="{{ old('section_title', $companyHighlight->section_title) }}">
                                        @error('section_title')
                                        <small class="text-danger">{{ $message }}</small>
                                        @enderror
                                    </div>

                                    <div class="mb-3 col-md-12">
                                        <label class="form-label">Description</label>
                                        <textarea name="section_description" class="form-control" rows="4" placeholder="We're a team of developers...">{{ old('section_description', $companyHighlight->section_description) }}</textarea>
                                        @error('section_description')
                                        <small class="text-danger">{{ $message }}</small>
                                        @enderror
                                    </div>

                                    <div class="mb-3 col-md-6">
                                        <label class="form-label">Button Text</label>
                                        <input type="text" name="button_text" class="form-control" placeholder="ABOUT THE BRAND" value="{{ old('button_text', $companyHighlight->button_text) }}">
                                        @error('button_text')
                                        <small class="text-danger">{{ $message }}</small>
                                        @enderror
                                    </div>

                                    <div class="mb-3 col-md-6">
                                        <label class="form-label">Button Link</label>
                                        <input type="text" name="button_link" class="form-control" placeholder="/about" value="{{ old('button_link', $companyHighlight->button_link) }}">
                                        @error('button_link')
                                        <small class="text-danger">{{ $message }}</small>
                                        @enderror
                                    </div>

                                    <div class="mb-3 col-md-12">
                                        <label class="form-label">Team Image</label>
                                        <input type="file" name="team_image" class="form-control" accept="image/*">
                                        @if($companyHighlight->team_image)
                                        <div class="mt-2">
                                            <img src="{{ asset('storage/' . $companyHighlight->team_image) }}" alt="Team Image" width="200" style="border-radius: 4px;">
                                        </div>
                                        @endif
                                        @error('team_image')
                                        <small class="text-danger">{{ $message }}</small>
                                        @enderror
                                    </div>

                                    <div class="mb-3 col-md-12">
                                        <label class="form-label">Statistics (Label - Value)</label>
                                        <div id="statistics-container">
                                            @php
                                            $stats = $companyHighlight->statistics ?? [['label' => 'Businesses', 'value' => '200+']];
                                            @endphp
                                            @foreach($stats as $index => $stat)
                                            <div class="row mb-2 statistic-row">
                                                <div class="col-md-5">
                                                    <input type="text" name="statistics[{{ $index }}][value]" class="form-control" placeholder="Value (e.g. 200+)" value="{{ $stat['value'] ?? '' }}">
                                                </div>
                                                <div class="col-md-6">
                                                    <input type="text" name="statistics[{{ $index }}][label]" class="form-control" placeholder="Label (e.g. businesses worldwide)" value="{{ $stat['label'] ?? '' }}">
                                                </div>
                                                <div class="col-md-1">
                                                    <button type="button" class="btn btn-danger btn-sm remove-stat"><i class="fa fa-trash"></i></button>
                                                </div>
                                            </div>
                                            @endforeach
                                        </div>
                                        <button type="button" class="btn btn-info btn-sm mt-2" id="add-stat"><i class="fa fa-plus"></i> Add Statistic</button>
                                    </div>

                                    <div class="mb-3 col-md-12">
                                        <div class="form-check custom-checkbox mb-3">
                                            <input type="checkbox" class="form-check-input" id="customCheckBox1" name="is_active" value="1" {{ old('is_active', $companyHighlight->is_active) ? 'checked' : '' }}>
                                            <label class="form-check-label" for="customCheckBox1">Active</label>
                                        </div>
                                    </div>
                                </div>

                                <button type="submit" class="btn btn-primary">Update Highlights</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>

<script>
    document.addEventListener('DOMContentLoaded', function() {
        let statIndex = {
            {
                count($stats)
            }
        };

        document.getElementById('add-stat').addEventListener('click', function() {
            const container = document.getElementById('statistics-container');
            const row = document.createElement('div');
            row.className = 'row mb-2 statistic-row';
            row.innerHTML = `
            <div class="col-md-5">
                <input type="text" name="statistics[${statIndex}][value]" class="form-control" placeholder="Value (e.g. 300+)">
            </div>
            <div class="col-md-6">
                <input type="text" name="statistics[${statIndex}][label]" class="form-control" placeholder="Label (e.g. projects delivered)">
            </div>
            <div class="col-md-1">
                <button type="button" class="btn btn-danger btn-sm remove-stat"><i class="fa fa-trash"></i></button>
            </div>
        `;
            container.appendChild(row);
            statIndex++;
        });

        document.getElementById('statistics-container').addEventListener('click', function(e) {
            if (e.target.classList.contains('remove-stat') || e.target.parentElement.classList.contains('remove-stat')) {
                e.target.closest('.statistic-row').remove();
            }
        });
    });
</script>
@endsection