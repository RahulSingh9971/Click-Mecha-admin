@extends('admin.layout.app')

@section('content')
<style>
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
    .badge-success {
    background-color: #28a745;
}
.badge-danger {
    background-color: #dc3545;
}
.badge-warning {
    background-color: #ffc107;
}
.badge-info {
    background-color: #17a2b8;
}
.badge-secondary {
    background-color: #6c757d;
}
.badge-primary {
    background-color: #007bff;
}
.pagination {
    display: flex;
    justify-content: center;
    padding: 20px;
    margin: 0;
}

.page-item .page-link {
    position: relative;
    display: block;
    padding: 8px 16px;
    margin-left: -1px;
    line-height: 1.25;
    color: #007bff;
    background-color: #fff;
    border: 1px solid #dee2e6;
    transition: background-color 0.3s, color 0.3s;
}

.page-item.active .page-link {
    z-index: 1;
    color: #fff;
    background-color: #007bff;
    border-color: #007bff;
}

.page-item.disabled .page-link {
    color: #6c757d;
    pointer-events: none;
    background-color: #fff;
    border-color: #dee2e6;
}

.page-item:hover .page-link {
    color: #0056b3;
    background-color: #e9ecef;
    border-color: #dee2e6;
}

.page-item:first-child .page-link {
    border-top-left-radius: .25rem;
    border-bottom-left-radius: .25rem;
}

.page-item:last-child .page-link {
    border-top-right-radius: .25rem;
    border-bottom-right-radius: .25rem;
}

</style>
<div class="content-body">
    <div class="container-fluid">
        <!-- Card for Filters -->
        <div class="card mb-4">
            <div class="card-body">
                <h5 class="card-title">Filter Leads</h5>
                <div class="row">
                    <div class="col-md-3">
                        <input type="text" id="filter-name" class="form-control" placeholder="Filter by Name">
                    </div>
                    <div class="col-md-3">
                        <input type="text" id="filter-phone" class="form-control" placeholder="Filter by Phone">
                    </div>
                    <div class="col-md-3">
                        <select id="filter-status" class="form-control">
                            <option value="">All Status</option>
                            <option value="good_lead">Good Lead</option>
                            <option value="dead_lead">Dead Lead</option>
                            <option value="do_not_pick_up">Do Not Pick Up</option>
                            <option value="call_back">Call Back</option>
                            <option value="not_interested">Not Interested</option>
                            <option value="new_lead">New Lead</option>
                        </select>
                    </div>
                    <div class="col-md-3">
                        <button id="clear-filters" class="btn btn-secondary">Clear Filters</button>
                    </div>
                </div>
            </div>
        </div>

        <!-- Lead Listing -->
        <div class="row">
            <div class="col-xl-12">
                <div class="table-responsive fs-14">
                    @include('utils.show_success')
                    @include('utils.show_error')
                    <table id="leadsTable" class="table display mb-4 dataTablesCard overflow-hidden card-table">
                        <thead>
                            <tr>
                                <th class="ms-2" style="width: 5%;">S. No.</th>
                                <th style="width: 15%;">Contact</th>
                                <th style="width: 10%;">Location / Date</th>
                                <th style="width: 20%;">Page URL</th>
                                <th style="width: 10%;">Status</th>
                                <th class="text-end" style="width: 10%;">Action</th>
                            </tr>
                        </thead>
                        <tbody>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </div>
</div>

<!-- Include DataTables JS & custom script -->
 



@endsection
