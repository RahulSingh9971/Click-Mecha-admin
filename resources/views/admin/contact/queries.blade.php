@extends('admin.layout.app')
@section('content')
<style>

    .dataTables_wrapper .dataTables_length {
	display: flex;
	align-items: center;
	margin-bottom: 12px;
}

.dataTables_wrapper .dataTables_length label {
	display: flex;
	align-items: center;
	gap: 6px;
	margin-bottom: 0;
	font-weight: 400;
}

.dataTables_wrapper .dataTables_length select {
	display: inline-block !important;
	width: auto !important;
	min-width: 64px;
	height: 32px;
	padding: 4px 28px 4px 8px;
	border: 1px solid #dee2e6;
	border-radius: 4px;
	background-color: #fff;
	opacity: 1 !important;
	visibility: visible !important;
}

.dataTables_wrapper .dataTables_length .bootstrap-select,
.dataTables_wrapper .dataTables_length button.dropdown-toggle,
.dataTables_wrapper .dataTables_length .dropdown-menu {
	display: none !important;
}

table.dataTable thead th {
	white-space: nowrap;
	vertical-align: middle;
}

table.dataTable thead .sorting,
table.dataTable thead .sorting_asc,
table.dataTable thead .sorting_desc {
	background-position: right 8px center !important;
	padding-right: 24px !important;
}

/* Prevent row text from turning white on click */
table.dataTable tbody tr.selected,
table.dataTable tbody tr.selected td {
    color: inherit !important;
    background-color: transparent !important;
}

    .switch {
        position: relative;
        display: inline-block;
        width: 50px;
        height: 24px;
    }

    .switch input {
        opacity: 0;
        width: 0;
        height: 0;
    }

    .slider {
        position: absolute;
        cursor: pointer;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background-color: #ccc;
        transition: .4s;
        border-radius: 34px;
    }

    .slider:before {
        position: absolute;
        content: "";
        height: 20px;
        width: 20px;
        left: 2px;
        bottom: 2px;
        background-color: white;
        transition: .4s;
        border-radius: 50%;
    }

    input:checked+.slider {
        background-color: #2196F3;
    }

    input:checked+.slider:before {
        transform: translateX(26px);
    }
</style>
<div class="content-body">
    <div class="container-fluid">
        <div class="form-head page-titles d-flex align-items-center">
            <div class="me-auto">
                <h4 class="mb-1">Contact Form</h4>
                <ol class="breadcrumb">
                    <li class="breadcrumb-item active">Masters</li>
                    <li class="breadcrumb-item"><a href="{{ route('admin.contact.queries') }}">Contact Form</a></li>
                </ol>
            </div>
            <a href="javascript:void(0);" class="btn btn-primary rounded light">Refresh</a>
            <a href="{{ route('admin.contacts.export') }}" class="btn btn-success rounded light ms-3">Export</a>
        </div>
        <div class="row">
            <div class="col-xl-12">
                    @include('utils.show_success')
                    @include('utils.show_error')
                    <table class="table display mb-4 dataTablesCard overflow-hidden card-table" id="example">
                        <thead>
                            <tr>
                                <th style="width: 5%;">S. No.</th>
                                <th style="width: 12%;">Name</th>
                                <th style="width: 12%;">Company</th>
                                <th style="width: 15%;">Contact</th>
                                <th style="width: 10%;">Location</th>
                                <th style="width: 12%;">Services</th>
                                <th style="width: 8%;">Budget</th>
                                <th style="width: 12%;">Date/Time</th>
                                <th style="width: 8%;" class="text-center">Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            @foreach ($contacts as $contact)
                            <tr>
                                <td>{{ $loop->iteration }}</td>
                                <td>{{ $contact->name }}</td>
                                <td>{{ $contact->company_name ?? '-' }}</td>
                                <td>
                                    @if($contact->phone)<div>{{ $contact->phone }}</div>@endif
                                    @if($contact->email)<div>{{ $contact->email }}</div>@endif
                                </td>
                                <td>{{ $contact->location ?? '-' }}</td>
                                <td>{{ $contact->services ?? '-' }}</td>
                                <td>{{ $contact->budget ?? '-' }}</td>
                                <td>{{ optional($contact->created_at)->format('M d, Y h:i A') }}</td>
                                <td class="text-center">
                                    <a href="{{ route('admin.contact.show', $contact->id) }}" class="btn btn-sm btn-primary">
                                        <i class="fa fa-eye"></i> View
                                    </a>
                                </td>
                            </tr>
                            @endforeach
                        </tbody>
                    </table>
            </div>
        </div>
    </div>
</div>
@endsection
