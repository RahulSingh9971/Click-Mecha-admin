<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\Admin;
use App\Models\Blog;
use App\Models\BlogCategory;
use Illuminate\Support\Str;
use Illuminate\Http\Request;

class BlogsController extends Controller
{

    public function list(Request $request)
    {
        $query = Blog::with('category');

        if ($request->has('title') && !empty($request->title)) {
            $query->where('title', 'like', '%' . $request->title . '%');
        }

        if ($request->has('status') && $request->status != '') {
            $query->where('status', $request->status);
        }

        if ($request->has('date') && !empty($request->date)) {
            $query->whereDate('date', $request->date);
        }

        $blogs = $query->get();

        return view('admin.blog.list', compact('blogs'));
    }

    public function status(Request $request)
    {

        $blog = Blog::find($request->id);
        if ($blog) {
            $blog->status = $request->status;
            $blog->save();
            $request->session()->flash('message', 'Blog status updated');
            return redirect()->route('admin.blogs');
        } else {
            $request->session()->flash('error', 'log not found');
            return redirect()->route('admin.blogs');
        }
    }

    public function add()
    {
        $categories =   BlogCategory::where('status', 1)->get();
        $authors    =   Admin::all();

        $data = [
            'categories'    =>      $categories,
            'authors'       =>      $authors,
        ];

        return view('admin.blog.add-blog', $data);
    }

    public function process(Request $request)
    {
        // Validation rules and messages
        $validatedData = $request->validate(
            [
                'title'                     =>      'required|string|max:255',
                'subtitle'                  =>      'nullable|string|max:255',
                'desc'                      =>      'required|string',
                'date'                      =>      'required|date',
                'blog_category_id'          =>      'required|integer|exists:blog_categories,id',
                'author_id'                 =>      'required|integer|exists:admins,id',
                'sortOrder'                 =>      'nullable|integer',
                'metaTitle'                 =>      'required|string|max:255',
                'metaKeyword'               =>      'required|string|max:255',
                'metaDesc'                  =>      'required|string|max:255',
                'image'                     =>      'nullable|image|mimes:jpeg,png,jpg|max:2048'
            ],
            [
                'title.required'            =>      'The title field is required.',
                'desc.required'             =>      'The description field is required.',
                'date.required'             =>      'The date field is required.',
                'blog_category_id.required' =>      'The category field is required.',
                'blog_category_id.exists'   =>      'The selected category is invalid.',
                'author_id.required'        =>      'The author field is required.',
                'author_id.exists'          =>      'The selected author is invalid.',
                'metaTitle.required'        =>      'The meta title field is required.',
                'metaKeyword.required'      =>      'The meta keyword field is required.',
                'metaDesc.required'         =>      'The meta description field is required.',
                'image.image'               =>      'The file must be an image.',
                'image.mimes'               =>      'The image must be a file of type: jpeg, png, jpg.',
                'image.max'                 =>      'The image must not be greater than 2048 kilobytes.',
            ]
        );

        // Dynamically generate the slug using the title
        $validatedData['slug'] = Str::slug($validatedData['title'], '-');

        // Store the blog data
        $blog = new Blog($validatedData);

        // Handle image upload if exists
        if ($request->hasFile('image')) {
            $imageName = time() . '_' . Str::random(10) . '.' . $request->image->extension();
            $request->image->move(public_path('storage/blogs/media'), $imageName);
            $blog->image = $imageName;
        }

        $blog->save();

        // Save FAQs
        if ($request->has('faq_question') && $request->has('faq_answer')) {
            $questions = $request->faq_question;
            $answers = $request->faq_answer;
            
            foreach ($questions as $index => $question) {
                if (!empty($question) && !empty($answers[$index])) {
                    $blog->faqs()->create([
                        'question' => $question,
                        'answer' => $answers[$index]
                    ]);
                }
            }
        }

        // Sync with PageMeta
        \App\Models\PageMeta::updateOrCreate(
            ['slug' => 'blog/' . $blog->slug],
            [
                'metaTitle' => $request->metaTitle,
                'metaKeyword' => $request->metaKeyword,
                'metaDesc' => $request->metaDesc,
            ]
        );

        return redirect()->route('admin.blogs')->with('message', 'Blog added successfully!');
    }


    public function edit($id)
    {
        $blog = Blog::findOrFail($id);
        $categories = BlogCategory::where('status', 1)->get();
        $authors = Admin::all();

        return view('admin.blog.edit-blog', compact('blog', 'categories', 'authors'));
    }

    public function update(Request $request, $id)
    {
        $blog = Blog::findOrFail($id);
        $oldSlug = $blog->slug;
    
        $validatedData = $request->validate(
            [
                'title'                     =>      'required|string|max:255',
                'subtitle'                  =>      'nullable|string|max:255',
                'slug'                      =>      'nullable|string|max:255|unique:blogs,slug,' . $blog->id,
                'desc'                      =>      'required|string',
                'date'                      =>      'required|date',
                'blog_category_id'          =>      'required|integer|exists:blog_categories,id',
                'author_id'                 =>      'required|integer|exists:admins,id',
                'sortOrder'                 =>      'nullable|integer',
                'metaTitle'                 =>      'required|string|max:255',
                'metaKeyword'               =>      'required|string|max:255',
                'metaDesc'                  =>      'required|string|max:255',
                'image'                     =>      'nullable|image|mimes:jpeg,png,jpg|max:2048'
            ],
            [
                'title.required'            =>      'The title field is required.',
                'slug.required'             =>      'The slug field is required.',
                'slug.unique'               =>      'The slug must be unique.',
                'desc.required'             =>      'The description field is required.',
                'date.required'             =>      'The date field is required.',
                'blog_category_id.required' =>      'The category field is required.',
                'blog_category_id.exists'   =>      'The selected category is invalid.',
                'author_id.required'        =>      'The author field is required.',
                'author_id.exists'          =>      'The selected author is invalid.',
                'metaTitle.required'        =>      'The meta title field is required.',
                'metaKeyword.required'      =>      'The meta keyword field is required.',
                'metaDesc.required'         =>      'The meta description field is required.',
                'image.image'               =>      'The file must be an image.',
                'image.mimes'               =>      'The image must be a file of type: jpeg, png, jpg.',
                'image.max'                 =>      'The image must not be greater than 2048 kilobytes.',
            ]
        );
    
        // Dynamically generate the slug if not provided
        if (empty($validatedData['slug'])) {
            $validatedData['slug'] = Str::slug($validatedData['title'], '-');
        }
    
        $blog->update($validatedData);
    
        if ($request->hasFile('image')) {
            // Delete old image if exists
            if ($blog->image && file_exists(public_path('storage/blogs/media/' . $blog->image))) {
                unlink(public_path('storage/blogs/media/' . $blog->image));
            }
            $imageName = time() . '_' . Str::random(10) . '.' . $request->image->extension();
            $request->image->move(public_path('storage/blogs/media'), $imageName);
            $blog->image = $imageName;
        }
    
        $blog->save();
    
        // Update FAQs
        if ($request->has('faq_question') && $request->has('faq_answer')) {
            $questions = $request->faq_question;
            $answers = $request->faq_answer;
            
            $blog->faqs()->delete(); // Clear old FAQs
            
            foreach ($questions as $index => $question) {
                if (!empty($question) && !empty($answers[$index])) {
                    $blog->faqs()->create([
                        'question' => $question,
                        'answer' => $answers[$index]
                    ]);
                }
            }
        } else {
            $blog->faqs()->delete(); // Remove if all cleared
        }

        // Sync with PageMeta
        if ($oldSlug && $oldSlug !== $blog->slug) {
            \App\Models\PageMeta::where('slug', 'blog/' . $oldSlug)->delete();
        }

        \App\Models\PageMeta::updateOrCreate(
            ['slug' => 'blog/' . $blog->slug],
            [
                'metaTitle' => $request->metaTitle,
                'metaKeyword' => $request->metaKeyword,
                'metaDesc' => $request->metaDesc,
            ]
        );

        return redirect()->route('admin.blogs')->with('message', 'Blog updated successfully!');
    }
    

    public function delete($id)
    {
        $blog = Blog::findOrFail($id);

        // Delete the blog image if it exists
        if ($blog->image && file_exists(public_path('storage/blogs/media/' . $blog->image))) {
            unlink(public_path('storage/blogs/media/' . $blog->image));
        }

        \App\Models\PageMeta::where('slug', 'blog/' . $blog->slug)->delete();

        // Delete the blog
        $blog->delete();

        return redirect()->route('admin.blogs')->with('message', 'Blog deleted successfully!');
    }
}
