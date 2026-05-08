@extends('admin.layout.app')

@section('content')
<div class="content-body">
    <div class="container-fluid">
        <div class="form-head page-titles d-flex align-items-center">
            <h4 class="mb-1">About Page Management</h4>
            <div class="me-auto"></div>
        </div>

        @if(session('success'))
        <div class="alert alert-success">{{ session('success') }}</div>
        @endif

        <!-- Nav tabs -->
        <div class="custom-tab-1">
            <ul class="nav nav-tabs">
                <li class="nav-item">
                    <a class="nav-link active" data-bs-toggle="tab" href="#general"><i class="la la-home me-2"></i> General Content</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" data-bs-toggle="tab" href="#milestones"><i class="la la-flag me-2"></i> Milestones</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" data-bs-toggle="tab" href="#values"><i class="la la-heart me-2"></i> Core Values</a>
                </li>
            </ul>
            <div class="tab-content">

                <!-- General Content Tab -->
                <div class="tab-pane fade show active" id="general" role="tabpanel">
                    <div class="pt-4">
                        <div class="card">
                            <div class="card-body">
                                <form action="{{ route('admin.about.update_general') }}" method="POST" enctype="multipart/form-data">
                                    @csrf
                                    @method('PUT')

                                    <!-- Hero Section -->
                                    <h4 class="text-primary mb-4">Hero Section</h4>
                                    <div class="row">
                                        <div class="col-md-6 mb-3">
                                            <label class="form-label">Hero Title</label>
                                            <input type="text" name="hero_title" class="form-control" value="{{ $general->hero_title }}">
                                        </div>
                                        <div class="col-md-6 mb-3">
                                            <label class="form-label">Hero Subtitle</label>
                                            <input type="text" name="hero_subtitle" class="form-control" value="{{ $general->hero_subtitle }}">
                                        </div>
                                        <div class="col-md-12 mb-3">
                                            <label class="form-label">Hero Description</label>
                                            <textarea name="hero_description" class="form-control" rows="3">{{ $general->hero_description }}</textarea>
                                        </div>
                                        <div class="col-md-12 mb-3">
                                            <label class="form-label">Hero Background Image</label>
                                            <input type="file" name="hero_bg_image" class="form-control">
                                            @if($general->hero_bg_image)
                                            <div class="mt-2"><img src="{{ asset('storage/about/' . $general->hero_bg_image) }}" width="100"></div>
                                            @endif
                                        </div>
                                    </div>
                                    <hr>

                                    <!-- Founder Section -->
                                    <h4 class="text-primary mb-4">Founder Section</h4>
                                    <div class="row">
                                        <div class="col-md-6 mb-3">
                                            <label class="form-label">Title</label>
                                            <input type="text" name="founder_title" class="form-control" value="{{ $general->founder_title }}">
                                        </div>
                                        <div class="col-md-6 mb-3">
                                            <label class="form-label">Subtitle</label>
                                            <input type="text" name="founder_subtitle" class="form-control" value="{{ $general->founder_subtitle }}">
                                        </div>
                                        <div class="col-md-12 mb-3">
                                            <label class="form-label">Description</label>
                                            <textarea name="founder_description" class="form-control" rows="3">{{ $general->founder_description }}</textarea>
                                        </div>
                                        <div class="col-md-12 mb-3">
                                            <label class="form-label">Founder Image</label>
                                            <input type="file" name="founder_image" class="form-control">
                                            @if($general->founder_image)
                                            <div class="mt-2"><img src="{{ asset('storage/about/' . $general->founder_image) }}" width="100"></div>
                                            @endif
                                        </div>

                                        <!-- Stats -->
                                        <div class="col-md-4 mb-3">
                                            <label>Stat 1 Value</label>
                                            <input type="text" name="founder_stat1_value" class="form-control" value="{{ $general->founder_stat1_value }}">
                                            <label>Stat 1 Label</label>
                                            <input type="text" name="founder_stat1_label" class="form-control" value="{{ $general->founder_stat1_label }}">
                                        </div>
                                        <div class="col-md-4 mb-3">
                                            <label>Stat 2 Value</label>
                                            <input type="text" name="founder_stat2_value" class="form-control" value="{{ $general->founder_stat2_value }}">
                                            <label>Stat 2 Label</label>
                                            <input type="text" name="founder_stat2_label" class="form-control" value="{{ $general->founder_stat2_label }}">
                                        </div>
                                        <div class="col-md-4 mb-3">
                                            <label>Stat 3 Value</label>
                                            <input type="text" name="founder_stat3_value" class="form-control" value="{{ $general->founder_stat3_value }}">
                                            <label>Stat 3 Label</label>
                                            <input type="text" name="founder_stat3_label" class="form-control" value="{{ $general->founder_stat3_label }}">
                                        </div>
                                    </div>
                                    <hr>

                                    <!-- Story Section -->
                                    <h4 class="text-primary mb-4">Story Section</h4>
                                    <div class="row">
                                        <div class="col-md-12 mb-3">
                                            <label class="form-label">Title</label>
                                            <input type="text" name="story_title" class="form-control" value="{{ $general->story_title }}">
                                        </div>
                                        <div class="col-md-12 mb-3">
                                            <label class="form-label">Description</label>
                                            <textarea name="story_description" class="form-control" rows="3">{{ $general->story_description }}</textarea>
                                        </div>
                                        <div class="col-md-12 mb-3">
                                            <label class="form-label">Image</label>
                                            <input type="file" name="story_image" class="form-control">
                                            @if($general->story_image)
                                            <div class="mt-2"><img src="{{ asset('storage/about/' . $general->story_image) }}" width="100"></div>
                                            @endif
                                        </div>
                                    </div>
                                    <hr>

                                    <!-- Struggle Section -->
                                    <h4 class="text-primary mb-4">Struggle Section</h4>
                                    <div class="row">
                                        <div class="col-md-12 mb-3">
                                            <label class="form-label">Title</label>
                                            <input type="text" name="struggle_title" class="form-control" value="{{ $general->struggle_title }}">
                                        </div>
                                        <div class="col-md-12 mb-3">
                                            <label class="form-label">Description</label>
                                            <textarea name="struggle_description" class="form-control" rows="3">{{ $general->struggle_description }}</textarea>
                                        </div>
                                        <div class="col-md-12 mb-3">
                                            <label class="form-label">Image</label>
                                            <input type="file" name="struggle_image" class="form-control">
                                            @if($general->struggle_image)
                                            <div class="mt-2"><img src="{{ asset('storage/about/' . $general->struggle_image) }}" width="100"></div>
                                            @endif
                                        </div>
                                    </div>
                                    <hr>

                                    <!-- Turning Point Section -->
                                    <h4 class="text-primary mb-4">Turning Point Section</h4>
                                    <div class="row">
                                        <div class="col-md-12 mb-3">
                                            <label class="form-label">Title</label>
                                            <input type="text" name="turning_title" class="form-control" value="{{ $general->turning_title }}">
                                        </div>
                                        <div class="col-md-6 mb-3">
                                            <label class="form-label">Left Column Text</label>
                                            <textarea name="turning_left_text" class="form-control" rows="5">{{ $general->turning_left_text }}</textarea>
                                        </div>
                                        <div class="col-md-6 mb-3">
                                            <label class="form-label">Right Column Text</label>
                                            <textarea name="turning_right_text" class="form-control" rows="5">{{ $general->turning_right_text }}</textarea>
                                        </div>
                                    </div>
                                    <hr>

                                    <!-- Emotional Core Section -->
                                    <h4 class="text-primary mb-4">Emotional Core Section</h4>
                                    <div class="row">
                                        <div class="col-md-12 mb-3">
                                            <label class="form-label">Title</label>
                                            <input type="text" name="emotional_title" class="form-control" value="{{ $general->emotional_title }}">
                                        </div>
                                        <div class="col-md-12 mb-3">
                                            <label class="form-label">Description</label>
                                            <textarea name="emotional_description" class="form-control" rows="3">{{ $general->emotional_description }}</textarea>
                                        </div>
                                        <div class="col-md-12 mb-3">
                                            <label class="form-label">Points (One per line)</label>
                                            <textarea name="emotional_points" class="form-control" rows="5">{{ $general->emotional_points ? implode("\n", $general->emotional_points) : '' }}</textarea>
                                        </div>
                                        <div class="col-md-12 mb-3">
                                            <label class="form-label">Image</label>
                                            <input type="file" name="emotional_image" class="form-control">
                                            @if($general->emotional_image)
                                            <div class="mt-2"><img src="{{ asset('storage/about/' . $general->emotional_image) }}" width="100"></div>
                                            @endif
                                        </div>
                                    </div>
                                    <hr>

                                    <!-- CTA Section -->
                                    <h4 class="text-primary mb-4">Values / CTA Section</h4>
                                    <div class="row">
                                        <div class="col-md-6 mb-3">
                                            <label class="form-label">CTA Title</label>
                                            <input type="text" name="cta_title" class="form-control" value="{{ $general->cta_title }}">
                                        </div>
                                        <div class="col-md-6 mb-3">
                                            <label class="form-label">CTA Description</label>
                                            <textarea name="cta_description" class="form-control" rows="2">{{ $general->cta_description }}</textarea>
                                        </div>
                                        <div class="col-md-6 mb-3">
                                            <label class="form-label">Phone</label>
                                            <input type="text" name="cta_phone" class="form-control" value="{{ $general->cta_phone }}">
                                        </div>
                                        <div class="col-md-6 mb-3">
                                            <label class="form-label">Email</label>
                                            <input type="text" name="cta_email" class="form-control" value="{{ $general->cta_email }}">
                                        </div>
                                        <div class="col-md-6 mb-3">
                                            <label class="form-label">Button Text</label>
                                            <input type="text" name="cta_button_text" class="form-control" value="{{ $general->cta_button_text }}">
                                        </div>
                                        <div class="col-md-6 mb-3">
                                            <label class="form-label">Button Link</label>
                                            <input type="text" name="cta_button_link" class="form-control" value="{{ $general->cta_button_link }}">
                                        </div>
                                    </div>

                                    <button type="submit" class="btn btn-primary mt-4">Save General Settings</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Milestones Tab -->
                <div class="tab-pane fade" id="milestones" role="tabpanel">
                    <div class="pt-4">
                        <div class="d-flex justify-content-end mb-3">
                            <a href="{{ route('admin.about.milestones.create') }}" class="btn btn-primary">Add Milestone</a>
                        </div>
                        <div class="card">
                            <div class="card-body">
                                <div class="table-responsive">
                                    <table id="dataTable1" class="table table-responsive-md">
                                        <thead>
                                            <tr>
                                                <th>Sort</th>
                                                <th>Year/Label</th>
                                                <th>Title</th>
                                                <th>Description</th>
                                                <th>Action</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            @foreach($milestones as $m)
                                            <tr>
                                                <td>{{ $m->sort_order }}</td>
                                                <td>{{ $m->label }}</td>
                                                <td>{{ $m->title }}</td>
                                                <td>{{ Str::limit($m->description, 50) }}</td>
                                                <td>
                                                    <div class="d-flex">
                                                        <a href="{{ route('admin.about.milestones.edit', $m->id) }}" class="btn btn-primary shadow btn-xs sharp me-1"><i class="fas fa-pencil-alt"></i></a>
                                                        <form action="{{ route('admin.about.milestones.destroy', $m->id) }}" method="POST" onsubmit="return confirm('Delete?');">
                                                            @csrf @method('DELETE')
                                                            <button type="submit" class="btn btn-danger shadow btn-xs sharp"><i class="fa fa-trash"></i></button>
                                                        </form>
                                                    </div>
                                                </td>
                                            </tr>
                                            @endforeach
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Values Tab -->
                <div class="tab-pane fade" id="values" role="tabpanel">
                    <div class="pt-4">
                        <div class="d-flex justify-content-end mb-3">
                            <a href="{{ route('admin.about.values.create') }}" class="btn btn-primary">Add Value</a>
                        </div>
                        <div class="card">
                            <div class="card-body">
                                <div class="table-responsive">
                                    <table id="dataTable2" class="table table-responsive-md">
                                        <thead>
                                            <tr>
                                                <th>Sort</th>
                                                <th>Icon</th>
                                                <th>Title</th>
                                                <th>Description</th>
                                                <th>Action</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            @foreach($values as $v)
                                            <tr>
                                                <td>{{ $v->sort_order }}</td>
                                                <td>
                                                    @if($v->icon_image)
                                                    <img src="{{ asset('storage/about/icons/' . $v->icon_image) }}" width="40">
                                                    @endif
                                                </td>
                                                <td>{{ $v->title }}</td>
                                                <td>{{ Str::limit($v->description, 50) }}</td>
                                                <td>
                                                    <div class="d-flex">
                                                        <a href="{{ route('admin.about.values.edit', $v->id) }}" class="btn btn-primary shadow btn-xs sharp me-1"><i class="fas fa-pencil-alt"></i></a>
                                                        <form action="{{ route('admin.about.values.destroy', $v->id) }}" method="POST" onsubmit="return confirm('Delete?');">
                                                            @csrf @method('DELETE')
                                                            <button type="submit" class="btn btn-danger shadow btn-xs sharp"><i class="fa fa-trash"></i></button>
                                                        </form>
                                                    </div>
                                                </td>
                                            </tr>
                                            @endforeach
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
@endsection