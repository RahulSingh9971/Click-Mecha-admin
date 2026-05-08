<div class="deznav">
    <div class="deznav-scroll d-flex flex-column justify-content-between">
        <ul class="metismenu" id="menu">
            @if(auth('admin')->user()->hasPermission('dashboard'))
            <li>
                <a href="{{ route('admin.dashboard') }}" class="ai-icon" aria-expanded="false">
                    <i class="flaticon-dashboard-1"></i>
                    <span class="nav-text">Dashboard</span>
                </a>
            </li>
            @endif

            @if(auth('admin')->user()->hasPermission('home'))
            <li>
                <a href="{{ route('admin.home.index') }}" class="ai-icon" aria-expanded="false">
                    <i class="flaticon-381-home"></i>
                    <span class="nav-text">Home Page</span>
                </a>
            </li>
            @endif

            @if(auth('admin')->user()->hasPermission('home_sections'))
            <li>
                <a class="has-arrow ai-icon" href="javascript:void()" aria-expanded="false">
                    <i class="flaticon-381-television"></i>
                    <span class="nav-text">Home Sections</span>
                </a>
                <ul aria-expanded="false">
                    <li><a href="{{ route('admin.work-showcase.index') }}">Work Showcase</a></li>
                    <li><a href="{{ route('admin.video-testimonials.index') }}">Video Testimonials</a></li>
                    <li><a href="{{ route('admin.company-highlight.index') }}">Company Highlights</a></li>
                    <li><a href="{{ route('admin.help-section.index') }}">Help / CTA Section</a></li>
                    <li><a href="{{ route('admin.seo-settings.index') }}">SEO Settings</a></li>
                </ul>
            </li>
            @endif

            @if(auth('admin')->user()->hasPermission('contact_forms'))
            <li>
                <a class="has-arrow ai-icon" href="javascript:void(0)" aria-expanded="false">
                    <i class="flaticon-381-user-7"></i>
                    <span class="nav-text">Contact Forms</span>
                </a>
                <ul aria-expanded="false">
                    <li><a href="{{ route('admin.contact.queries') }}">Queries</a></li>
                </ul>
            </li>
            @endif

            @if(auth('admin')->user()->hasPermission('blog'))
            <li>
                <a class="has-arrow ai-icon" href="javascript:void()" aria-expanded="false">
                    <i class="flaticon-landing-page"></i>
                    <span class="nav-text">Blog</span>
                </a>
                <ul aria-expanded="false">
                    <li><a href="{{ route('admin.blogs') }}">Blogs</a></li>
                    <li><a href="{{ route('admin.blog.add') }}">Add Blog</a></li>
                    <li><a href="{{ route('admin.blog-cat.add') }}">Blog Category</a></li>
                </ul>
            </li>
            @endif

            @if(auth('admin')->user()->hasPermission('policies'))
            <li>
                <a class="has-arrow ai-icon" href="javascript:void()" aria-expanded="false">
                    <i class="flaticon-381-settings-2"></i>
                    <span class="nav-text">Policies</span>
                </a>
                <ul aria-expanded="false">
                    <li><a href="{{ route('admin.policies.index') }}">All Policies</a></li>
                    <li><a href="{{ route('admin.policies.create') }}">Add Policy</a></li>
                </ul>
            </li>
            @endif

            @if(auth('admin')->user()->hasPermission('careers'))
            <li>
                <a class="has-arrow ai-icon" href="javascript:void()" aria-expanded="false">
                    <i class="flaticon-381-briefcase"></i>
                    <span class="nav-text">Careers</span>
                </a>
                <ul aria-expanded="false">
                    <li><a href="{{ route('admin.careers.index') }}">Open Positions</a></li>
                    <li><a href="{{ route('admin.careers.create') }}">Add New Position</a></li>
                    <li><a href="{{ route('admin.careers.applications') }}">Applications</a></li>
                </ul>
            </li>
            @endif

            @if(auth('admin')->user()->hasPermission('clientele'))
            <li>
                <a class="has-arrow ai-icon" href="javascript:void()" aria-expanded="false">
                    <i class="flaticon-381-heart"></i>
                    <span class="nav-text">Clientele</span>
                </a>
                <ul aria-expanded="false">
                    <li><a href="{{ route('admin.clients.index') }}">All Clients</a></li>
                    <li><a href="{{ route('admin.clients.create') }}">Add Client</a></li>
                </ul>
            </li>
            @endif

            @if(auth('admin')->user()->hasPermission('about_page'))
            <li>
                <a class="has-arrow ai-icon" href="javascript:void()" aria-expanded="false">
                    <i class="flaticon-381-layer-1"></i>
                    <span class="nav-text">About Page</span>
                </a>
                <ul aria-expanded="false">
                    <li><a href="{{ route('admin.about.index') }}">Manage Content</a></li>
                </ul>
            </li>
            @endif

            @if(auth('admin')->user()->hasPermission('services_page'))
            <li>
                <a class="has-arrow ai-icon" href="javascript:void()" aria-expanded="false">
                    <i class="flaticon-381-layer-1"></i>
                    <span class="nav-text">Services Page</span>
                </a>
                <ul aria-expanded="false">
                    <li><a href="{{ route('admin.services.index') }}">Manage Services</a></li>
                </ul>
            </li>
            @endif

            @if(auth('admin')->user()->hasPermission('page_meta'))
            <li>
                <a class="has-arrow ai-icon" href="javascript:void()" aria-expanded="false">
                    <i class="flaticon-381-search-1"></i>
                    <span class="nav-text">Page Meta (SEO)</span>
                </a>
                <ul aria-expanded="false">
                    <li><a href="{{ route('admin.page-meta.index') }}">All Page Meta</a></li>
                    <li><a href="{{ route('admin.page-meta.create') }}">Add Page Meta</a></li>
                </ul>
            </li>
            @endif

            {{-- Super Admin Only Feature --}}
            @if(auth('admin')->user()->role === 'super_admin')
            <li>
                <a href="{{ route('admin.sub-admins.index') }}" class="ai-icon" aria-expanded="false">
                    <i class="flaticon-381-user-9"></i>
                    <span class="nav-text">Admin Management</span>
                </a>
            </li>
            @endif
        </ul>
        <ul class="copyright">
            <li class="nav-item dropdown header-profile">
                <a class="nav-link d-flex justify-content-between align-items-center" href="javascript:void(0);" role="button" data-bs-toggle="dropdown">
                    <div class="header-info">
                        <span class="text-black">{{ Auth('admin')->user()->name }}</span>
                        <p class="fs-12 mb-0">{{ Auth('admin')->user()->role === 'super_admin' ? 'Super Admin' : 'Sub-Admin' }}</p>
                    </div>
                    <div class="profile_col profile-name-header">
                        <h4 class="text-black fw-bold m-0">
                            {{ substr(Auth('admin')->user()->name, 0, 1) }}
                        </h4>
                    </div>
                </a>
                <div class="dropdown-menu dropdown-menu-end">
                    <a href="{{ url('/admin/profile') }}" class="dropdown-item ai-icon">
                        <svg id="icon-user1" xmlns="http://www.w3.org/2000/svg" class="text-primary" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                            <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                            <circle cx="12" cy="7" r="4"></circle>
                        </svg>
                        <span class="ms-2">Profile </span>
                    </a>
                    <form id="logout-form" action="{{ route('admin.logout') }}" method="POST" style="display: none;">
                        @csrf
                    </form>
                    <a href="{{ route('admin.logout') }}" class="dropdown-item ai-icon" onclick="event.preventDefault(); document.getElementById('logout-form').submit();">
                        <svg id="icon-logout" xmlns="http://www.w3.org/2000/svg" class="text-danger" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                            <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"></path>
                            <polyline points="16 17 21 12 16 7"></polyline>
                            <line x1="21" y1="12" x2="9" y2="12"></line>
                        </svg>
                        <span class="ms-2">
                            Logout
                        </span>
                    </a>
                </div>
            </li>
        </ul>
    </div>
</div>