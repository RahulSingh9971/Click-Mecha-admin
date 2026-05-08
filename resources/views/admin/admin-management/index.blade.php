@extends('admin.layout.app')
@section('content')
<style>
    .badge-permission {
        background-color: rgba(20, 54, 66, 0.1);
        color: #143642;
        font-weight: 500;
        padding: 4px 10px;
        border-radius: 4px;
        font-size: 11px;
        margin: 2px;
        display: inline-block;
    }
    .badge-empty {
        background-color: #fce8e6;
        color: #c5221f;
        font-weight: 500;
        padding: 4px 10px;
        border-radius: 4px;
        font-size: 11px;
        display: inline-block;
    }
</style>

<div class="content-body">
    <div class="container-fluid">
        <div class="form-head page-titles d-flex align-items-center">
            <div class="me-auto">
                <h4 class="mb-1">Admin & Employer Management</h4>
                <ol class="breadcrumb">
                    <li class="breadcrumb-item active">Masters</li>
                    <li class="breadcrumb-item"><a href="{{ route('admin.sub-admins.index') }}">Admin Management</a></li>
                </ol>
            </div>
            <a href="{{ route('admin.sub-admins.create') }}" class="btn btn-primary rounded light">
                <i class="fa fa-plus me-1"></i> Add New Sub-Admin / Employer
            </a>
        </div>

        <div class="row">
            <div class="col-xl-12">
                @include('utils.show_success')
                @include('utils.show_error')
                
                <div class="card">
                    <div class="card-body">
                        <table class="table display mb-4 dataTablesCard overflow-hidden card-table" id="example">
                            <thead>
                                <tr>
                                    <th style="width: 5%;">S. No.</th>
                                    <th style="width: 20%;">Name</th>
                                    <th style="width: 25%;">Email Address</th>
                                    <th style="width: 35%;">Allowed Tabs / Modules</th>
                                    <th style="width: 15%;" class="text-center">Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                @foreach ($subAdmins as $subAdmin)
                                <tr>
                                    <td>{{ $loop->iteration }}</td>
                                    <td><strong>{{ $subAdmin->name }}</strong></td>
                                    <td>{{ $subAdmin->email }}</td>
                                    <td>
                                        @if(is_array($subAdmin->permissions) && count($subAdmin->permissions) > 0)
                                            @foreach($subAdmin->permissions as $perm)
                                                <span class="badge-permission">
                                                    {{ \App\Http\Controllers\Admin\AdminManagementController::$modules[$perm] ?? $perm }}
                                                </span>
                                            @endforeach
                                        @else
                                            <span class="badge-empty">No Tabs Allowed (No Access)</span>
                                        @endif
                                    </td>
                                    <td class="text-center">
                                        <div class="d-flex justify-content-center gap-2">
                                            <a href="{{ route('admin.sub-admins.edit', $subAdmin->id) }}" class="btn btn-sm btn-primary">
                                                <i class="fa fa-pencil me-1"></i> Edit
                                            </a>
                                            <form action="{{ route('admin.sub-admins.destroy', $subAdmin->id) }}" method="POST" onsubmit="return confirm('Are you sure you want to delete this sub-admin?');">
                                                @csrf
                                                @method('DELETE')
                                                <button type="submit" class="btn btn-sm btn-danger">
                                                    <i class="fa fa-trash me-1"></i> Delete
                                                </button>
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
@endsection
