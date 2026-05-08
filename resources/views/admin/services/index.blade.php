@extends('admin.layout.app')

@section('content')
    <div class="content-body">
        <div class="container-fluid">
            <div class="row page-titles mx-0">
                <div class="col-sm-6 p-md-0">
                    <div class="welcome-text">
                        <h4>Service Page Management</h4>
                        <p class="mb-0">Manage services and page content</p>
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
                            <ul class="nav nav-tabs" id="servicePageTabs" role="tablist">
                                <li class="nav-item" role="presentation">
                                    <button class="nav-link active" id="content-tab" data-bs-toggle="tab"
                                        data-bs-target="#content" type="button" role="tab">
                                        <i class="flaticon-381-file me-2"></i>Page Content
                                    </button>
                                </li>
                                <li class="nav-item" role="presentation">
                                    <button class="nav-link" id="services-tab" data-bs-toggle="tab"
                                        data-bs-target="#services" type="button" role="tab">
                                        <i class="flaticon-381-layer-1 me-2"></i>Services
                                    </button>
                                </li>
                                <button class="nav-link" id="whyChooseUs-tab" data-bs-toggle="tab"
                                    data-bs-target="#whyChooseUs" type="button" role="tab">
                                    <i class="flaticon-381-heart me-2"></i>Why Choose Us
                                </button>
                                </li>
                            </ul>
                            <!-- ... (previous tabs content is already there, check context line) ... -->

                            <!-- Add Service Modal and Edit Service Modal are already above, keeping them. -->

                            <!-- Add Why Choose Us Modal -->
                            <div class="modal fade" id="addWcuModal" tabindex="-1">
                                <div class="modal-dialog modal-lg">
                                    <div class="modal-content">
                                        <form action="{{ route('admin.why-choose-us.store') }}" method="POST"
                                            enctype="multipart/form-data">
                                            @csrf
                                            <div class="modal-header">
                                                <h5 class="modal-title">Add "Why Choose Us" Item</h5>
                                                <button type="button" class="btn-close" data-bs-dismiss="modal"></button>
                                            </div>
                                            <div class="modal-body">
                                                <div class="row">
                                                    <div class="col-md-6 mb-3">
                                                        <label class="form-label">Title <span
                                                                class="text-danger">*</span></label>
                                                        <input type="text" class="form-control" name="title" required>
                                                    </div>
                                                    <div class="col-md-6 mb-3">
                                                        <label class="form-label">Icon</label>
                                                        <input type="file" class="form-control" name="icon"
                                                            accept="image/*">
                                                    </div>
                                                    <div class="col-md-12 mb-3">
                                                        <label class="form-label">Description</label>
                                                        <textarea class="form-control" name="description"
                                                            rows="3"></textarea>
                                                    </div>
                                                    <div class="col-md-6 mb-3">
                                                        <label class="form-label">Display Order</label>
                                                        <input type="number" class="form-control" name="display_order"
                                                            value="0">
                                                    </div>
                                                    <div class="col-md-6 mb-3">
                                                        <label class="form-label">Status</label>
                                                        <div class="form-check form-switch">
                                                            <input class="form-check-input" type="checkbox" name="is_active"
                                                                checked>
                                                            <label class="form-check-label">Active</label>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="modal-footer">
                                                <button type="button" class="btn btn-secondary"
                                                    data-bs-dismiss="modal">Close</button>
                                                <button type="submit" class="btn btn-primary">Add Item</button>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>

                            <!-- Edit Why Choose Us Modal -->
                            <div class="modal fade" id="editWcuModal" tabindex="-1">
                                <div class="modal-dialog modal-lg">
                                    <div class="modal-content">
                                        <form id="editWcuForm" method="POST" enctype="multipart/form-data">
                                            @csrf
                                            @method('PUT')
                                            <div class="modal-header">
                                                <h5 class="modal-title">Edit "Why Choose Us" Item</h5>
                                                <button type="button" class="btn-close" data-bs-dismiss="modal"></button>
                                            </div>
                                            <div class="modal-body">
                                                <div class="row">
                                                    <div class="col-md-6 mb-3">
                                                        <label class="form-label">Title <span
                                                                class="text-danger">*</span></label>
                                                        <input type="text" class="form-control" id="edit_wcu_title"
                                                            name="title" required>
                                                    </div>
                                                    <div class="col-md-6 mb-3">
                                                        <label class="form-label">Icon</label>
                                                        <input type="file" class="form-control" name="icon"
                                                            accept="image/*">
                                                    </div>
                                                    <div class="col-md-12 mb-3">
                                                        <label class="form-label">Description</label>
                                                        <textarea class="form-control" id="edit_wcu_description"
                                                            name="description" rows="3"></textarea>
                                                    </div>
                                                    <div class="col-md-6 mb-3">
                                                        <label class="form-label">Display Order</label>
                                                        <input type="number" class="form-control"
                                                            id="edit_wcu_display_order" name="display_order">
                                                    </div>
                                                    <div class="col-md-6 mb-3">
                                                        <label class="form-label">Status</label>
                                                        <div class="form-check form-switch">
                                                            <input class="form-check-input" type="checkbox"
                                                                id="edit_wcu_is_active" name="is_active">
                                                            <label class="form-check-label">Active</label>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="modal-footer">
                                                <button type="button" class="btn btn-secondary"
                                                    data-bs-dismiss="modal">Close</button>
                                                <button type="submit" class="btn btn-primary">Update Item</button>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>

                            <script>
                                function generateSlug(text, targetId) {
                                    let slug = text.toLowerCase()
                                        .replace(/[^\w ]+/g, '')
                                        .replace(/ +/g, '-');
                                    document.getElementById(targetId).value = slug;
                                }

                                function editService(service) {
                                    document.getElementById('editServiceForm').action = "{{ url('admin/services') }}/" + service.id;
                                    document.getElementById('edit_title').value = service.title;
                                    document.getElementById('edit_slug').value = service.slug;
                                    document.getElementById('edit_short_description').value = service.short_description;
                                    document.getElementById('edit_content').value = service.content;
                                    document.getElementById('edit_seo_title').value = service.seo_title;
                                    document.getElementById('edit_seo_description').value = service.seo_description;
                                    document.getElementById('edit_display_order').value = service.display_order;
                                    document.getElementById('edit_is_active').checked = service.is_active;
                                    new bootstrap.Modal(document.getElementById('editServiceModal')).show();
                                }

                                function editWcu(item) {
                                    document.getElementById('editWcuForm').action = "{{ url('admin/services/why-choose-us') }}/" + item.id;
                                    document.getElementById('edit_wcu_title').value = item.title;
                                    document.getElementById('edit_wcu_description').value = item.description;
                                    document.getElementById('edit_wcu_display_order').value = item.display_order;
                                    document.getElementById('edit_wcu_is_active').checked = item.is_active;
                                    new bootstrap.Modal(document.getElementById('editWcuModal')).show();
                                }
                            </script>

                            <!-- Tabs Content -->
                            <div class="tab-content mt-4" id="servicePageTabsContent">
                                <!-- Page Content Tab -->
                                <div class="tab-pane fade show active" id="content" role="tabpanel">
                                    <form action="{{ route('admin.services.content.update') }}" method="POST"
                                        enctype="multipart/form-data">
                                        @csrf

                                        <div class="row">
                                            <div class="col-md-12 mb-3">
                                                <h5>Main Header Section</h5>
                                            </div>
                                            <div class="col-md-6 mb-3">
                                                <label class="form-label">Hero Title</label>
                                                <input type="text" class="form-control" name="hero_title"
                                                    value="{{ $pageContent->hero_title ?? '' }}">
                                            </div>
                                            <div class="col-md-6 mb-3">
                                                <label class="form-label">Hero Subtitle</label>
                                                <input type="text" class="form-control" name="hero_subtitle"
                                                    value="{{ $pageContent->hero_subtitle ?? '' }}">
                                            </div>
                                            <div class="col-md-6 mb-3">
                                                <label class="form-label">Hero Image</label>
                                                <input type="file" class="form-control" name="hero_image" accept="image/*">
                                                @if($pageContent && $pageContent->hero_image)
                                                    <img src="{{ asset($pageContent->hero_image) }}" alt="Hero Image"
                                                        class="mt-2" style="max-width: 200px;">
                                                @endif
                                            </div>

                                            <div class="col-md-12 mb-3">
                                                <hr>
                                                <h5>"Why Work With Us" Section</h5>
                                            </div>
                                            <div class="col-md-6 mb-3">
                                                <label class="form-label">Section Title</label>
                                                <input type="text" class="form-control" name="why_work_title"
                                                    value="{{ $pageContent->why_work_title ?? '' }}">
                                            </div>
                                            <div class="col-md-6 mb-3">
                                                <label class="form-label">Section Subtitle</label>
                                                <input type="text" class="form-control" name="why_work_subtitle"
                                                    value="{{ $pageContent->why_work_subtitle ?? '' }}">
                                            </div>

                                            <div class="col-md-12 mb-3">
                                                <hr>
                                                <h5>SEO Settings</h5>
                                            </div>
                                            <div class="col-md-6 mb-3">
                                                <label class="form-label">SEO Title</label>
                                                <input type="text" class="form-control" name="seo_title"
                                                    value="{{ $pageContent->seo_title ?? '' }}">
                                            </div>
                                            <div class="col-md-12 mb-3">
                                                <label class="form-label">SEO Description</label>
                                                <textarea class="form-control" name="seo_description"
                                                    rows="3">{{ $pageContent->seo_description ?? '' }}</textarea>
                                            </div>
                                        </div>

                                        <button type="submit" class="btn btn-primary">Update Page Content</button>
                                    </form>
                                </div>

                                <!-- Services List Tab -->
                                <div class="tab-pane fade" id="services" role="tabpanel">
                                    <div class="d-flex justify-content-between align-items-center mb-3">
                                        <h5>All Services (First Section)</h5>
                                        <button type="button" class="btn btn-primary" data-bs-toggle="modal"
                                            data-bs-target="#addServiceModal">
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
                                                    <th>Slug</th>
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
                                                                <img src="{{ asset($service->icon) }}" alt="Icon"
                                                                    style="max-width: 50px;">
                                                            @endif
                                                        </td>
                                                        <td>{{ $service->title }}</td>
                                                        <td>{{ $service->slug }}</td>
                                                        <td>
                                                            <span
                                                                class="badge badge-{{ $service->is_active ? 'success' : 'danger' }}">
                                                                {{ $service->is_active ? 'Active' : 'Inactive' }}
                                                            </span>
                                                        </td>
                                                        <td>
                                                            <button type="button" class="btn btn-sm btn-warning"
                                                                onclick='editService(@json($service))'>
                                                                <i class="fas fa-edit"></i>
                                                            </button>
                                                            <form action="{{ route('admin.services.destroy', $service->id) }}"
                                                                method="POST" class="d-inline"
                                                                onsubmit="return confirm('Are you sure?')">
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

                                <!-- Why Choose Us Tab -->
                                <div class="tab-pane fade" id="whyChooseUs" role="tabpanel">
                                    <div class="d-flex justify-content-between align-items-center mb-3">
                                        <h5>Why Choose Us Items (Second Section)</h5>
                                        <button type="button" class="btn btn-primary" data-bs-toggle="modal"
                                            data-bs-target="#addWcuModal">
                                            <i class="fas fa-plus me-2"></i>Add Item
                                        </button>
                                    </div>

                                    <div class="table-responsive">
                                        <table id="dataTable2" class="table table-bordered">
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
                                                @forelse($whyChooseUs as $item)
                                                    <tr>
                                                        <td>{{ $item->display_order }}</td>
                                                        <td>
                                                            @if($item->icon)
                                                                <img src="{{ asset($item->icon) }}" alt="Icon"
                                                                    style="max-width: 50px;">
                                                            @endif
                                                        </td>
                                                        <td>{{ $item->title }}</td>
                                                        <td>{{ $item->description }}</td>
                                                        <td>
                                                            <span
                                                                class="badge badge-{{ $item->is_active ? 'success' : 'danger' }}">
                                                                {{ $item->is_active ? 'Active' : 'Inactive' }}
                                                            </span>
                                                        </td>
                                                        <td>
                                                            <button type="button" class="btn btn-sm btn-warning"
                                                                onclick='editWcu(@json($item))'>
                                                                <i class="fas fa-edit"></i>
                                                            </button>
                                                            <form action="{{ route('admin.why-choose-us.destroy', $item->id) }}"
                                                                method="POST" class="d-inline"
                                                                onsubmit="return confirm('Are you sure?')">
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
                                                        <td colspan="6" class="text-center">No items found</td>
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
        <div class="modal-dialog modal-lg">
            <div class="modal-content">
                <form action="{{ route('admin.services.store') }}" method="POST" enctype="multipart/form-data">
                    @csrf
                    <div class="modal-header">
                        <h5 class="modal-title">Add Service</h5>
                        <button type="button" class="btn-close" data-bs-dismiss="modal"></button>
                    </div>
                    <div class="modal-body">
                        <div class="row">
                            <div class="col-md-6 mb-3">
                                <label class="form-label">Title <span class="text-danger">*</span></label>
                                <input type="text" class="form-control" name="title" required
                                    onkeyup="generateSlug(this.value, 'add_slug')">
                            </div>
                            <div class="col-md-6 mb-3">
                                <label class="form-label">Slug <span class="text-danger">*</span></label>
                                <input type="text" class="form-control" name="slug" id="add_slug" required>
                            </div>
                            <div class="col-md-6 mb-3">
                                <label class="form-label">Icon</label>
                                <input type="file" class="form-control" name="icon" accept="image/*">
                            </div>
                            <div class="col-md-6 mb-3">
                                <label class="form-label">Main Image</label>
                                <input type="file" class="form-control" name="image" accept="image/*">
                            </div>
                            <div class="col-md-12 mb-3">
                                <label class="form-label">Short Description</label>
                                <textarea class="form-control" name="short_description" rows="2"></textarea>
                            </div>
                            <div class="col-md-12 mb-3">
                                <label class="form-label">Content</label>
                                <textarea class="form-control" name="content" rows="4"></textarea>
                            </div>
                            <div class="col-md-6 mb-3">
                                <label class="form-label">SEO Title</label>
                                <input type="text" class="form-control" name="seo_title">
                            </div>
                            <div class="col-md-6 mb-3">
                                <label class="form-label">SEO Description</label>
                                <input type="text" class="form-control" name="seo_description">
                            </div>
                            <div class="col-md-6 mb-3">
                                <label class="form-label">Display Order</label>
                                <input type="number" class="form-control" name="display_order" value="0">
                            </div>
                            <div class="col-md-6 mb-3">
                                <label class="form-label">Status</label>
                                <div class="form-check form-switch">
                                    <input class="form-check-input" type="checkbox" name="is_active" checked>
                                    <label class="form-check-label">Active</label>
                                </div>
                            </div>
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
        <div class="modal-dialog modal-lg">
            <div class="modal-content">
                <form id="editServiceForm" method="POST" enctype="multipart/form-data">
                    @csrf
                    @method('PUT')
                    <div class="modal-header">
                        <h5 class="modal-title">Edit Service</h5>
                        <button type="button" class="btn-close" data-bs-dismiss="modal"></button>
                    </div>
                    <div class="modal-body">
                        <div class="row">
                            <div class="col-md-6 mb-3">
                                <label class="form-label">Title <span class="text-danger">*</span></label>
                                <input type="text" class="form-control" id="edit_title" name="title" required
                                    onkeyup="generateSlug(this.value, 'edit_slug')">
                            </div>
                            <div class="col-md-6 mb-3">
                                <label class="form-label">Slug <span class="text-danger">*</span></label>
                                <input type="text" class="form-control" id="edit_slug" name="slug" required>
                            </div>
                            <div class="col-md-6 mb-3">
                                <label class="form-label">Icon</label>
                                <input type="file" class="form-control" name="icon" accept="image/*">

                            </div>
                            <div class="col-md-6 mb-3">
                                <label class="form-label">Main Image</label>
                                <input type="file" class="form-control" name="image" accept="image/*">
                            </div>
                            <div class="col-md-12 mb-3">
                                <label class="form-label">Short Description</label>
                                <textarea class="form-control" id="edit_short_description" name="short_description"
                                    rows="2"></textarea>
                            </div>
                            <div class="col-md-12 mb-3">
                                <label class="form-label">Content</label>
                                <textarea class="form-control" id="edit_content" name="content" rows="4"></textarea>
                            </div>
                            <div class="col-md-6 mb-3">
                                <label class="form-label">SEO Title</label>
                                <input type="text" class="form-control" id="edit_seo_title" name="seo_title">
                            </div>
                            <div class="col-md-6 mb-3">
                                <label class="form-label">SEO Description</label>
                                <input type="text" class="form-control" id="edit_seo_description" name="seo_description">
                            </div>
                            <div class="col-md-6 mb-3">
                                <label class="form-label">Display Order</label>
                                <input type="number" class="form-control" id="edit_display_order" name="display_order">
                            </div>
                            <div class="col-md-6 mb-3">
                                <label class="form-label">Status</label>
                                <div class="form-check form-switch">
                                    <input class="form-check-input" type="checkbox" id="edit_is_active" name="is_active">
                                    <label class="form-check-label">Active</label>
                                </div>
                            </div>
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

    <script>
        document.addEventListener("DOMContentLoaded", function () {
            const urlParams = new URLSearchParams(window.location.search);
            if (urlParams.get('open_modal') === 'true') {
                // activate services tab first
                var triggerEl = document.querySelector('#services-tab')
                var tab = new bootstrap.Tab(triggerEl)
                tab.show()

                // show modal
                new bootstrap.Modal(document.getElementById('addServiceModal')).show();
            }
        });

        function generateSlug(text, targetId) {
            let slug = text.toLowerCase()
                .replace(/[^\w ]+/g, '')
                .replace(/ +/g, '-');
            document.getElementById(targetId).value = slug;
        }

        function editService(service) {
            document.getElementById('editServiceForm').action = "{{ url('admin/services') }}/" + service.id;
            document.getElementById('edit_title').value = service.title;
            document.getElementById('edit_slug').value = service.slug;
            document.getElementById('edit_short_description').value = service.short_description;
            document.getElementById('edit_content').value = service.content;
            document.getElementById('edit_seo_title').value = service.seo_title;
            document.getElementById('edit_seo_description').value = service.seo_description;
            document.getElementById('edit_display_order').value = service.display_order;
            document.getElementById('edit_is_active').checked = service.is_active;
            new bootstrap.Modal(document.getElementById('editServiceModal')).show();
        }
    </script>
@endsection