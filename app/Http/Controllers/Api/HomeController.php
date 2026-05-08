<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\HomeHeroSection;
use App\Models\HomeAboutSection;
use App\Models\HomeServiceCard;
use App\Models\HomeStatistic;
use App\Models\Testimonial;
use App\Models\WorkShowcase;
use App\Models\SeoSetting;
use App\Models\Client;
use App\Models\VideoTestimonial;
use App\Models\CompanyHighlight;
use App\Models\HomeHelpSection;
use Illuminate\Http\Request;

class HomeController extends Controller
{
    public function index()
    {
        try {
            $data = [
                'hero' => $this->getHeroSection(),
                'about' => $this->getAboutSection(),
                'company_highlight' => $this->getCompanyHighlight(),
                'help_section' => $this->getHelpSection(),
                'services' => $this->getServices(),
                'statistics' => $this->getStatistics(),
                'testimonials' => $this->getTestimonials(),
                'work_showcase' => $this->getWorkShowcase(),
                'clients' => $this->getClients(),
                'video_testimonials' => $this->getVideoTestimonials(),
                'seo' => $this->getSeoSettings('home'),
            ];

            return response()->json([
                'status' => true,
                'message' => 'Home page data retrieved successfully',
                'data' => $data
            ], 200);
        } catch (\Exception $e) {
            return response()->json([
                'status' => false,
                'message' => 'Failed to retrieve home page data',
                'error' => $e->getMessage()
            ], 500);
        }
    }

    private function getHeroSection()
    {
        $hero = HomeHeroSection::where('is_active', true)->first();

        if (!$hero) {
            return null;
        }

        return [
            'id' => $hero->id,
            'title' => $hero->title,
            'subtitle' => $hero->subtitle,
            'description' => $hero->description,
            'button_text' => $hero->button_text,
            'button_link' => $hero->button_link,
            'background_image' => $hero->background_image ? asset('public/storage/' . $hero->background_image) : null,
        ];
    }

    private function getAboutSection()
    {
        $about = HomeAboutSection::where('is_active', true)->first();

        if (!$about) {
            return null;
        }

        return [
            'id' => $about->id,
            'title' => $about->title,
            'subtitle' => $about->subtitle,
            'content' => $about->content,
            'content_2' => $about->content_2,
            'image' => $about->image ? asset('public/storage/' . $about->image) : null,
            'years_experience' => $about->years_experience,
            'button_text' => $about->button_text,
            'button_link' => $about->button_link,
        ];
    }

    private function getServices()
    {
        $services = HomeServiceCard::where('is_active', true)
            ->orderBy('display_order')
            ->get();

        return $services->map(function ($service) {
            return [
                'id' => $service->id,
                'title' => $service->title,
                'description' => $service->description,
                'icon' => $service->icon ? asset('public/storage/' . $service->icon) : null,
                'button_text' => $service->button_text,
                'button_link' => $service->button_link,
                'display_order' => $service->display_order,
            ];
        });
    }

    private function getStatistics()
    {
        $statistics = HomeStatistic::where('is_active', true)
            ->orderBy('display_order')
            ->get();

        return $statistics->map(function ($stat) {
            return [
                'id' => $stat->id,
                'label' => $stat->label,
                'value' => $stat->value,
                'suffix' => $stat->suffix,
                'icon' => $stat->icon ? asset('public/storage/' . $stat->icon) : null,
                'display_order' => $stat->display_order,
            ];
        });
    }

    private function getTestimonials()
    {
        $testimonials = Testimonial::where('is_active', true)
            ->orderBy('display_order')
            ->get();

        return $testimonials->map(function ($testimonial) {
            return [
                'id' => $testimonial->id,
                'client_name' => $testimonial->client_name,
                'client_position' => $testimonial->client_position,
                'client_company' => $testimonial->client_company,
                'testimonial_text' => $testimonial->testimonial_text,
                'client_image' => $testimonial->client_image ? asset('public/storage/' . $testimonial->client_image) : null,
                'rating' => $testimonial->rating,
                'display_order' => $testimonial->display_order,
            ];
        });
    }

    // Individual section endpoints
    public function hero()
    {
        try {
            $hero = $this->getHeroSection();

            return response()->json([
                'status' => true,
                'message' => 'Hero section retrieved successfully',
                'data' => $hero
            ], 200);
        } catch (\Exception $e) {
            return response()->json([
                'status' => false,
                'message' => 'Failed to retrieve hero section',
                'error' => $e->getMessage()
            ], 500);
        }
    }

    public function about()
    {
        try {
            $about = $this->getAboutSection();

            return response()->json([
                'status' => true,
                'message' => 'About section retrieved successfully',
                'data' => $about
            ], 200);
        } catch (\Exception $e) {
            return response()->json([
                'status' => false,
                'message' => 'Failed to retrieve about section',
                'error' => $e->getMessage()
            ], 500);
        }
    }

    public function services()
    {
        try {
            $services = $this->getServices();

            return response()->json([
                'status' => true,
                'message' => 'Services retrieved successfully',
                'data' => $services
            ], 200);
        } catch (\Exception $e) {
            return response()->json([
                'status' => false,
                'message' => 'Failed to retrieve services',
                'error' => $e->getMessage()
            ], 500);
        }
    }

    public function statistics()
    {
        try {
            $statistics = $this->getStatistics();

            return response()->json([
                'status' => true,
                'message' => 'Statistics retrieved successfully',
                'data' => $statistics
            ], 200);
        } catch (\Exception $e) {
            return response()->json([
                'status' => false,
                'message' => 'Failed to retrieve statistics',
                'error' => $e->getMessage()
            ], 500);
        }
    }

    public function testimonials()
    {
        try {
            $testimonials = $this->getTestimonials();

            return response()->json([
                'status' => true,
                'message' => 'Testimonials retrieved successfully',
                'data' => $testimonials
            ], 200);
        } catch (\Exception $e) {
            return response()->json([
                'status' => false,
                'message' => 'Failed to retrieve testimonials',
                'error' => $e->getMessage()
            ], 500);
        }
    }

    private function getWorkShowcase()
    {
        $workShowcase = WorkShowcase::where('is_active', true)
            ->where('show_on_homepage', true)
            ->orderBy('display_order')
            ->get();

        return $workShowcase->map(function ($work) {
            return [
                'id' => $work->id,
                'title' => $work->title,
                'description' => $work->description,
                'image' => $work->image ? asset('public/storage/' . $work->image) : null,
                'category' => $work->category,
                'link' => $work->link,
                'display_order' => $work->display_order,
            ];
        });
    }

    private function getClients()
    {
        $clients = Client::where('status', 1)
            ->where('show_on_homepage', 1)
            ->orderBy('sort_order')
            ->get();

        return $clients->map(function ($client) {
            return [
                'id' => $client->id,
                'name' => $client->name,
                'logo' => $client->logo ? asset('public/storage/clients/' . $client->logo) : null,
                'sort_order' => $client->sort_order,
            ];
        });
    }

    private function getSeoSettings($pageName = 'home')
    {
        $seo = SeoSetting::where('page_name', $pageName)
            ->where('is_active', true)
            ->first();

        if (!$seo) {
            return null;
        }

        return [
            'id' => $seo->id,
            'page_name' => $seo->page_name,
            'meta_title' => $seo->meta_title,
            'meta_description' => $seo->meta_description,
            'meta_keywords' => $seo->meta_keywords,
            'og_title' => $seo->og_title,
            'og_description' => $seo->og_description,
            'og_image' => $seo->og_image ? asset('public/storage/' . $seo->og_image) : null,
            'og_type' => $seo->og_type,
            'twitter_card' => $seo->twitter_card,
            'twitter_title' => $seo->twitter_title,
            'twitter_description' => $seo->twitter_description,
            'twitter_image' => $seo->twitter_image ? asset('public/storage/' . $seo->twitter_image) : null,
            'canonical_url' => $seo->canonical_url,
            'schema_markup' => $seo->schema_markup,
        ];
    }

    public function workShowcase()
    {
        try {
            $workShowcase = $this->getWorkShowcase();

            return response()->json([
                'status' => true,
                'message' => 'Work showcase retrieved successfully',
                'data' => $workShowcase
            ], 200);
        } catch (\Exception $e) {
            return response()->json([
                'status' => false,
                'message' => 'Failed to retrieve work showcase',
                'error' => $e->getMessage()
            ], 500);
        }
    }

    public function clients()
    {
        try {
            $clients = $this->getClients();

            return response()->json([
                'status' => true,
                'message' => 'Clients retrieved successfully',
                'data' => $clients
            ], 200);
        } catch (\Exception $e) {
            return response()->json([
                'status' => false,
                'message' => 'Failed to retrieve clients',
                'error' => $e->getMessage()
            ], 500);
        }
    }

    public function seo($pageName = 'home')
    {
        try {
            $seo = $this->getSeoSettings($pageName);

            return response()->json([
                'status' => true,
                'message' => 'SEO settings retrieved successfully',
                'data' => $seo
            ], 200);
        } catch (\Exception $e) {
            return response()->json([
                'status' => false,
                'message' => 'Failed to retrieve SEO settings',
                'error' => $e->getMessage()
            ], 500);
        }
    }

    private function getVideoTestimonials()
    {
        $videoTestimonials = VideoTestimonial::where('is_active', true)
            ->where('show_on_homepage', true)
            ->orderBy('display_order')
            ->get();

        return $videoTestimonials->map(function ($video) {
            $videoUrl = null;

            // Handle different video types
            if ($video->video_type === 'upload' && $video->video_file) {
                $videoUrl = asset('public/storage/' . $video->video_file);
            } elseif ($video->video_type === 'youtube' && $video->video_url) {
                // Extract YouTube video ID and create embed URL
                preg_match('/(?:youtube\.com\/(?:[^\/]+\/.+\/|(?:v|e(?:mbed)?)\/|.*[?&]v=)|youtu\.be\/)([^"&?\/\s]{11})/', $video->video_url, $matches);
                $videoUrl = isset($matches[1]) ? 'https://www.youtube.com/embed/' . $matches[1] : $video->video_url;
            } elseif ($video->video_type === 'vimeo' && $video->video_url) {
                // Extract Vimeo video ID and create embed URL
                preg_match('/vimeo\.com\/(\d+)/', $video->video_url, $matches);
                $videoUrl = isset($matches[1]) ? 'https://player.vimeo.com/video/' . $matches[1] : $video->video_url;
            }

            return [
                'id' => $video->id,
                'title' => $video->title,
                'description' => $video->description,
                'client_name' => $video->client_name,
                'client_position' => $video->client_position,
                'client_company' => $video->client_company,
                'video_url' => $videoUrl,
                'video_type' => $video->video_type,
                'thumbnail' => $video->thumbnail ? asset('public/storage/' . $video->thumbnail) : null,
                'duration' => $video->duration,
                'display_order' => $video->display_order,
            ];
        });
    }

    public function videoTestimonials()
    {
        try {
            $videoTestimonials = $this->getVideoTestimonials();

            return response()->json([
                'status' => true,
                'message' => 'Video testimonials retrieved successfully',
                'data' => $videoTestimonials
            ], 200);
        } catch (\Exception $e) {
            return response()->json([
                'status' => false,
                'message' => 'Failed to retrieve video testimonials',
                'error' => $e->getMessage()
            ], 500);
        }
    }


    private function getCompanyHighlight()
    {
        $highlight = CompanyHighlight::where('is_active', true)->first();

        if (!$highlight) {
            return null;
        }

        return [
            'id' => $highlight->id,
            'section_title' => $highlight->section_title,
            'section_description' => $highlight->section_description,
            'button_text' => $highlight->button_text,
            'button_link' => $highlight->button_link,
            'team_image' => $highlight->team_image ? asset('public/storage/' . $highlight->team_image) : null,
            'statistics' => $highlight->statistics,
        ];
    }

    public function companyHighlight()
    {
        try {
            $highlight = $this->getCompanyHighlight();

            return response()->json([
                'status' => true,
                'message' => 'Company highlight retrieved successfully',
                'data' => $highlight
            ], 200);
        } catch (\Exception $e) {
            return response()->json([
                'status' => false,
                'message' => 'Failed to retrieve company highlight',
                'error' => $e->getMessage()
            ], 500);
        }
    }


    private function getHelpSection()
    {
        $helpSection = HomeHelpSection::where('is_active', true)->first();

        if (!$helpSection) {
            return null;
        }

        return [
            'id' => $helpSection->id,
            'title' => $helpSection->title,
            'phone_1' => $helpSection->phone_1,
            'phone_2' => $helpSection->phone_2,
            'email' => $helpSection->email,
            'button_text' => $helpSection->button_text,
            'button_link' => $helpSection->button_link,
        ];
    }

    public function helpSection()
    {
        try {
            $helpSection = $this->getHelpSection();

            return response()->json([
                'status' => true,
                'message' => 'Help section retrieved successfully',
                'data' => $helpSection
            ], 200);
        } catch (\Exception $e) {
            return response()->json([
                'status' => false,
                'message' => 'Failed to retrieve help section',
                'error' => $e->getMessage()
            ], 500);
        }
    }
}
