<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\BlogCategory;
use Illuminate\Http\Request;

class BlogCategoryController extends Controller
{
    public function add()
    {
        $blogCategories = BlogCategory::all();

        $data = [
            'blogCategories' => $blogCategories,
        ];

        return view('admin.blog.category', $data);
    }

    public function process(Request $request)
    {
        //return $request->post();
        $validatedData = $request->validate([
            'name' => 'required|string|max:255',
            'blog_category_id' => 'nullable|exists:blog_categories,id',
        ]);

        BlogCategory::create([
            'name' => $validatedData['name'],
            'blog_category_id' => $validatedData['blog_category_id'] ?? null,
            'status' => 1,
        ]);

        return redirect()->route('admin.blog-cat.add')->with('success', 'Blog Category added successfully');
    }


    public function status(Request $request)
    {

        $category = BlogCategory::find($request->id);
        if ($category) {
            $category->status = $request->status;
            $category->save();
            $request->session()->flash('message', 'Category status updated');
            return redirect()->route('admin.blog-cat.add');
        } else {
            $request->session()->flash('error', 'Category not found');
            return redirect()->route('admin.blog-cat.add');
        }
    }
}
