<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Admin\Auth\AuthController;
use App\Http\Controllers\Admin\LeadController;
use App\Http\Controllers\Admin\AboutController;
use App\Http\Controllers\Admin\HomeController;
use App\Http\Controllers\Admin\ProfileController;
use App\Http\Controllers\Admin\PageMetaController;
use App\Http\Controllers\Admin\AdminManagementController;
use Illuminate\Support\Facades\Route;

Route::get('', [AuthController::class, 'redirectToLogin']);
Route::post('/logout', [AuthController::class, 'logout'])->name('logout');
Route::get('/login', [AuthController::class, 'loginForm'])->name('login');
Route::post('/login', [AuthController::class, 'login'])->name('login.submit');


Route::middleware(['admin.auth'])->group(function () {
    // Dashboard Module
    Route::middleware(['admin.permission:dashboard'])->group(function () {
        Route::get('/dashboard', [DashboardController::class, 'index'])->name('dashboard');
    });

    // Home Page Module
    Route::middleware(['admin.permission:home'])->group(function () {
        Route::get('/home', [HomeController::class, 'index'])->name('home.index');
        Route::put('/home/hero', [HomeController::class, 'updateHero'])->name('home.hero.update');
        Route::put('/home/about', [HomeController::class, 'updateAbout'])->name('home.about.update');
        Route::post('/home/services', [HomeController::class, 'storeService'])->name('home.services.store');
        Route::put('/home/services/{id}', [HomeController::class, 'updateService'])->name('home.services.update');
        Route::delete('/home/services/{id}', [HomeController::class, 'deleteService'])->name('home.services.delete');
        Route::post('/home/statistics', [HomeController::class, 'storeStatistic'])->name('home.statistics.store');
        Route::put('/home/statistics/{id}', [HomeController::class, 'updateStatistic'])->name('home.statistics.update');
        Route::delete('/home/statistics/{id}', [HomeController::class, 'deleteStatistic'])->name('home.statistics.delete');
        Route::post('/home/testimonials', [HomeController::class, 'storeTestimonial'])->name('home.testimonials.store');
        Route::put('/home/testimonials/{id}', [HomeController::class, 'updateTestimonial'])->name('home.testimonials.update');
        Route::delete('/home/testimonials/{id}', [HomeController::class, 'deleteTestimonial'])->name('home.testimonials.delete');
    });

    // Profile Settings (Always accessible to all admins)
    Route::get('/profile', [ProfileController::class, 'index'])->name('profile');
    Route::post('/profile/update-email', [ProfileController::class, 'updateEmail'])->name('profile.updateEmail');
    Route::post('/profile/update-password', [ProfileController::class, 'updatePassword'])->name('profile.updatePassword');

    // Contact Forms Module
    Route::middleware(['admin.permission:contact_forms'])->group(function () {
        Route::get('/contact-form', [ContactController::class, 'list'])->name('contact.queries');
        Route::get('/contact-form/{id}', [ContactController::class, 'show'])->name('contact.show');
        Route::get('/contacts/export', [ContactController::class, 'export'])->name('contacts.export');
        Route::get('/leads', [ContactController::class, 'leadsManager'])->name('leads');
        Route::get('leads/{id}/edit', [ContactController::class, 'editLead'])->name('leads.edit');
        Route::put('leads/{id}', [ContactController::class, 'updateLead'])->name('leads.update');
        Route::get('leads/ajax', [ContactController::class, 'leadsAjax'])->name('leads.ajax');
    });

    // Blogs Module
    Route::middleware(['admin.permission:blog'])->group(function () {
        Route::get('/blog/category', [BlogCategoryController::class, 'add'])->name('blog-cat.add');
        Route::Post('/blog/category', [BlogCategoryController::class, 'process'])->name('blog-cat.add');
        Route::post('/blog/category/status', [BlogCategoryController::class, 'status'])->name('blog-cat.status');
        Route::get('/blog/add', [BlogsController::class, 'add'])->name('blog.add');
        Route::post('/blog/process', [BlogsController::class, 'process'])->name('blog.process');
        Route::get('/blogs', [BlogsController::class, 'list'])->name('blogs');
        Route::post('/blog/status', [BlogsController::class, 'status'])->name('blog.status');
        Route::get('/blogs/edit/{id}', [BlogsController::class, 'edit'])->name('blog.edit');
        Route::post('/blogs/update/{id}', [BlogsController::class, 'update'])->name('blogs.update');
        Route::delete('/blogs/delete/{id}', [BlogsController::class, 'delete'])->name('blog.delete');
    });

    // Policies Module
    Route::middleware(['admin.permission:policies'])->group(function () {
        Route::get('/policies', [PolicyController::class, 'index'])->name('policies.index');
        Route::get('/policies/create', [PolicyController::class, 'create'])->name('policies.create');
        Route::post('/policies', [PolicyController::class, 'store'])->name('policies.store');
        Route::get('/policies/{id}/edit', [PolicyController::class, 'edit'])->name('policies.edit');
        Route::put('/policies/{id}', [PolicyController::class, 'update'])->name('policies.update');
        Route::delete('/policies/{id}', [PolicyController::class, 'destroy'])->name('policies.destroy');
    });

    // Careers Module
    Route::middleware(['admin.permission:careers'])->group(function () {
        Route::resource('careers', CareerController::class);
        Route::get('/career-applications', [CareerController::class, 'applications'])->name('careers.applications');
    });

    // Clientele Module
    Route::middleware(['admin.permission:clientele'])->group(function () {
        Route::resource('clients', ClientController::class);
        Route::get('clients/{id}/toggle-homepage', [ClientController::class, 'toggleHomepage'])->name('clients.toggle-homepage');
    });

    // Home Sections Module
    Route::middleware(['admin.permission:home_sections'])->group(function () {
        Route::resource('work-showcase', WorkShowcaseController::class);
        Route::resource('seo-settings', SeoSettingController::class);
        Route::resource('video-testimonials', VideoTestimonialController::class);
        Route::get('/company-highlight', [CompanyHighlightController::class, 'index'])->name('company-highlight.index');
        Route::post('/company-highlight', [CompanyHighlightController::class, 'update'])->name('company-highlight.update');
        Route::get('/help-section', [HomeHelpSectionController::class, 'index'])->name('help-section.index');
        Route::post('/help-section', [HomeHelpSectionController::class, 'update'])->name('help-section.update');
    });

    // About Page Module
    Route::middleware(['admin.permission:about_page'])->group(function () {
        Route::get('/about', [AboutController::class, 'index'])->name('about.index');
        Route::put('/about/general', [AboutController::class, 'updateGeneral'])->name('about.update_general');
        Route::get('/about/milestones/create', [AboutController::class, 'createMilestone'])->name('about.milestones.create');
        Route::post('/about/milestones', [AboutController::class, 'storeMilestone'])->name('about.milestones.store');
        Route::get('/about/milestones/{id}/edit', [AboutController::class, 'editMilestone'])->name('about.milestones.edit');
        Route::put('/about/milestones/{id}', [AboutController::class, 'updateMilestone'])->name('about.milestones.update');
        Route::delete('/about/milestones/{id}', [AboutController::class, 'destroyMilestone'])->name('about.milestones.destroy');
        Route::get('/about/values/create', [AboutController::class, 'createValue'])->name('about.values.create');
        Route::post('/about/values', [AboutController::class, 'storeValue'])->name('about.values.store');
        Route::get('/about/values/{id}/edit', [AboutController::class, 'editValue'])->name('about.values.edit');
        Route::put('/about/values/{id}', [AboutController::class, 'updateValue'])->name('about.values.update');
        Route::delete('/about/values/{id}', [AboutController::class, 'destroyValue'])->name('about.values.destroy');
    });

    // Services Page Module
    Route::middleware(['admin.permission:services_page'])->group(function () {
        Route::get('/services', [\App\Http\Controllers\Admin\ServiceController::class, 'index'])->name('services.index');
        Route::post('/services/content', [\App\Http\Controllers\Admin\ServiceController::class, 'updateContent'])->name('services.content.update');
        Route::get('/services/create', [\App\Http\Controllers\Admin\ServiceController::class, 'create'])->name('services.create');
        Route::post('/services', [\App\Http\Controllers\Admin\ServiceController::class, 'store'])->name('services.store');
        Route::get('/services/{id}/edit', [\App\Http\Controllers\Admin\ServiceController::class, 'edit'])->name('services.edit');
        Route::put('/services/{id}', [\App\Http\Controllers\Admin\ServiceController::class, 'update'])->name('services.update');
        Route::delete('/services/{id}', [\App\Http\Controllers\Admin\ServiceController::class, 'destroy'])->name('services.destroy');
        Route::post('/services/why-choose-us', [\App\Http\Controllers\Admin\ServiceController::class, 'storeWhyChooseUs'])->name('why-choose-us.store');
        Route::put('/services/why-choose-us/{id}', [\App\Http\Controllers\Admin\ServiceController::class, 'updateWhyChooseUs'])->name('why-choose-us.update');
        Route::delete('/services/why-choose-us/{id}', [\App\Http\Controllers\Admin\ServiceController::class, 'destroyWhyChooseUs'])->name('why-choose-us.destroy');
    });

    // Page Meta Module
    Route::middleware(['admin.permission:page_meta'])->group(function () {
        Route::resource('page-meta', PageMetaController::class);
    });

    // Sub-Admins / Employers Management (Super Admin only)
    Route::resource('sub-admins', AdminManagementController::class);
});
