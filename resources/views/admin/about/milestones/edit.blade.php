@extends('admin.layout.app')

@section('content')
<div class="content-body">
    <div class="container-fluid">
        <div class="row">
            <div class="col-xl-12 col-lg-12">
                <div class="card">
                    <div class="card-header">
                        <h4 class="card-title">Edit Milestone</h4>
                    </div>
                    <div class="card-body">
                        <div class="basic-form">
                            <form action="{{ route('admin.about.milestones.update', $milestone->id) }}" method="POST">
                                @csrf
                                @method('PUT')
                                <div class="row">
                                    <div class="mb-3 col-md-6">
                                        <label class="form-label">Year / Label</label>
                                        <input type="text" name="year" class="form-control" value="{{ $milestone->label }}" required>
                                    </div>
                                    <div class="mb-3 col-md-6">
                                        <label class="form-label">Sort Order</label>
                                        <input type="number" name="sort_order" class="form-control" value="{{ $milestone->sort_order }}">
                                    </div>
                                    <div class="mb-3 col-md-12">
                                        <label class="form-label">Title</label>
                                        <input type="text" name="title" class="form-control" value="{{ $milestone->title }}" required>
                                    </div>
                                    <div class="mb-3 col-md-12">
                                        <label class="form-label">Description</label>
                                        <textarea name="description" class="form-control" rows="4" required>{{ $milestone->description }}</textarea>
                                    </div>
                                </div>
                                <button type="submit" class="btn btn-primary">Update</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
@endsection