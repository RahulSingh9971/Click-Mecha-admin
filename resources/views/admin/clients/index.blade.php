@extends('admin.layout.app')

@section('content')
<div class="content-body">
    <div class="container-fluid">
        <div class="form-head page-titles d-flex align-items-center">
            <div class="me-auto">
                <h4 class="mb-1">Clientele</h4>
                <ol class="breadcrumb">
                    <li class="breadcrumb-item active"><a href="javascript:void(0)">Clients</a></li>
                    <li class="breadcrumb-item"><a href="javascript:void(0)">List</a></li>
                </ol>
            </div>
            <a href="{{ route('admin.clients.create') }}" class="btn btn-primary rounded light">Add Client</a>
        </div>

        <div class="row">
            <div class="col-12">
                <div class="card">
                    <div class="card-header">
                        <h4 class="card-title">Our Clients</h4>
                    </div>
                    <div class="card-body">
                        <div class="table-responsive">
                            <table id="example" class="table table-responsive-md">
                                <thead>
                                    <tr>
                                        <th><strong>Sort Order</strong></th>
                                        <th><strong>Logo</strong></th>
                                        <th><strong>Name</strong></th>
                                        <th><strong>Status</strong></th>
                                        <th><strong>Homepage</strong></th>
                                        <th><strong>Action</strong></th>
                                    </tr>
                                </thead>
                                <tbody>
                                    @foreach($clients as $client)
                                    <tr>
                                        <td>{{ $client->sort_order }}</td>
                                        <td>
                                            <img src="{{ asset('storage/clients/' . $client->logo) }}" alt="{{ $client->name }}" width="80" style="object-fit: contain;">
                                        </td>
                                        <td>{{ $client->name }}</td>
                                        <td>
                                            @if($client->status)
                                            <span class="badge light badge-success">Active</span>
                                            @else
                                            <span class="badge light badge-danger">Inactive</span>
                                            @endif
                                        </td>
                                        <td>
                                            @if($client->show_on_homepage)
                                            <a href="{{ route('admin.clients.toggle-homepage', $client->id) }}" class="badge light badge-success" style="cursor: pointer;">Visible</a>
                                            @else
                                            <a href="{{ route('admin.clients.toggle-homepage', $client->id) }}" class="badge light badge-secondary" style="cursor: pointer;">Hidden</a>
                                            @endif
                                        </td>
                                        <td>
                                            <div class="d-flex">
                                                <a href="{{ route('admin.clients.edit', $client->id) }}" class="btn btn-primary shadow btn-xs sharp me-1"><i class="fas fa-pencil-alt"></i></a>
                                                <form action="{{ route('admin.clients.destroy', $client->id) }}" method="POST" onsubmit="return confirm('Are you sure?')">
                                                    @csrf
                                                    @method('DELETE')
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
@endsection