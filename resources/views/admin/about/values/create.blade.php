@extends('admin.layout.app')

@section('content')
<div class="content-body">
    <div class="container-fluid">
        <div class="row">
            <div class="col-xl-12 col-lg-12">
                <div class="card">
                    <div class="card-header">
                        <h4 class="card-title">Add Value</h4>
                    </div>
                    <div class="card-body">
                        <div class="basic-form">
                            <form action="{{ route('admin.about.values.store') }}" method="POST" enctype="multipart/form-data">
                                @csrf
                                <div class="row">
                                    <div class="mb-3 col-md-6">
                                        <label class="form-label">Title</label>
                                        <input type="text" name="title" class="form-control" required>
                                    </div>
                                    <div class="mb-3 col-md-6">
                                        <label class="form-label">Sort Order</label>
                                        <input type="number" name="sort_order" class="form-control" value="0">
                                    </div>
                                    <div class="mb-3 col-md-12">
                                        <label class="form-label">Description</label>
                                        <textarea name="description" class="form-control" rows="3" required></textarea>
                                    </div>
                                    <div class="mb-3 col-md-12">
                                        <label class="form-label">Icon Image</label>
                                        <input type="file" name="icon_image" class="form-control">
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