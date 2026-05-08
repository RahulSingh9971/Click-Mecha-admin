@extends('admin.layout.app')

@section('content')
<div class="content-body">
    <div class="container-fluid">
        <div class="row">
            <div class="col-xl-12 col-lg-12">
                <div class="card">
                    <div class="card-header">
                        <h4 class="card-title">Add Milestone</h4>
                    </div>
                    <div class="card-body">
                        <div class="basic-form">
                            <form action="{{ route('admin.about.milestones.store') }}" method="POST">
                                @csrf
                                <div class="row">
                                    <div class="mb-3 col-md-6">
                                        <label class="form-label">Year / Label</label>
                                        <input type="text" name="year" class="form-control" required placeholder="e.g. 2018 or Early Days">
                                    </div>
                                    <div class="mb-3 col-md-6">
                                        <label class="form-label">Sort Order</label>
                                        <input type="number" name="sort_order" class="form-control" value="0">
                                    </div>
                                    <div class="mb-3 col-md-12">
                                        <label class="form-label">Title</label>
                                        <input type="text" name="title" class="form-control" required>
                                    </div>
                                    <div class="mb-3 col-md-12">
                                        <label class="form-label">Description</label>
                                        <textarea name="description" class="form-control" rows="4" required></textarea>
                                    </div>
                                </div>
                                <button type="submit" class="btn btn-primary">Save</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
@endsection