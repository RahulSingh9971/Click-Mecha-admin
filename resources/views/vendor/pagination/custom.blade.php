@if ($paginator->hasPages())
    <ul class="pagination">
        {{-- Previous Page Link --}}
        @if ($paginator->onFirstPage())
            <li class="page-item disabled"><span class="page-link">&laquo;</span></li>
        @else
            <li class="page-item"><a class="page-link" href="{{ $paginator->previousPageUrl() }}" rel="prev">&laquo;</a></li>
        @endif

        {{-- First Page --}}
        <li class="page-item {{ $paginator->currentPage() == 1 ? 'active' : '' }}">
            <a class="page-link" href="{{ $paginator->url(1) }}">1</a>
        </li>

        {{-- Left Ellipsis --}}
        <!-- @if ($paginator->currentPage() > 3)
            <li class="page-item disabled"><span class="page-link">...</span></li>
        @endif -->

        {{-- Current Page --}}
        @if ($paginator->currentPage() > 1 && $paginator->currentPage() < $paginator->lastPage())
            <li class="page-item active">
                <span class="page-link">{{ $paginator->currentPage() }}</span>
            </li>
        @endif

        {{-- Next to Current Page --}}
        @if ($paginator->currentPage() + 1 < $paginator->lastPage())
            <li class="page-item">
                <a class="page-link" href="{{ $paginator->url($paginator->currentPage() + 1) }}">{{ $paginator->currentPage() + 1 }}</a>
            </li>
        @endif

        {{-- Right Ellipsis --}}
        @if ($paginator->currentPage() < $paginator->lastPage() - 2)
            <li class="page-item disabled"><span class="page-link">...</span></li>
        @endif

        {{-- Last Page --}}
        @if ($paginator->lastPage() > 1)
            <li class="page-item {{ $paginator->currentPage() == $paginator->lastPage() ? 'active' : '' }}">
                <a class="page-link" href="{{ $paginator->url($paginator->lastPage()) }}">{{ $paginator->lastPage() }}</a>
            </li>
        @endif

        {{-- Next Page Link --}}
        @if ($paginator->hasMorePages())
            <li class="page-item"><a class="page-link" href="{{ $paginator->nextPageUrl() }}" rel="next">&raquo;</a></li>
        @else
            <li class="page-item disabled"><span class="page-link">&raquo;</span></li>
        @endif
    </ul>
@endif
