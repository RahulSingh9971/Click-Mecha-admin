@extends('admin.layout.app')

@section('content')
<div class="content-body">
    <div class="container-fluid">
        <div class="row page-titles mx-0">
            <div class="col-sm-6 p-md-0">
                <div class="welcome-text">
                    <h4>Home Page Management</h4>
                    <p class="mb-0">Manage all home page sections from here</p>
                </div>
            </div>
        </div>

        @if(session('success'))
        <div class="alert alert-success alert-dismissible fade show" role="alert">
            {{ session('success') }}
            <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
        </div>
        @endif

        @if($errors->any())
        <div class="alert alert-danger alert-dismissible fade show" role="alert">
            <ul class="mb-0">
                @foreach($errors->all() as $error)
                <li>{{ $error }}</li>
                @endforeach
            </ul>
            <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
        </div>
        @endif

        <div class="row">
            <div class="col-xl-12">
                <div class="card">
                    <div class="card-body">
                        <!-- Tabs Navigation -->
                        <ul class="nav nav-tabs" id="homePageTabs" role="tablist">
                            <li class="nav-item" role="presentation">
                                <button class="nav-link active" id="hero-tab" data-bs-toggle="tab" data-bs-target="#hero" type="button" role="tab">
                                    <i class="flaticon-381-home me-2"></i>Hero Section
                                </button>
                            </li>
                            <li class="nav-item" role="presentation">
                                <button class="nav-link" id="about-tab" data-bs-toggle="tab" data-bs-target="#about" type="button" role="tab">
                                    <i class="flaticon-381-user me-2"></i>About Section
                                </button>
                            </li>
                            <li class="nav-item" role="presentation">
                                <button class="nav-link" id="services-tab" data-bs-toggle="tab" data-bs-target="#services" type="button" role="tab">
                                    <i class="flaticon-381-settings-2 me-2"></i>Services
                                </button>
                            </li>
                            <!--<li class="nav-item" role="presentation">-->
                            <!--    <button class="nav-link" id="statistics-tab" data-bs-toggle="tab" data-bs-target="#statistics" type="button" role="tab">-->
                            <!--        <i class="flaticon-381-graph me-2"></i>Statistics-->
                            <!--    </button>-->
                            <!--</li>-->
                            <li class="nav-item" role="presentation">
                                <button class="nav-link" id="testimonials-tab" data-bs-toggle="tab" data-bs-target="#testimonials" type="button" role="tab">
                                    <i class="flaticon-381-star me-2"></i>Testimonials
                                </button>
                            </li>
                        </ul>

                        <!-- Tabs Content -->
                        <div class="tab-content mt-4" id="homePageTabsContent">
                            <!-- Hero Section Tab -->
                            <div class="tab-pane fade show active" id="hero" role="tabpanel">
                                <form action="{{ route('admin.home.hero.update') }}" method="POST" enctype="multipart/form-data">
                                    @csrf
                                    @method('PUT')

                                    <div class="row">
                                        <div class="col-md-6 mb-3">
                                            <label class="form-label">Title <span class="text-danger">*</span></label>
                                            <input type="text" class="form-control" name="title" value="{{ $hero->title ?? '' }}" required>
                                        </div>
                                        <div class="col-md-6 mb-3">
                                            <label class="form-label">Subtitle</label>
                                            <input type="text" class="form-control" name="subtitle" value="{{ $hero->subtitle ?? '' }}">
                                        </div>
                                        <div class="col-md-12 mb-3">
                                            <label class="form-label">Description</label>
                                            <textarea class="form-control" name="description" rows="3">{{ $hero->description ?? '' }}</textarea>
                                        </div>
                                        <div class="col-md-6 mb-3">
                                            <label class="form-label">Button Text</label>
                                            <input type="text" class="form-control" name="button_text" value="{{ $hero->button_text ?? '' }}">
                                        </div>
                                        <div class="col-md-6 mb-3">
                                            <label class="form-label">Button Link</label>
                                            <input type="text" class="form-control" name="button_link" value="{{ $hero->button_link ?? '' }}">
                                        </div>
                                        <div class="col-md-6 mb-3">
                                            <label class="form-label">Background Image</label>
                                            <input type="file" class="form-control" name="background_image" accept="image/*">
                                            @if($hero && $hero->background_image)
                                            <img src="{{ asset('storage/' . $hero->background_image) }}" alt="Hero Image" class="mt-2" style="max-width: 200px;">
                                            @endif
                                        </div>
                                        <div class="col-md-6 mb-3">
                                            <label class="form-label">Status</label>
                                            <div class="form-check form-switch">
                                                <input class="form-check-input" type="checkbox" name="is_active" {{ ($hero && $hero->is_active) ? 'checked' : '' }}>
                                                <label class="form-check-label">Active</label>
                                            </div>
                                        </div>
                                    </div>

                                    <button type="submit" class="btn btn-primary">Update Hero Section</button>
                                </form>
                            </div>

                            <!-- About Section Tab -->
                            <div class="tab-pane fade" id="about" role="tabpanel">
                                <form action="{{ route('admin.home.about.update') }}" method="POST" enctype="multipart/form-data">
                                    @csrf
                                    @method('PUT')

                                    <div class="row">
                                        <div class="col-md-6 mb-3">
                                            <label class="form-label">Title <span class="text-danger">*</span></label>
                                            <input type="text" class="form-control" name="title" value="{{ $about->title ?? '' }}" required>
                                        </div>
                                        <div class="col-md-6 mb-3">
                                            <label class="form-label">Subtitle</label>
                                            <input type="text" class="form-control" name="subtitle" value="{{ $about->subtitle ?? '' }}">
                                        </div>
                                        <div class="col-md-12 mb-3">
                                            <label class="form-label">Content</label>
                                            <textarea class="form-control" name="content" rows="3">{{ $about->content ?? '' }}</textarea>
                                        </div>
                                        <div class="col-md-12 mb-3">
                                            <label class="form-label">Content 2</label>
                                            <textarea class="form-control" name="content_2" rows="3">{{ $about->content_2 ?? '' }}</textarea>
                                        </div>
                                        <div class="col-md-4 mb-3">
                                            <label class="form-label">Years of Experience</label>
                                            <input type="number" class="form-control" name="years_experience" value="{{ $about->years_experience ?? '' }}">
                                        </div>
                                        <div class="col-md-4 mb-3">
                                            <label class="form-label">Button Text</label>
                                            <input type="text" class="form-control" name="button_text" value="{{ $about->button_text ?? '' }}">
                                        </div>
                                        <div class="col-md-4 mb-3">
                                            <label class="form-label">Button Link</label>
                                            <input type="text" class="form-control" name="button_link" value="{{ $about->button_link ?? '' }}">
                                        </div>
                                        <div class="col-md-6 mb-3">
                                            <label class="form-label">Image</label>
                                            <input type="file" class="form-control" name="image" accept="image/*">
                                            @if($about && $about->image)
                                            <img src="{{ asset('storage/' . $about->image) }}" alt="About Image" class="mt-2" style="max-width: 200px;">
                                            @endif
                                        </div>
                                        <div class="col-md-6 mb-3">
                                            <label class="form-label">Status</label>
                                            <div class="form-check form-switch">
                                                <input class="form-check-input" type="checkbox" name="is_active" {{ ($about && $about->is_active) ? 'checked' : '' }}>
                                                <label class="form-check-label">Active</label>
                                            </div>
                                        </div>
                                    </div>

                                    <button type="submit" class="btn btn-primary">Update About Section</button>
                                </form>
                            </div>

                            <!-- Services Tab -->
                            <div class="tab-pane fade" id="services" role="tabpanel">
                                <div class="d-flex justify-content-between align-items-center mb-3">
                                    <h5>Service Cards</h5>
                                    <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#addServiceModal">
                                        <i class="fas fa-plus me-2"></i>Add Service
                                    </button>
                                </div>

                                <div class="table-responsive">
                                    <table id="dataTable1" class="table table-bordered">
                                        <thead>
                                            <tr>
                                                <th>Order</th>
                                                <th>Icon</th>
                                                <th>Title</th>
                                                <th>Description</th>
                                                <th>Status</th>
                                                <th>Actions</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            @forelse($services as $service)
                                            <tr>
                                                <td>{{ $service->display_order }}</td>
                                                <td>
                                                    @if($service->icon)
                                                    <img src="{{ asset('storage/' . $service->icon) }}" alt="Icon" style="max-width: 50px;">
                                                    @endif
                                                </td>
                                                <td>{{ $service->title }}</td>
                                                <td>{{ Str::limit($service->description, 50) }}</td>
                                                <td>
                                                    <span class="badge badge-{{ $service->is_active ? 'success' : 'danger' }}">
                                                        {{ $service->is_active ? 'Active' : 'Inactive' }}
                                                    </span>
                                                </td>
                                                <td>
                                                    <button type="button" class="btn btn-sm btn-warning" onclick="editService({{ $service->id }}, '{{ $service->title }}', '{{ $service->description }}', '{{ $service->button_text }}', '{{ $service->button_link }}', {{ $service->display_order }}, {{ $service->is_active ? 'true' : 'false' }})">
                                                        <i class="fas fa-edit"></i>
                                                    </button>
                                                    <form action="{{ route('admin.home.services.delete', $service->id) }}" method="POST" class="d-inline" onsubmit="return confirm('Are you sure?')">
                                                        @csrf
                                                        @method('DELETE')
                                                        <button type="submit" class="btn btn-sm btn-danger">
                                                            <i class="fas fa-trash"></i>
                                                        </button>
                                                    </form>
                                                </td>
                                            </tr>
                                            @empty
                                            <tr>
                                                <td colspan="6" class="text-center">No services found</td>
                                            </tr>
                                            @endforelse
                                        </tbody>
                                    </table>
                                </div>
                            </div>

                            <!-- Statistics Tab -->
                            <div class="tab-pane fade" id="statistics" role="tabpanel">
                                <div class="d-flex justify-content-between align-items-center mb-3">
                                    <h5>Statistics</h5>
                                    <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#addStatisticModal">
                                        <i class="fas fa-plus me-2"></i>Add Statistic
                                    </button>
                                </div>

                                <div class="table-responsive">
                                    <table id="dataTable2" class="table table-bordered">
                                        <thead>
                                            <tr>
                                                <th>Order</th>
                                                <th>Icon</th>
                                                <th>Label</th>
                                                <th>Value</th>
                                                <th>Suffix</th>
                                                <th>Status</th>
                                                <th>Actions</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            @forelse($statistics as $stat)
                                            <tr>
                                                <td>{{ $stat->display_order }}</td>
                                                <td>
                                                    @if($stat->icon)
                                                    <img src="{{ asset('storage/' . $stat->icon) }}" alt="Icon" style="max-width: 50px;">
                                                    @endif
                                                </td>
                                                <td>{{ $stat->label }}</td>
                                                <td>{{ $stat->value }}</td>
                                                <td>{{ $stat->suffix }}</td>
                                                <td>
                                                    <span class="badge badge-{{ $stat->is_active ? 'success' : 'danger' }}">
                                                        {{ $stat->is_active ? 'Active' : 'Inactive' }}
                                                    </span>
                                                </td>
                                                <td>
                                                    <button type="button" class="btn btn-sm btn-warning" onclick="editStatistic({{ $stat->id }}, '{{ $stat->label }}', '{{ $stat->value }}', '{{ $stat->suffix }}', {{ $stat->display_order }}, {{ $stat->is_active ? 'true' : 'false' }})">
                                                        <i class="fas fa-edit"></i>
                                                    </button>
                                                    <form action="{{ route('admin.home.statistics.delete', $stat->id) }}" method="POST" class="d-inline" onsubmit="return confirm('Are you sure?')">
                                                        @csrf
                                                        @method('DELETE')
                                                        <button type="submit" class="btn btn-sm btn-danger">
                                                            <i class="fas fa-trash"></i>
                                                        </button>
                                                    </form>
                                                </td>
                                            </tr>
                                            @empty
                                            <tr>
                                                <td colspan="7" class="text-center">No statistics found</td>
                                            </tr>
                                            @endforelse
                                        </tbody>
                                    </table>
                                </div>
                            </div>

                            <!-- Testimonials Tab -->
                            <div class="tab-pane fade" id="testimonials" role="tabpanel">
                                <div class="d-flex justify-content-between align-items-center mb-3">
                                    <h5>Testimonials</h5>
                                    <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#addTestimonialModal">
                                        <i class="fas fa-plus me-2"></i>Add Testimonial
                                    </button>
                                </div>

                                <div class="table-responsive">
                                    <table id="dataTable3" class="table table-bordered">
                                        <thead>
                                            <tr>
                                                <th>Order</th>
                                                <th>Image</th>
                                                <th>Client Name</th>
                                                <th>Position</th>
                                                <th>Company</th>
                                                <th>Rating</th>
                                                <th>Status</th>
                                                <th>Actions</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            @forelse($testimonials as $testimonial)
                                            <tr>
                                                <td>{{ $testimonial->display_order }}</td>
                                                <td>
                                                    @if($testimonial->client_image)
                                                    <img src="{{ asset('storage/' . $testimonial->client_image) }}" alt="Client" style="max-width: 50px; border-radius: 50%;">
                                                    @endif
                                                </td>
                                                <td>{{ $testimonial->client_name }}</td>
                                                <td>{{ $testimonial->client_position }}</td>
                                                <td>{{ $testimonial->client_company }}</td>
                                                <td>
                                                    @for($i = 0; $i < ($testimonial->rating ?? 5); $i++)
                                                        <i class="fas fa-star text-warning"></i>
                                                        @endfor
                                                </td>
                                                <td>
                                                    <span class="badge badge-{{ $testimonial->is_active ? 'success' : 'danger' }}">
                                                        {{ $testimonial->is_active ? 'Active' : 'Inactive' }}
                                                    </span>
                                                </td>
                                                <td>
                                                    <button type="button" class="btn btn-sm btn-warning" onclick="editTestimonial({{ $testimonial->id }}, '{{ $testimonial->client_name }}', '{{ $testimonial->client_position }}', '{{ $testimonial->client_company }}', '{{ addslashes($testimonial->testimonial_text) }}', {{ $testimonial->rating }}, {{ $testimonial->display_order }}, {{ $testimonial->is_active ? 'true' : 'false' }})">
                                                        <i class="fas fa-edit"></i>
                                                    </button>
                                                    <form action="{{ route('admin.home.testimonials.delete', $testimonial->id) }}" method="POST" class="d-inline" onsubmit="return confirm('Are you sure?')">
                                                        @csrf
                                                        @method('DELETE')
                                                        <button type="submit" class="btn btn-sm btn-danger">
                                                            <i class="fas fa-trash"></i>
                                                        </button>
                                                    </form>
                                                </td>
                                            </tr>
                                            @empty
                                            <tr>
                                                <td colspan="8" class="text-center">No testimonials found</td>
                                            </tr>
                                            @endforelse
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>

<!-- Add Service Modal -->
<div class="modal fade" id="addServiceModal" tabindex="-1">
    <div class="modal-dialog">
        <div class="modal-content">
            <form action="{{ route('admin.home.services.store') }}" method="POST" enctype="multipart/form-data">
                @csrf
                <div class="modal-header">
                    <h5 class="modal-title">Add Service Card</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal"></button>
                </div>
                <div class="modal-body">
                    <div class="mb-3">
                        <label class="form-label">Title <span class="text-danger">*</span></label>
                        <input type="text" class="form-control" name="title" required>
                    </div>
                    <div class="mb-3">
                        <label class="form-label">Description</label>
                        <textarea class="form-control" name="description" rows="3"></textarea>
                    </div>
                    <div class="mb-3">
                        <label class="form-label">Icon</label>
                        <input type="file" class="form-control" name="icon" accept="image/*">
                    </div>
                    <div class="mb-3">
                        <label class="form-label">Button Text</label>
                        <input type="text" class="form-control" name="button_text">
                    </div>
                    <div class="mb-3">
                        <label class="form-label">Button Link</label>
                        <input type="text" class="form-control" name="button_link">
                    </div>
                    <div class="mb-3">
                        <label class="form-label">Display Order</label>
                        <input type="number" class="form-control" name="display_order" value="{{ $services->count() + 1 }}">
                    </div>
                    <div class="form-check form-switch">
                        <input class="form-check-input" type="checkbox" name="is_active" checked>
                        <label class="form-check-label">Active</label>
                    </div>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                    <button type="submit" class="btn btn-primary">Add Service</button>
                </div>
            </form>
        </div>
    </div>
</div>

<!-- Edit Service Modal -->
<div class="modal fade" id="editServiceModal" tabindex="-1">
    <div class="modal-dialog">
        <div class="modal-content">
            <form id="editServiceForm" method="POST" enctype="multipart/form-data">
                @csrf
                @method('PUT')
                <div class="modal-header">
                    <h5 class="modal-title">Edit Service Card</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal"></button>
                </div>
                <div class="modal-body">
                    <div class="mb-3">
                        <label class="form-label">Title <span class="text-danger">*</span></label>
                        <input type="text" class="form-control" id="edit_service_title" name="title" required>
                    </div>
                    <div class="mb-3">
                        <label class="form-label">Description</label>
                        <textarea class="form-control" id="edit_service_description" name="description" rows="3"></textarea>
                    </div>
                    <div class="mb-3">
                        <label class="form-label">Icon</label>
                        <input type="file" class="form-control" name="icon" accept="image/*">
                    </div>
                    <div class="mb-3">
                        <label class="form-label">Button Text</label>
                        <input type="text" class="form-control" id="edit_service_button_text" name="button_text">
                    </div>
                    <div class="mb-3">
                        <label class="form-label">Button Link</label>
                        <input type="text" class="form-control" id="edit_service_button_link" name="button_link">
                    </div>
                    <div class="mb-3">
                        <label class="form-label">Display Order</label>
                        <input type="number" class="form-control" id="edit_service_display_order" name="display_order">
                    </div>
                    <div class="form-check form-switch">
                        <input class="form-check-input" type="checkbox" id="edit_service_is_active" name="is_active">
                        <label class="form-check-label">Active</label>
                    </div>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                    <button type="submit" class="btn btn-primary">Update Service</button>
                </div>
            </form>
        </div>
    </div>
</div>

<!-- Add Statistic Modal -->
<div class="modal fade" id="addStatisticModal" tabindex="-1">
    <div class="modal-dialog">
        <div class="modal-content">
            <form action="{{ route('admin.home.statistics.store') }}" method="POST" enctype="multipart/form-data">
                @csrf
                <div class="modal-header">
                    <h5 class="modal-title">Add Statistic</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal"></button>
                </div>
                <div class="modal-body">
                    <div class="mb-3">
                        <label class="form-label">Label <span class="text-danger">*</span></label>
                        <input type="text" class="form-control" name="label" required>
                    </div>
                    <div class="mb-3">
                        <label class="form-label">Value <span class="text-danger">*</span></label>
                        <input type="text" class="form-control" name="value" required>
                    </div>
                    <div class="mb-3">
                        <label class="form-label">Suffix (e.g., +, K, M)</label>
                        <input type="text" class="form-control" name="suffix">
                    </div>
                    <div class="mb-3">
                        <label class="form-label">Icon</label>
                        <input type="file" class="form-control" name="icon" accept="image/*">
                    </div>
                    <div class="mb-3">
                        <label class="form-label">Display Order</label>
                        <input type="number" class="form-control" name="display_order" value="{{ $statistics->count() + 1 }}">
                    </div>
                    <div class="form-check form-switch">
                        <input class="form-check-input" type="checkbox" name="is_active" checked>
                        <label class="form-check-label">Active</label>
                    </div>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                    <button type="submit" class="btn btn-primary">Add Statistic</button>
                </div>
            </form>
        </div>
    </div>
</div>

<!-- Edit Statistic Modal -->
<div class="modal fade" id="editStatisticModal" tabindex="-1">
    <div class="modal-dialog">
        <div class="modal-content">
            <form id="editStatisticForm" method="POST" enctype="multipart/form-data">
                @csrf
                @method('PUT')
                <div class="modal-header">
                    <h5 class="modal-title">Edit Statistic</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal"></button>
                </div>
                <div class="modal-body">
                    <div class="mb-3">
                        <label class="form-label">Label <span class="text-danger">*</span></label>
                        <input type="text" class="form-control" id="edit_stat_label" name="label" required>
                    </div>
                    <div class="mb-3">
                        <label class="form-label">Value <span class="text-danger">*</span></label>
                        <input type="text" class="form-control" id="edit_stat_value" name="value" required>
                    </div>
                    <div class="mb-3">
                        <label class="form-label">Suffix</label>
                        <input type="text" class="form-control" id="edit_stat_suffix" name="suffix">
                    </div>
                    <div class="mb-3">
                        <label class="form-label">Icon</label>
                        <input type="file" class="form-control" name="icon" accept="image/*">
                    </div>
                    <div class="mb-3">
                        <label class="form-label">Display Order</label>
                        <input type="number" class="form-control" id="edit_stat_display_order" name="display_order">
                    </div>
                    <div class="form-check form-switch">
                        <input class="form-check-input" type="checkbox" id="edit_stat_is_active" name="is_active">
                        <label class="form-check-label">Active</label>
                    </div>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                    <button type="submit" class="btn btn-primary">Update Statistic</button>
                </div>
            </form>
        </div>
    </div>
</div>

<!-- Add Testimonial Modal -->
<div class="modal fade" id="addTestimonialModal" tabindex="-1">
    <div class="modal-dialog">
        <div class="modal-content">
            <form action="{{ route('admin.home.testimonials.store') }}" method="POST" enctype="multipart/form-data">
                @csrf
                <div class="modal-header">
                    <h5 class="modal-title">Add Testimonial</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal"></button>
                </div>
                <div class="modal-body">
                    <div class="mb-3">
                        <label class="form-label">Client Name <span class="text-danger">*</span></label>
                        <input type="text" class="form-control" name="client_name" required>
                    </div>
                    <div class="mb-3">
                        <label class="form-label">Position</label>
                        <input type="text" class="form-control" name="client_position">
                    </div>
                    <div class="mb-3">
                        <label class="form-label">Company</label>
                        <input type="text" class="form-control" name="client_company">
                    </div>
                    <div class="mb-3">
                        <label class="form-label">Testimonial Text <span class="text-danger">*</span></label>
                        <textarea class="form-control" name="testimonial_text" rows="4" required></textarea>
                    </div>
                    <div class="mb-3">
                        <label class="form-label">Client Image</label>
                        <input type="file" class="form-control" name="client_image" accept="image/*">
                    </div>
                    <div class="mb-3">
                        <label class="form-label">Rating</label>
                        <select class="form-control" name="rating">
                            <option value="5">5 Stars</option>
                            <option value="4">4 Stars</option>
                            <option value="3">3 Stars</option>
                            <option value="2">2 Stars</option>
                            <option value="1">1 Star</option>
                        </select>
                    </div>
                    <div class="mb-3">
                        <label class="form-label">Display Order</label>
                        <input type="number" class="form-control" name="display_order" value="{{ $testimonials->count() + 1 }}">
                    </div>
                    <div class="form-check form-switch">
                        <input class="form-check-input" type="checkbox" name="is_active" checked>
                        <label class="form-check-label">Active</label>
                    </div>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                    <button type="submit" class="btn btn-primary">Add Testimonial</button>
                </div>
            </form>
        </div>
    </div>
</div>

<!-- Edit Testimonial Modal -->
<div class="modal fade" id="editTestimonialModal" tabindex="-1">
    <div class="modal-dialog">
        <div class="modal-content">
            <form id="editTestimonialForm" method="POST" enctype="multipart/form-data">
                @csrf
                @method('PUT')
                <div class="modal-header">
                    <h5 class="modal-title">Edit Testimonial</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal"></button>
                </div>
                <div class="modal-body">
                    <div class="mb-3">
                        <label class="form-label">Client Name <span class="text-danger">*</span></label>
                        <input type="text" class="form-control" id="edit_test_client_name" name="client_name" required>
                    </div>
                    <div class="mb-3">
                        <label class="form-label">Position</label>
                        <input type="text" class="form-control" id="edit_test_client_position" name="client_position">
                    </div>
                    <div class="mb-3">
                        <label class="form-label">Company</label>
                        <input type="text" class="form-control" id="edit_test_client_company" name="client_company">
                    </div>
                    <div class="mb-3">
                        <label class="form-label">Testimonial Text <span class="text-danger">*</span></label>
                        <textarea class="form-control" id="edit_test_testimonial_text" name="testimonial_text" rows="4" required></textarea>
                    </div>
                    <div class="mb-3">
                        <label class="form-label">Client Image</label>
                        <input type="file" class="form-control" name="client_image" accept="image/*">
                    </div>
                    <div class="mb-3">
                        <label class="form-label">Rating</label>
                        <select class="form-control" id="edit_test_rating" name="rating">
                            <option value="5">5 Stars</option>
                            <option value="4">4 Stars</option>
                            <option value="3">3 Stars</option>
                            <option value="2">2 Stars</option>
                            <option value="1">1 Star</option>
                        </select>
                    </div>
                    <div class="mb-3">
                        <label class="form-label">Display Order</label>
                        <input type="number" class="form-control" id="edit_test_display_order" name="display_order">
                    </div>
                    <div class="form-check form-switch">
                        <input class="form-check-input" type="checkbox" id="edit_test_is_active" name="is_active">
                        <label class="form-check-label">Active</label>
                    </div>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                    <button type="submit" class="btn btn-primary">Update Testimonial</button>
                </div>
            </form>
        </div>
    </div>
</div>

<script>
    function editService(id, title, description, buttonText, buttonLink, displayOrder, isActive) {
        document.getElementById('editServiceForm').action = "{{ url('admin/home/services') }}/" + id;
        document.getElementById('edit_service_title').value = title;
        document.getElementById('edit_service_description').value = description;
        document.getElementById('edit_service_button_text').value = buttonText;
        document.getElementById('edit_service_button_link').value = buttonLink;
        document.getElementById('edit_service_display_order').value = displayOrder;
        document.getElementById('edit_service_is_active').checked = isActive;
        new bootstrap.Modal(document.getElementById('editServiceModal')).show();
    }

    function editStatistic(id, label, value, suffix, displayOrder, isActive) {
        document.getElementById('editStatisticForm').action = "{{ url('admin/home/statistics') }}/" + id;
        document.getElementById('edit_stat_label').value = label;
        document.getElementById('edit_stat_value').value = value;
        document.getElementById('edit_stat_suffix').value = suffix;
        document.getElementById('edit_stat_display_order').value = displayOrder;
        document.getElementById('edit_stat_is_active').checked = isActive;
        new bootstrap.Modal(document.getElementById('editStatisticModal')).show();
    }

    function editTestimonial(id, clientName, clientPosition, clientCompany, testimonialText, rating, displayOrder, isActive) {
        document.getElementById('editTestimonialForm').action = "{{ url('admin/home/testimonials') }}/" + id;
        document.getElementById('edit_test_client_name').value = clientName;
        document.getElementById('edit_test_client_position').value = clientPosition;
        document.getElementById('edit_test_client_company').value = clientCompany;
        document.getElementById('edit_test_testimonial_text').value = testimonialText;
        document.getElementById('edit_test_rating').value = rating;
        document.getElementById('edit_test_display_order').value = displayOrder;
        document.getElementById('edit_test_is_active').checked = isActive;
        new bootstrap.Modal(document.getElementById('editTestimonialModal')).show();
    }
</script>

@endsection