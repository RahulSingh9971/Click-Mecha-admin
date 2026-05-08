<!DOCTYPE html>
<html lang="en">

<head>
   <meta charset="utf-8" />
    <link rel="icon" href="{{ asset('assets/images/favicon-300x300.png') }}" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <link rel="preload" href="{{ asset('assets/fonts/Avenir Heavy.ttf') }}" as="font" type="font/truetype" crossorigin="anonymous">
    <link rel="preload" href="{{ asset('assets/fonts/Avenir Regular.ttf') }}" as="font" type="font/truetype" crossorigin="anonymous">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.css" />
    <link href="{{ asset('assets/style.css') }}" rel="stylesheet"><!--[-->
    <link rel="shortcut icon" type="image/x-icon" href="{{ asset('assets/images/Favicon Nava Resorts.png') }}" />
    <meta name="csrf-token" content="{{ csrf_token() }}">

    <title>@yield('meta_title', '3 Star Resort in Bangalore for Weddings & Corporate Events | Nava Resorts')</title>
    <meta name="description" content="@yield('meta_description', 'Stay at 3 star resort in Bangalore offering corporate stays, team outings, wedding venues, banquet halls & luxury accommodations.')">
    
    <meta name="google-site-verification" content="oswqbd10m45cwAExBS_IycGS96-PePcDGNT0XdM6gu8" />


    <style>
        /* ===== MODAL FIX: z-index, isolation, pointer-events ===== */
        #exampleModal {
            position: fixed;
            inset: 0;
            width: 100vw;
            height: 100vh;
    
            /* Put it above any rogue elements */
            z-index: 2147483647;
            background-color: rgba(0, 0, 0, 0.7);
    
            /* animation state */
            display: none;
            opacity: 0;
            transition: opacity 0.3s ease;
    
            /* new stacking context so children sit above all */
            isolation: isolate;
    
            /* center dialog when shown (we toggle display via .show) */
            align-items: center;
            justify-content: center;
        }
      
        #exampleModal.show {
            display: flex !important;
            opacity: 1;
        }
    
        #exampleModal .modal-dialog {
            position: relative;
            width: 90%;
            max-width: 900px;
            margin: 20px auto;
            transform: scale(0.8);
            transition: transform 0.3s ease;
    
            /* prevent overlay clicks from passing through here */
            pointer-events: none;
        }
    
        #exampleModal.show .modal-dialog {
            transform: scale(1);
        }
    
        #exampleModal .modal-content {
            position: relative;
            background-color: #fff;
            border-radius: 12px;
            overflow: hidden;
            box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);
    
            /* allow clicks only inside content */
            pointer-events: auto;
        }
    
        /* Close button always above content within the modal context */
        #exampleModal .popup-close {
            position: absolute;
            top: 15px;
            right: 15px;
            z-index: 1;
            background: rgba(255, 255, 255, 0.9);
            border: none;
            border-radius: 50%;
            width: 40px;
            height: 40px;
            cursor: pointer;
            display: flex;
            align-items: center;
            justify-content: center;
            transition: all 0.3s ease;
            padding: 0;
        }
    
        #exampleModal .popup-close:hover {
            background: #fff;
            transform: rotate(90deg);
        }
    
        /* keep your existing form/layout styles... */
        /* (retain your .modal_left/.modal_right/.form-control/.btn-primary etc. as-is) */
    
        /* Responsive overrides you already had */
        @media (max-width: 991px) {
            .d-lg-block {
                display: block !important;
            }
    
            .d-md-none {
                display: none !important;
            }

      
        }
    
        @media (max-width: 768px) {
            .modal-dialog {
                width: 95%;
                margin: 10px auto;
            }
    
            .col-md-5 {
                display: none !important;
            }
    
            .col-lg-7 {
                flex: 0 0 100%;
                max-width: 100%;
            }
    
            .d-block {
                display: block !important;
            }
    
            .d-md-block {
                display: block !important;
            }
        }
    
        /* Modal Animation Styles */
        #exampleModal {
            display: none;
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            z-index: 1050;
            overflow: auto;
            background-color: rgba(0, 0, 0, 0.7);
            opacity: 0;
            transition: opacity 0.3s ease;
        }
    
        #exampleModal.show {
            display: flex !important;
            align-items: center;
            justify-content: center;
            opacity: 1;
        }
    
        .modal-dialog {
            position: relative;
            width: 90%;
            max-width: 900px;
            margin: 20px auto;
            transform: scale(0.8);
            transition: transform 0.3s ease;
        }
    
        #exampleModal.show .modal-dialog {
            transform: scale(1);
        }
    
        .modal-content {
            position: relative;
            background-color: #fff;
            border-radius: 12px;
            overflow: hidden;
            box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);
        }
    
        /* Rotating Button Styles */
        .get_btn {
            position: fixed;
            bottom: 30px;
            right: 30px;
            z-index: 998;
            cursor: pointer;
            text-decoration: none;
            display: block;
        }
    
        /* .rotate-box-cta {
                position: relative;
                width: 120px;
                height: 120px;
                animation: rotate 10s linear infinite;
            } */
    
        @keyframes rotate {
            from {
                transform: rotate(0deg);
            }
    
            to {
                transform: rotate(360deg);
            }
        }
    
        .rotating-text-cta {
            position: absolute;
            width: 100%;
            height: 100%;
            animation: rotate 10s linear infinite reverse;
            text-transform: uppercase;
            font-size: 12px;
            font-weight: bold;
            color: #8A4B3B;
            display: flex;
            align-items: center;
            justify-content: center;
            letter-spacing: 2px;
        }
    
        .center-image-cta {
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            width: 60px;
            height: 60px;
            display: flex;
            align-items: center;
            justify-content: center;
            background: white;
            border-radius: 50%;
            box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
        }
    
        .center-image-cta img {
            max-width: 50%;
            height: auto;
        }
    
        .popup-close {
            position: absolute;
            top: 15px;
            right: 15px;
            z-index: 99;
            background: rgba(255, 255, 255, 0.9);
            border: none;
            border-radius: 50%;
            width: 40px;
            height: 40px;
            cursor: pointer;
            display: flex;
            align-items: center;
            justify-content: center;
            transition: all 0.3s ease;
            padding: 0;
            cursor: pointer;
        }
    
        .popup-close:hover {
            background: white;
            transform: rotate(90deg);
        }
    
        .popup-close img {
            max-width: 20px;
            max-height: 20px;
            cursor: pointer;
        }
    
        .modal-body {
            padding: 0;
        }
    
        .row {
            display: flex;
            flex-wrap: wrap;
            margin: 0;
        }
    
        .col-md-5 {
            flex: 0 0 41.666667%;
            max-width: 41.666667%;
            padding: 0;
        }
    
        .col-md-12 {
            flex: 0 0 100%;
            max-width: 100%;
        }
    
        .col-lg-7 {
            flex: 0 0 58.333333%;
            max-width: 58.333333%;
            padding: 0;
        }
    
        .modal_left {
            padding: 40px;
            background: url("{{ asset('assets/images/night.webp') }}");
            background-size: cover;
            background-position: center;
            height: 100%;
            display: flex;
            align-items: center;
            justify-content: end;
            flex-direction: column;
            gap: 20px;
            width: 100%;
        }

        .modal_left h2 {
            color: #fff;
            font-size: 24px;
            font-weight: 600;
        }
    
        .modal_left img {
            width: 100%;
            height: auto;
            border-radius: 8px;
        }
    
        .modal_right {
            padding: 40px 30px;
        }
    
        .modal_box h3 {
            margin-bottom: 25px;
            color: #333;
            font-size: 24px;
            font-weight: 600;
        }
    
        .form-group {
            margin-bottom: 20px;
        }
    
        .form-control {
            width: 100%;
            border-radius: 8px;
            padding: 12px 15px;
            border: 1px solid #ddd;
            font-size: 15px;
            font-family: inherit;
            transition: all 0.3s ease;
        }
    
        .form-control:focus {
            outline: none;
            border-color: #8A4B3B;
            box-shadow: 0 0 0 0.2rem rgba(138, 75, 59, 0.15);
        }
    
        select.form-control {
            appearance: none;
            background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 12 12'%3E%3Cpath fill='%23333' d='M6 9L1 4h10z'/%3E%3C/svg%3E");
            background-repeat: no-repeat;
            background-position: right 15px center;
            padding-right: 40px;
        }
    
        .btn-primary {
            width: 100%;
            background-color: #8A4B3B;
            border-color: #8A4B3B;
            color: white;
            padding: 12px 30px;
            border-radius: 8px;
            font-weight: 600;
            border: none;
            cursor: pointer;
            font-size: 16px;
            transition: all 0.3s ease;
        }
    
        .btn-primary:hover {
            background-color: #6B3A2E;
            border-color: #6B3A2E;
        }
    
        .btn-primary:disabled {
            background-color: #ccc;
            border-color: #ccc;
            cursor: not-allowed;
        }
    
        .d-none {
            display: none;
        }
    
        .d-flex {
            display: flex;
        }
    
        .align-items-center {
            align-items: center;
        }
    
        .my-3 {
            margin-top: 1rem;
            margin-bottom: 1rem;
        }
    
        @media (max-width: 991px) {
            .d-lg-block {
                display: block !important;
            }
    
            .d-md-none {
                display: none !important;
            }
        }
    
        @media (max-width: 768px) {
            .get_btn {
                bottom: 20px;
                right: 20px;
            }
    
            .rotate-box-cta {
                width: 90px !important;
                height: 90px !important;
            }
    
            .center-image-cta {
                width: 90px !important;
                height: 90px !important;
            }
    
            .rotating-text-cta {
                font-size: 10px;
            }
    
            .modal_right {
                padding: 30px 20px;
            }
    
            .col-md-5 {
                display: none !important;
            }
    
            .col-lg-7 {
                flex: 0 0 100%;
                max-width: 100%;
            }
    
            .modal-dialog {
                width: 95%;
                margin: 10px auto;
            }
    
            .d-block {
                display: block !important;
            }
    
            .d-md-block {
                display: block !important;
            }
        }
    
    
        .rotate-box-cta {
            width: 120px;
            height: 120px;
            position: relative;
        }
    
        .rotating-text-cta {
            position: absolute;
            width: 100%;
            height: 100%;
            animation: rotate 20s linear infinite;
        }
    
        .center-image-cta {
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            width: 128px;
            height: 128px;
            border-radius: 50%;
            overflow: hidden;
            z-index: -1;
        }


/* ===== MODAL 2 FIX: z-index, isolation, pointer-events ===== */
#exampleModal2 {
    position: fixed;
    inset: 0;
    width: 100vw;
    height: 100vh;

    /* Put it above any rogue elements */
    z-index: 2147483647;
    background-color: rgba(0, 0, 0, 0.7);

    /* animation state */
    display: none;
    opacity: 0;
    transition: opacity 0.3s ease;

    /* new stacking context so children sit above all */
    isolation: isolate;

    /* center dialog when shown (we toggle display via .show) */
    align-items: center;
    justify-content: center;
}

#exampleModal2.show {
    display: flex !important;
    opacity: 1;
}

#exampleModal2 .modal-dialog {
    position: relative;
    width: 90%;
    max-width: 900px;
    margin: 20px auto;
    transform: scale(0.8);
    transition: transform 0.3s ease;

    /* prevent overlay clicks from passing through here */
    pointer-events: none;
}

#exampleModal2.show .modal-dialog {
    transform: scale(1);
}

#exampleModal2 .modal-content {
    position: relative;
    background-color: #fff;
    border-radius: 12px;
    overflow: hidden;
    box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);

    /* allow clicks only inside content */
    pointer-events: auto;
}

/* Close button always above content within the modal context */
#exampleModal2 .popup-close {
    position: absolute;
    top: 40px;
    right: 15px;
    z-index: 1;
    background: rgba(255, 255, 255, 0.9);
    border: none;
    border-radius: 50%;
    width: 40px;
    height: 40px;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: all 0.3s ease;
    padding: 0;
}

#exampleModal2 .popup-close:hover {
    background: #fff;
    transform: rotate(90deg);
}

    
        @keyframes rotate {
            0% {
                transform: rotate(0deg);
            }
    
            100% {
                transform: rotate(360deg);
            }
        }
    
        /* .center-image-cta img {
        width: 100%;
        height: 100%;
        object-fit: cover;
    } */
    
        @media (max-width: 768px) {
            .center-image-owl {
                position: absolute;
                top: 50%;
                left: 50%;
                transform: translate(-50%, -50%);
                width: 92px;
                height: 92px;
                border-radius: 50%;
                overflow: hidden;
                z-index: -1;
            }
        }

         
        @media (min-width: 768px) {
            .footer-bmargin {
            padding-bottom: 164px;
        }
        }
    </style>

    @yield('pageStyle')
    <!-- Google tag (gtag.js) -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-ZW3RNPZJRF"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'G-ZW3RNPZJRF');
</script>
<!-- Meta Pixel Code -->
<script>
!function(f,b,e,v,n,t,s)
{if(f.fbq)return;n=f.fbq=function(){n.callMethod?
n.callMethod.apply(n,arguments):n.queue.push(arguments)};
if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
n.queue=[];t=b.createElement(e);t.async=!0;
t.src=v;s=b.getElementsByTagName(e)[0];
s.parentNode.insertBefore(t,s)}(window, document,'script',
'https://connect.facebook.net/en_US/fbevents.js');
fbq('init', '1087920029882598');
fbq('track', 'PageView');
</script>
<noscript><img height="1" width="1" style="display:none"
src="https://www.facebook.com/tr?id=1087920029882598&ev=PageView&noscript=1"
/></noscript>
<!-- End Meta Pixel Code -->

<!-- Google Tag Manager -->
<script>(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-PMJLD8W8');</script>
<!-- End Google Tag Manager -->

<!-- Google Tag Manager -->
<script>(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-MVNGGJ9T');</script>
<!-- End Google Tag Manager -->

<!-- Google tag (gtag.js) -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-R5YPH0JRCB"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'G-R5YPH0JRCB');
</script>

</head>

<body>
    <!-- Google Tag Manager (noscript) -->
<noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-MVNGGJ9T"
height="0" width="0" style="display:none;visibility:hidden"></iframe></noscript>
<!-- End Google Tag Manager (noscript) -->

<!-- Google Tag Manager (noscript) -->
<noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-PMJLD8W8"
height="0" width="0" style="display:none;visibility:hidden"></iframe></noscript>
<!-- End Google Tag Manager (noscript) -->
    <main class="relative transition-all duration-300 cursor-default"><!--[--><!---->
        <main><!--[-->
            {{-- <section id="loading-screen"
                        class="fixed inset-0 flex justify-center items-center bg-white z-[100]"><img
                            src="{{ asset('assets/images/nava-white-logo.svg') }}" alt="Nava Resorts Logo"
                    class="w-[200px] inline-block animate-fadeIn"></section> --}}
            <div class="fixed top-0 z-30 w-full transition-all duration-500">
                <!-- <header id="heaber-2xl" -->
                <header id="mainHeader"
                    class="relative hidden sm:hidden md:hidden lg:hidden xl:!flex 2xl:!flex w-full justify-between transition-all duration-300 h-[120px] px-[50px] items-top z-[100]">
                    <div>
                        <a data-sveltekit-reload="" href="https://navaresorts.in/">
                            <!-- <img src="{{ asset('assets/images/nava-white-logo.svg') }}" alt="Nava Resorts Logo" class="filter transition-all duration-300 w-[160px] pt-[20px] invert brightness-0"> -->
                            <img src="{{ asset('assets/images/nava-cris.png') }}" alt="Nava Resorts Logo" class="transition-all duration-300 w-[160px] pt-[10px] pb-[10px]">
                        </a>
                    </div>
                    <div class="h-full ">
                        <ul
                            class="uppercase items-center gap-[15px] py-[40px] text-white lg:text-[.5rem] xl:text-[.8rem] hidden sm:flex text-white py-[40px]">
                            <li><a data-sveltekit-reload="" href="https://navaresorts.in/"
                                    class="relative after:content-[''] after:absolute after:block after:left-0 after:-top-[6px] after:h-[2px] after:bg-white after:w-0 after:transition-all after:!duration-300 after:!ease-in-out hover:after:w-[30px] after:bg-white">Home</a>
                            </li>
                            <li><a data-sveltekit-reload="" href="{{route('about-us')}}"
                                    class="relative after:content-[''] after:absolute after:block after:left-0 after:-top-[6px] after:h-[2px] after:bg-white after:w-0 after:transition-all after:!duration-300 after:!ease-in-out hover:after:w-[30px] after:bg-white">About
                                    Us</a></li>



                            <li><a data-sveltekit-reload="" href="https://navaresorts.in/#events"
                                    class="relative after:content-[''] after:absolute after:block after:left-0 after:-top-[6px] after:h-[2px] after:bg-white after:w-0 after:transition-all after:!duration-300 after:!ease-in-out hover:after:w-[30px] after:bg-white">Our Offering</a>
                            </li>
                            <li><a data-sveltekit-reload="" href="{{ route('accommodations') }}"
                                    class="relative after:content-[''] after:absolute after:block after:left-0 after:-top-[6px] after:h-[2px] after:bg-white after:w-0 after:transition-all after:!duration-300 after:!ease-in-out hover:after:w-[30px] after:bg-white">Accommodations</a>
                            </li>
                            <li><a data-sveltekit-reload="" href="{{ route('gallery') }}"
                                    class="relative after:content-[''] after:absolute after:block after:left-0 after:-top-[6px] after:h-[2px] after:bg-white after:w-0 after:transition-all after:!duration-300 after:!ease-in-out hover:after:w-[30px] after:bg-white">Gallery</a>
                            </li>



                        </ul> <a data-sveltekit-reload="" href="#" target="_blank"
                            class=" items-center bg-primary text-white font-primary uppercase text-[.8rem] h-full px-[20px] ml-[15px] transition-all duration-300 hover:bg-secondary hidden">Book
                            Now</a>
                    </div>
                </header><!---->
                <header
                    class="relative hidden sm:flex md:flex lg:flex xl:hidden 2xl:hidden items-center left-0 w-full justify-between h-[8vh] md:h-[8vh] lg:h-[10vh] pl-[20px] pr-[20px] sm:pl-[20px] py-[20px] transition-all !duration-300 sm:pr-[20px] sm:py-[20px]">
                    <div><a data-sveltekit-reload="" href="https://navaresorts.in/">

                            <img src="{{ asset('assets/images/nava-white-logo.svg') }}" alt="Nava Resorts Logo"
                                class="" width="80" height="52">

                        </a></div>
                    <div class="font-primary font-light flex items-center h-full text-white">

                        <button id="menuOpenBtn"
                            class="focus:ring-0 uppercase flex justify-center flex-col items-end gap-[2px] text-[.8rem] h-[35px] group transition-all duration-300 text-white"
                            type="button">
                            Menu
                            <span
                                class="line !block h-[1px] w-full mb-[3px] group-hover:w-[70%] transition-all duration-300 bg-white"></span>
                            <span class="line !block h-[1px] w-full mb-[3px] bg-white"></span>
                            <span class="line !block h-[1px] w-[50%] bg-white"></span>
                        </button>
                        <a href="#" target="_blank"
                            class="uppercase text-white ml-[10px] text-[.7rem] h-full px-5 md:flex items-center justify-center border-[1px] transition-all !duration-300 hover:bg-secondary hover:border-secondary bg-transparent border-white">Book
                            Now</a>
                    </div>
                </header><!---->
                <header id="mobile-header"
                    class="relative flex sm:hidden items-center left-0 w-full h-[8vh] md:h-[8vh] lg:h-[10vh] pl-[20px] pr-[20px] sm:pl-[20px] sm:pr-[20px] py-[20px] sm:py-[20px] transition-all !duration-300 justify-center" >
                    <a data-sveltekit-reload="" href="https://navaresorts.in/">
                        <picture>
                            <img src="{{ asset('assets/images/nava-white-logo.svg') }}" alt="Nava Resorts Logo"
                                class="brandMobile w-[95px] brand filter mb-1 invert brightness-0" width="130"
                                height="85">
                        </picture>
                    </a>
                    <button 
                    class="mr-3 absolute right-0 top-0 bottom-0 focus:ring-0 uppercase flex justify-center flex-col items-end gap-[2px] text-[.8rem] h-[35px] group transition-all duration-300 text-white menuOpenBtn " style="margin-top: 10px"
                    type="button">
                    Menu
                    <span
                        class="line !block h-[1px] w-full mb-[3px] group-hover:w-[70%] transition-all duration-300 bg-white"></span>
                    <span class="line !block h-[1px] w-full mb-[3px] bg-white"></span>
                    <span class="line !block h-[1px] w-[50%] bg-white"></span>
                </button>


                </header><!---->
            </div>


            <!-- Overlay -->
            <div  id="drawer-overlay" class="pointer-events-none fixed inset-0 bg-black bg-opacity-50 transition-opacity opacity-0"></div>

            <!-- Drawer -->
            <aside  id="drawer-mobile" style="padding-left: 16px;" class="fixed top-0 left-0 w-64 bg-white h-full transform -translate-x-full transition-transform z-[100]">

                <div class="px-4 pt-5 pb-3 flex justify-end " style="padding-right: 16px;">
                    <button id="drawer-close" class="text-slate-500 hover:text-slate-800 text-2xl leading-none"
                        aria-label="Close menu" style="font-size: 25px;">×</button>
                </div>

                <div class="border-t border-slate-200"></div>

                <nav class="flex-1 overflow-y-auto  py-4">
                    <a href="{{ url('/') }}"
                        class="block py-2.5 text-[13px] tracking-wide text-slate-700 hover:text-slate-900">Home</a>
                    <a href="{{route('about-us')}}"
                        class="block py-2.5 text-[13px] tracking-wide text-slate-700 hover:text-slate-900">About Us</a>
                        <a href="https://navaresorts.in/#events"
                        class="block py-2.5 text-[13px] tracking-wide text-slate-700 hover:text-slate-900">Our Offering</a>
                        <a href="{{ route('accommodations') }}"
                        class="block py-2.5 text-[13px] tracking-wide text-slate-700 hover:text-slate-900">Accommodations</a>
                        <a href="{{ route('gallery') }}"
                        class="block py-2.5 text-[13px] tracking-wide text-slate-700 hover:text-slate-900">Gallery</a>
                </nav>
              <p
                                        class="block py-2.5 text-[13px] tracking-wide text-slate-700 hover:text-slate-900">
                                        Call</p>
                                         <a href="tel:7026266622" onclick="trackEvent('call_click', 'footer_call_button')" class="text-secondary font-primary font-light lg:text-[1rem] xl:text-[1.2rem] sm:text-left block">+91
                                        7026266622</a>
            </aside>

    @yield('content')
    <!-- Content -->


    
            <footer class=" sm:mb-[unset]">
                <div class="bg-primary py-[3rem] footer-bmargin">

                    <div class="container mx-auto">
                        <img class="h-[200]" src="" alt="">


                        <!-- lightweight error + toast containers (invisible until needed) -->
                        <div id="form-errors" style="display:none" class="mt-2 text-red-300 text-sm"></div>
                        <div id="toast" aria-live="polite" aria-atomic="true"></div>
                        <div class="flex sm:flex-row flex-col gap-10 sm:gap-16 justify-between">
                            <div class="sm:w-[240px]">
                                <picture>
                                    <a href="https://navaresorts.in/">
                                        <!-- <img src="{{ asset('assets/images/nava-white-logo.svg') }}" alt="" class=" mx-auto block sm:w-full filter transition-all duration-300 invert brightness-0 "> -->
                                        <img src="{{ asset('assets/images/nava-cris.png') }}" alt="" class=" mx-auto block sm:w-full  transition-all duration-300">
                                    </a>
                                </picture>
                            </div>
                            <div class="sm:w-[25%]">
                                <p class="font-primary text-white font-light text-[1.5rem] mb-[20px] text-center sm:text-left">Follow Us </p>
                                <ul class="flex items-center flex-wrap gap-5 lg:gap-3 xl:gap-3 justify-center sm:justify-start">
                                    <li><a href="https://www.facebook.com/profile.php?id=61584284908885" target="_blank" aria-label="Facebook"><svg
                                                class="fill-white hover:fill-secondary w-[20px] h-[20px] lg:w-[20px] lg:h-[20px] xl:w-[25px] xl:h-[25px]"
                                                viewBox="0 0 20 20">
                                                <path
                                                    d="M11,10h2.6l0.4-3H11V5.3c0-0.9,0.2-1.5,1.5-1.5H14V1.1c-0.3,0-1-0.1-2.1-0.1C9.6,1,8,2.4,8,5v2H5.5v3H8v8h3V10z">
                                                </path>
                                            </svg></a></li>
                                    <li><a href="https://www.instagram.com/__whitemist__/" target="_blank"
                                            aria-label="Instagram"><svg
                                                class="fill-white hover:fill-secondary w-[20px] h-[20px] lg:w-[20px] lg:h-[20px] xl:w-[25px] xl:h-[25px]"
                                                viewBox="0 0 20 20">
                                                <path
                                                    d="M13.55,1H6.46C3.45,1,1,3.44,1,6.44v7.12c0,3,2.45,5.44,5.46,5.44h7.08c3.02,0,5.46-2.44,5.46-5.44V6.44 C19.01,3.44,16.56,1,13.55,1z M17.5,14c0,1.93-1.57,3.5-3.5,3.5H6c-1.93,0-3.5-1.57-3.5-3.5V6c0-1.93,1.57-3.5,3.5-3.5h8 c1.93,0,3.5,1.57,3.5,3.5V14z">
                                                </path>
                                                <circle cx="14.87" cy="5.26" r="1.09"></circle>
                                                <path
                                                    d="M10.03,5.45c-2.55,0-4.63,2.06-4.63,4.6c0,2.55,2.07,4.61,4.63,4.61c2.56,0,4.63-2.061,4.63-4.61 C14.65,7.51,12.58,5.45,10.03,5.45L10.03,5.45L10.03,5.45z M10.08,13c-1.66,0-3-1.34-3-2.99c0-1.65,1.34-2.99,3-2.99s3,1.34,3,2.99 C13.08,11.66,11.74,13,10.08,13L10.08,13L10.08,13z">
                                                </path>
                                            </svg></a></li>
                                    <li><a href="#" target="_blank" aria-label="Twitter"><svg
                                                class="fill-white hover:fill-secondary w-[20px] h-[20px] lg:w-[20px] lg:h-[20px] xl:w-[25px] xl:h-[25px]"
                                                viewBox="0 0 20 20">
                                                <path
                                                    d="m15.08,2.1h2.68l-5.89,6.71,6.88,9.1h-5.4l-4.23-5.53-4.84,5.53H1.59l6.24-7.18L1.24,2.1h5.54l3.82,5.05,4.48-5.05Zm-.94,14.23h1.48L6,3.61h-1.6l9.73,12.71h0Z">
                                                </path>
                                            </svg></a></li>

                                </ul>
                            </div>
                            <div class="sm:w-[25%] flex flex-col sm:flex-row sm:gap-[30px]">
                                <div class="flex flex-col justify-between">
                                    <ul class="font-primary font-light">
                                        <li class="mb-2 text-center sm:text-left"><a href="{{ route('about-us') }}"
                                                target="_blank"
                                                class="text-white text-[.9rem] lg:text-[.8rem] xl:text-[.9rem] inline-block leading-[140%] transition-all duration-300 hover:text-secondary">About</a>
                                        </li>
                                        <li class="mb-2 text-center sm:text-left"><a data-sveltekit-reload=""
                                                href="https://navaresorts.in/terms-and-conditions"
                                                class="text-white text-[.9rem] lg:text-[.8rem] xl:text-[.9rem] inline-block leading-[140%] transition-all duration-300 hover:text-secondary">Term
                                                of Use</a></li>
                                        <li class="mb-2 text-center sm:text-left"><a data-sveltekit-reload=""
                                                href="https://navaresorts.in/privacy-policy"
                                                class="text-white text-[.9rem] lg:text-[.8rem] xl:text-[.9rem] inline-block leading-[140%] transition-all duration-300 hover:text-secondary">Privacy
                                                Policy</a></li>

                                        {{-- <li class="mb-2 text-center sm:text-left"><a
                                                        href="#"
                                                        target="_blank"
                                                        class="text-white text-[.9rem] lg:text-[.8rem] xl:text-[.9rem] inline-block leading-[140%] transition-all duration-300 hover:text-secondary">IHG
                                                        Global Brands</a></li> --}}
                                        {{-- <li class="mb-2 text-center sm:text-left"><a href="#" target="_blank"
                                                class="text-white text-[.9rem] lg:text-[.8rem] xl:text-[.9rem] inline-block leading-[140%] transition-all duration-300 hover:text-secondary">Explore
                                                Hotels</a></li> --}}
                                        {{-- <li class="mb-2 text-center sm:text-left"><a data-sveltekit-reload=""
                                                href="#"
                                                class="text-white text-[.9rem] lg:text-[.8rem] xl:text-[.9rem] inline-block leading-[140%] transition-all duration-300 hover:text-secondary">Site
                                                Map</a></li> --}}
                                    </ul>

                                </div>
                                {{-- <div class="flex flex-col justify-between">
                                    <ul class="font-primary font-light">
                                     er sm:text-left"><a data-sveltekit-reload=""
                                                href="#"
                                                class="text-white text-[.9rem] lg:text-[.8rem] xl:text-[.9rem] inline-block leading-[140%] transition-all duration-300 hover:text-secondary">Privacy
                                                Statement</a></li>
                                        <li class="mb-2 text-center sm:text-left"><a data-sveltekit-reload=""
                                                href="#"
                                                class="text-white text-[.9rem] lg:text-[.8rem] xl:text-[.9rem] inline-block leading-[140%] transition-all duration-300 hover:text-secondary">Privacy
                                                Policy</a></li>
                                        <li class="mb-2 text-center sm:text-left"><a data-sveltekit-reload=""
                                                href="#"
                                                class="text-white text-[.9rem] lg:text-[.8rem] xl:text-[.9rem] inline-block leading-[140%] transition-all duration-300 hover:text-secondary">Cookie
                                                Usage</a></li>
                                    </ul>
                                    <picture>
                                                <source
                                                    srcset="{{ asset('assets/_app/immutable/assets/ihg-business-rewards.GCCUgpuq.avif') }} 200w"
                                            type="image/avif">
                                            <source
                                                srcset="{{ asset('assets/_app/immutable/assets/ihg-business-rewards.DYYvda1M.webp') }} 200w"
                                                type="image/webp"><img
                                                src="{{ asset('assets/_app/immutable/assets/ihg-business-rewards.BjR0WZW9.png') }}"
                                                alt="" class="w-full mt-8 hidden sm:block" width="200" height="40">
                                            </picture>
                                </div> --}}
                            </div>

                          
                                <div>
                                    <p
                                        class="font-primary text-white lg:text-[.8rem] xl:text-[.9rem] uppercase text-center sm:text-left">
                                        Call Us</p><a href="tel:7026266622" onclick="trackEvent('call_click', 'footer_call_button')"
                                        class="text-white font-primary font-light text-[18px] lg:text-[18px] xl:text-[24px] text-center sm:text-left block hover:text-secondary transition-all duration-300">7026266622</a>
                                </div>
                            
                        </div>
                    </div>
                </div>



                <!-- <div class="bg-[#fafafa] py-[2rem]">
                            <div class="container">
                                <p
                                    class="font-primary text-center text-[.7rem] lg:text-[.8rem] xl:text-[.9rem] font-light">
                                    Â© 2025 . All rights reserved. This hotel is owned
                                    by PT. Bali Perkasasukses and managed by <a href="https://navaresortss.in//"
                                        target="_blank"
                                        class="text-primary transition-all duration-300 hover:text-secondary">InterContinental
                                        Hotels Group.</a></p>
                            </div>
                        </div> -->
            </footer><!----><!----><!---->
        </main><!----><!--]--><!---->
    </main>


    <div><!--[--><!--[--><!---->
        <div>
            <!-- Modal -->

            <script src="https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.js"></script>

            <script src="{{ asset('assets/script.js') }}"></script>


            <script>
                var swiper = new Swiper(".mySwiperHomeActivities", {
                    navigation: {
                        nextEl: ".swiper-button-next",
                        prevEl: ".swiper-button-prev",
                    },
                });


                var swiper = new Swiper(".mySwiperHomeRoomMobile", {
                    navigation: {
                        nextEl: ".swiper-button-next",
                        prevEl: ".swiper-button-prev",
                    },
                });

                var swiper = new Swiper(".mySwiperHomeOffersMobile", {
                    navigation: {
                        nextEl: ".swiper-button-next",
                        prevEl: ".swiper-button-prev",
                    },
                });


                var swiper = new Swiper(".mySwiperHomeOffers", {
                    navigation: {
                        nextEl: ".swiper-button-next",
                        prevEl: ".swiper-button-prev",
                    },
                });
            </script>
        </div><!----><!--]--> <!--[!--><!--]--><!--]-->

    </div>

    <!-- Rotating Button -->
    <a class="get_btn" href="javascript:void(0);" id="openModalBtn" data-open-modal="#exampleModal"  onclick="trackEvent('form_open', 'booking_modal_button')">
        <div class="rotate-box-cta">
            <div class="rotating-text-cta">
                <svg viewBox="0 0 100 100">
                    <defs>
                        <path id="textCircle" d="M 50,50 m -37,0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0"
                            fill="none"></path>
                    </defs>
                    <text>
                        <textPath href="#textCircle" fill="#404935" font-size="8" textLength="225"
                            style="font-weight: 900;"> - BOOk YOUR STAY - BOOk YOUR STAY </textPath>
                    </text>
                </svg>
            </div>
            <div class="center-image-cta">
                <img decoding="async" src="{{ asset('assets/images/nava-white-logo.svg') }}" alt="Get consultation">
            </div>
        </div>
    </a>

    <!-- ===== MODAL (UNCHANGED STRUCTURE, minor a11y tweak) ===== -->
    <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true"
        role="dialog" aria-modal="true">
        <div class="modal-dialog">
            <div class="modal-content">

                <button type="button" class="popup-close" data-close-modal aria-label="Close">
                    <img class="d-none d-md-none d-lg-block"
                        src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='%23333'%3E%3Cpath d='M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z'/%3E%3C/svg%3E"
                        alt="Close">
                    <img class="d-block d-md-block d-lg-none"
                        src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='%23333'%3E%3Cpath d='M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z'/%3E%3C/svg%3E"
                        alt="Close">
                </button>

                <div class="modal-body">
                    <div class="row">
                        <div class="col-md-5 d-flex align-items-center d-none d-md-none d-lg-block">
                            <div class="modal_left">
                                <!-- <img src="https://images.unsplash.com/photo-1566073771259-6a8506099945?w=400&h=600&fit=crop"
                                    alt="Resort Image"> -->
                            </div>
                        </div>

                        <div class="col-md-12 col-lg-7">
                            <div class="modal_right">
                                <div class="modal_box">
                                    <h3 id="exampleModalLabel">Share your details, and we’ll get in touch to plan your perfect stay</h3>

                                    {{-- error + toast hosts --}}
                                    <div id="form-errors" class="alert alert-danger" style="display:none"></div>
                                    <div id="toast" style="position:fixed;right:12px;bottom:12px;z-index:9999">
                                    </div>

                                    <form id="contact-form" action="{{ route('contact.store') }}">
                                        {{-- honeypot --}}
                                        <input type="text" id="website" name="website" autocomplete="off"
                                            style="position:absolute;left:-9999px;opacity:0;height:0;width:0;border:0;padding:0">

                                        <div class="form-group my-3">
                                            <input type="text" required class="form-control"
                                                placeholder="Full name *" name="name" id="name">
                                        </div>

                                        <div class="form-group my-3">
                                            <input type="email" class="form-control" placeholder="Email Address *"
                                                name="email" id="email" maxlength="255" required>
                                        </div>

                                        <div class="form-group my-3">
                                            <input type="tel" class="form-control" placeholder="Phone *"
                                                name="phone" id="phone" inputmode="numeric" pattern="[0-9]*"
                                                minlength="7" maxlength="15" required>
                                        </div>

                                        <div class="form-group my-3">
                                            <select class="form-control" name="service" id="service">
                                                <option value="">Select a Service</option>
                                                <option value="Leisure">Leisure</option>
                                                <option value="Weddings & Occasions">Weddings & Occasions</option>
                                                <option value="⁠Corporate Gatherings">⁠Corporate Gatherings</option>
                                            </select>
                                        </div>

                                        <div class="form-group my-3">
                                            <input type="text" class="form-control" placeholder="Message"
                                                name="message" id="message">
                                        </div>

                                        {{-- DYNAMIC CAPTCHA QUESTION from controller --}}
                                        <div class="form-group my-3">
                                            <!-- <label class="mb-1 d-block">CAPTCHA *</label> -->
                                            <div class="input-group">
                                                <!-- <span class="input-group-text">{{ $captchaQuestion ?? 'What is ?' }}</span> -->
                                                <input type="text" required class="form-control"
                                                    name="captcha_answer" id="captcha_answer" inputmode="numeric"
                                                    pattern="[0-9]*"
                                                    placeholder="{{ $captchaQuestion ?? 'What is ?' }}">
                                            </div>
                                            <small class="text-muted">Prove you’re human by answering.</small>
                                        </div>

                                        <div class="form-group my-3">
                                            <button type="submit" class="btn btn-primary" id="submitBtn">
                                                Get consultation
                                            </button>
                                        </div>
                                    </form>

                                </div>
                            </div>
                        </div>
                    </div>
                </div><!-- /.modal-body -->
                

            </div>
        </div>
    </div>

    <div class="modal fade" id="exampleModal2" tabindex="-1" aria-labelledby="exampleModalLabel2" aria-hidden="true"
        role="dialog" aria-modal="true">
        <div class="modal-dialog">
            <div class="modal-content">

                <button type="button" class="popup-close" data-close-modal aria-label="Close">
                    <img class="d-none d-md-none d-lg-block"
                        src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='%23333'%3E%3Cpath d='M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z'/%3E%3C/svg%3E"
                        alt="Close">
                    <img class="d-block d-md-block d-lg-none"
                        src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='%23333'%3E%3Cpath d='M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z'/%3E%3C/svg%3E"
                        alt="Close">
                </button>

                <div class="modal-body">
                    <div class="row">
                        <div class="col-md-5 d-flex align-items-center d-none d-md-none d-lg-block">
                            <div class="modal_left">
                                
                        
                                    <div>
                                        <!-- <h2 class="text-white">Whatsapp Us: 7026266622</h2> -->
                                        <h2 class="text-white underline">IVR No:  7026266622</h2>
                                    </div>
                            </div>

                        </div>

                        <div class="col-md-12 col-lg-7">
                            <div class="modal_right">
                                <div class="modal_box">
                                    <h3 id="exampleModalLabel2">Why should you celebrate with us?</h3>
                                    <p>At NAVA, every wedding is a reflection of your unique bondCelebrate your love story where the ocean meets the sky. At NAVA, every wedding is a reflection of your unique bond</p>
                             
                                    <div id="form-errors" class="alert alert-danger" style="display:none"></div>
                                    <div id="toast" style="position:fixed;right:12px;bottom:12px;z-index:9999">
                                    </div>

                                    <form id="contact-form" action="{{ route('contact.store') }}">
                                        <input type="text" id="website" name="website" autocomplete="off"
                                            style="position:absolute;left:-9999px;opacity:0;height:0;width:0;border:0;padding:0">

                                        <div class="form-group my-3">
                                            <input type="text" required class="form-control"
                                                placeholder="Full name *" name="name" id="name">
                                        </div>

                                        <div class="form-group my-3">
                                            <input type="email" class="form-control" placeholder="Email Address *"
                                                name="email" id="email" maxlength="255" required>
                                        </div>

                                        <div class="form-group my-3">
                                            <input type="tel" class="form-control" placeholder="Phone *"
                                                name="phone" id="phone" inputmode="numeric" pattern="[0-9]*"
                                                minlength="7" maxlength="15" required>
                                        </div>

                                        <div class="form-group my-3">
                                            <select class="form-control" name="service" id="service">
                                                <option value="">Select a Service</option>
                                                <option value="Leisure">Leisure</option>
                                                <option value="Weddings & Occasions">Weddings & Occasions</option>
                                                <option value="⁠Corporate Gatherings">⁠Corporate Gatherings</option>
                                            </select>
                                        </div>

                                        <div class="form-group my-3">
                                            <input type="text" class="form-control" placeholder="Message"
                                                name="message" id="message">
                                        </div>

                                        <div class="form-group my-3">
                                            <div class="input-group">
                                                <input type="text" required class="form-control"
                                                    name="captcha_answer" id="captcha_answer" inputmode="numeric"
                                                    pattern="[0-9]*"
                                                    placeholder="{{ $captchaQuestion ?? 'What is ?' }}">
                                            </div>
                                            <small class="text-muted">Prove you're human by answering.</small>
                                        </div>

                                        <div class="form-group my-3">
                                            <button type="submit" class="btn btn-primary" id="submitBtn">
                                                Book Now
                                            </button>
                                        </div>
                                    </form>

                                </div>
                            </div>
                        </div>
                    </div>
                </div><!-- /.modal-body -->
                

            </div>
        </div>
    </div> 



    <!-- Loading Screen
  <section id="loading-screen" class="fixed inset-0 flex justify-center items-center bg-white z-[100]">
   <img src="/images/logo-is-color.svg" alt="Nava Resorts Logo" class="w-[150px] inline-block animate-fadeIn">
  </section> -->

    <!--  -->
    <!--  -->
<script>
    // === Portal modals to <body> ===
    (function() {
        const modal1 = document.getElementById('exampleModal');
        const modal2 = document.getElementById('exampleModal2');
        
        if (modal1 && modal1.parentElement !== document.body) {
            document.body.appendChild(modal1);
        }
        if (modal2 && modal2.parentElement !== document.body) {
            document.body.appendChild(modal2);
        }
    })();

    let activeModal = null;

    function openModal(modalEl, serviceValue = null) {
        if (!modalEl) return;
        activeModal = modalEl;
        modalEl.classList.add('show');
        modalEl.setAttribute('aria-hidden', 'false');
        document.body.style.overflow = 'hidden';

        // Pre-select service if provided
        if (serviceValue) {
            const serviceSelect = modalEl.querySelector('#service');
            if (serviceSelect) {
                serviceSelect.value = serviceValue;
                serviceSelect.style.borderColor = '#8A4B3B';
                setTimeout(() => {
                    serviceSelect.style.borderColor = '';
                }, 1500);
            }
        }
    }

    function closeModal(modalEl = activeModal) {
        if (!modalEl) return;
        modalEl.classList.remove('show');
        modalEl.setAttribute('aria-hidden', 'true');
        document.body.style.overflow = '';
        activeModal = null;

        // Reset form when closing
        const form = modalEl.querySelector('#contact-form');
        if (form) {
            form.reset();
        }
    }

    // OPEN (delegated)
    document.addEventListener('click', function(e) {
        const openTrigger = e.target.closest('[data-open-modal]');
        if (openTrigger) {
            e.preventDefault();
            const selector = openTrigger.getAttribute('data-open-modal');
            const serviceValue = openTrigger.getAttribute('data-service');
            const m = document.querySelector(selector);
            openModal(m, serviceValue);
            return;
        }

        // CLOSE (delegated)
        const isClose = e.target.closest('[data-close-modal]');
        if (isClose) {
            e.preventDefault();
            const owningModal = isClose.closest('.modal') || activeModal;
            closeModal(owningModal);
            return;
        }

        // Backdrop click
        if (activeModal && e.target === activeModal) closeModal();
    });

    // ESC key
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && activeModal) closeModal();
    });

    // Phone sanitize (delegated)
    document.addEventListener('input', function(e) {
        const phone = e.target.closest('[data-phone]');
        if (phone) phone.value = phone.value.replace(/\D/g, '').slice(0, 10);
    });
</script>



    <script>
/* ---- Video Controls & Mode Switch (Video <-> Slider) ---- */
function setupVideoAndModes() {
  const heroVideoWrap = $("#heroVideo");
  const videoEl = $("#video");
  const slideWrap = $("#heroSlide"); // image/slider container
  const btnPlaySlide = $(".playSlide"); // e.g., "View Images"
  const btnPlayVideo = $(".playVideo"); // e.g., "View Theme"
  const btnPausePlay = $(".isPause");
  const btnMute = $(".isMuted");

  // No autoplay – keep muted & paused until user clicks
  if (videoEl) {
    videoEl.muted = true;
    videoEl.setAttribute("playsinline", "");
    videoEl.loop = true;
  }

  function showVideo() {
    // show video, hide slider
    heroVideoWrap?.classList.remove("hidden");
    slideWrap?.classList.add("hidden");

    // optional button toggles
    btnPlayVideo?.classList.add("hidden");
    btnPlaySlide?.classList.remove("hidden");

    videoEl?.play().catch(() => {});
  }

  function showSlider() {
    // show slider/image, hide video
    slideWrap?.classList.remove("hidden");
    heroVideoWrap?.classList.add("hidden");

    // optional button toggles
    btnPlaySlide?.classList.add("hidden");
    btnPlayVideo?.classList.remove("hidden");

    if (videoEl && !videoEl.paused) videoEl.pause();
  }

  // Buttons
  btnPlaySlide?.addEventListener("click", showSlider);
  btnPlayVideo?.addEventListener("click", showVideo);

  // Pause/Play toggle (when video visible)
  btnPausePlay?.addEventListener("click", () => {
    if (!videoEl) return;
    if (videoEl.paused) {
      videoEl.play().catch(() => {});
      btnPausePlay.setAttribute("aria-label", "Pause Video");
    } else {
      videoEl.pause();
      btnPausePlay.setAttribute("aria-label", "Play Video");
    }
  });

  // Mute toggle
  btnMute?.addEventListener("click", () => {
    if (!videoEl) return;
    videoEl.muted = !videoEl.muted;
    btnMute.setAttribute("aria-label", videoEl.muted ? "Unmute Video" : "Mute Video");
  });

  return { showVideo, showSlider };
}

/* ---- Boot ---- */
document.addEventListener("DOMContentLoaded", () => {
  const videoAndModes = setupVideoAndModes();
  const swiper = setupSwiperHero();
  const dateApi = setupDateRange();
  const countApi = setupCounters();
  setupBooking(dateApi, countApi);
  setupHeightSync();

  // ✅ Start with IMAGE/SLIDER (video hidden & paused)
  videoAndModes?.showSlider?.();

  // ❌ Remove old autoplay attempt/fallback:
  // const video = $("#video");
  // if (video) {
  //   video.play().catch(() => {
  //     videoAndModes?.showSlider?.();
  //   });
  // }
});

    <script>
        (function() {
            const form = document.getElementById('contact-form'); // <-- correct form id
            const toastHost = document.getElementById('toast');
            const errorsBox = document.getElementById('form-errors');
            const csrf = document.querySelector('meta[name="csrf-token"]')?.getAttribute('content') || '';

            function showToast(message, type = 'success', timeout = 4000) {
                const el = document.createElement('div');
                el.className = `toast-item ${type}`;
                el.textContent = message;
                toastHost.appendChild(el);
                const timer = setTimeout(() => {
                    el.style.transition = 'opacity .2s ease, transform .2s ease';
                    el.style.opacity = '0';
                    el.style.transform = 'translateY(6px)';
                    setTimeout(() => el.remove(), 220);
                }, timeout);
                // allow manual dismiss
                el.addEventListener('click', () => {
                    clearTimeout(timer);
                    el.remove();
                });
            }

            function setBusy(busy) {
                const btn = form.querySelector('button[type="submit"]');
                if (!btn) return;
                btn.disabled = busy;
                btn.textContent = busy ? 'Sending…' : 'Send Message';
            }

            form.addEventListener('submit', async (e) => {
                e.preventDefault();
                errorsBox.style.display = 'none';
                errorsBox.textContent = '';

                const name = document.getElementById('name')?.value?.trim() || '';
                const email = document.getElementById('email')?.value?.trim() || '';
                const phone = document.getElementById('phone')?.value?.trim() || '';
                const captcha_answer = document.getElementById('captcha_answer')?.value?.trim();

                const payload = {
                    name, // maps to Laravel 'name'
                    phone, // maps to 'phone'
                    email, // maps to 'email'
                    location: null, // optional
                    captcha_answer, // REQUIRED by your validator
                    url: window.location.href, // optional (server overrides anyway)
                    reason: null, // optional
                };

                // quick front-end checks (optional)
                if (!payload.name || !email || !phone || !captcha_answer) {
                    errorsBox.textContent = 'Please fill in name, email, phone, and captcha.';
                    errorsBox.style.display = 'block';
                    showToast('Please complete required fields.', 'error');
                    return;
                }

                setBusy(true);

                try {
                    const res = await fetch('{{ url('/contact') }}', { // adjust to your route
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json',
                            'Accept': 'application/json',
                            'X-CSRF-TOKEN': csrf
                        },
                        body: JSON.stringify(payload),
                        credentials: 'same-origin'
                    });

                    const data = await res.json().catch(() => ({}));

                    if (!res.ok) {
                        // Laravel validation 422
                        if (res.status === 422 && data?.errors) {
                            const firstField = Object.keys(data.errors)[0];
                            const firstMsg = data.errors[firstField][0];
                            errorsBox.textContent = firstMsg;
                            errorsBox.style.display = 'block';
                            showToast(firstMsg || 'Validation failed.', 'error');
                        } else {
                            showToast('Something went wrong. Please try again.', 'error');
                        }
                        return;
                    }

                    // Success
                    form.reset();
                    showToast(data?.message || 'Contact submitted successfully.');

                     window.location.href = "/thank-you"; 

                } catch (err) {
                    console.error(err);
                    showToast('Network error. Check your connection.', 'error');
                } finally {
                    setBusy(false);
                }
            });
        })();
    </script>
    <script>
        // === Portal modal to <body> to escape parent stacking contexts ===
        (function() {
            const modal = document.getElementById('exampleModal');
            if (modal && modal.parentElement !== document.body) {
                document.body.appendChild(modal);
            }
        })();

        let activeModal = null;

        function openModal(modalEl) {
            if (!modalEl) return;
            activeModal = modalEl;
            modalEl.classList.add('show');
            modalEl.setAttribute('aria-hidden', 'false');
            document.body.style.overflow = 'hidden';
        }

        function closeModal(modalEl = activeModal) {
            if (!modalEl) return;
            modalEl.classList.remove('show');
            modalEl.setAttribute('aria-hidden', 'true');
            document.body.style.overflow = '';
            activeModal = null;
        }

        // OPEN (delegated)
        document.addEventListener('click', function(e) {
            const openTrigger = e.target.closest('[data-open-modal]');
            if (openTrigger) {
                e.preventDefault();
                const selector = openTrigger.getAttribute('data-open-modal') || '#exampleModal';
                const m = document.querySelector(selector);
                openModal(m);
                return;
            }

            // CLOSE (delegated) — works even if button inside form or img inside button
            const isClose = e.target.closest('[data-close-modal]');
            if (isClose) {
                e.preventDefault();
                // try to find the owning modal; if not found (absolute header etc.), fallback to activeModal
                const owningModal = isClose.closest('.modal') || activeModal;
                closeModal(owningModal);
                return;
            }

            // Backdrop click
            if (activeModal && e.target === activeModal) closeModal();
        });

        // ESC key
        document.addEventListener('keydown', function(e) {
            if (e.key === 'Escape' && activeModal) closeModal();
        });

        // Phone sanitize (delegated)
        document.addEventListener('input', function(e) {
            const phone = e.target.closest('[data-phone]');
            if (phone) phone.value = phone.value.replace(/\D/g, '').slice(0, 10);
        });

        // Submit guard (delegated)
        document.addEventListener('submit', function(e) {
            const form = e.target.closest('[data-modal-form]');
            if (!form) return;
            const btn = form.querySelector('[data-submit]');
            if (!btn) return;
            btn.disabled = true;
            const prev = btn.textContent;
            btn.textContent = 'Submitting...';
            setTimeout(() => {
                btn.disabled = false;
                btn.textContent = prev || 'Get consultation';
            }, 3000);
        });
    </script>
    <script>
        (function() {
            const form = document.getElementById('contact-form');
            const toastHost = document.getElementById('toast');
            const errorsBox = document.getElementById('form-errors');
            const csrf = document.querySelector('meta[name="csrf-token"]')?.getAttribute('content') || '';
            const submitBtn = document.getElementById('submitBtn');

            function showToast(message, type = 'success', timeout = 4000) {
                const el = document.createElement('div');
                el.className = `toast-item ${type === 'error' ? 'error' : ''}`;
                el.style.cssText =
                    "background:#222;color:#fff;padding:10px 14px;border-radius:8px;margin-top:8px;box-shadow:0 6px 20px rgba(0,0,0,.2)";
                el.textContent = message;
                toastHost.appendChild(el);
                const timer = setTimeout(() => {
                    el.style.transition = 'opacity .2s ease, transform .2s ease';
                    el.style.opacity = '0';
                    el.style.transform = 'translateY(6px)';
                    setTimeout(() => el.remove(), 220);
                }, timeout);
                el.addEventListener('click', () => {
                    clearTimeout(timer);
                    el.remove();
                });
            }

            function setBusy(busy) {
                if (!submitBtn) return;
                submitBtn.disabled = busy;
                submitBtn.textContent = busy ? 'Sending…' : 'Get consultation';
            }

            if (!form) return;

            form.addEventListener('submit', async (e) => {
    e.preventDefault();
    errorsBox.style.display = 'none';
    errorsBox.textContent = '';

    const name = document.getElementById('name')?.value?.trim() || '';
    const email = document.getElementById('email')?.value?.trim() || '';
    const phone = document.getElementById('phone')?.value?.trim() || '';
    const captcha_answer = document.getElementById('captcha_answer')?.value?.trim();

    const payload = {
        name,
        phone,
        email,
        captcha_answer,
        url: window.location.href, // optional (server overrides anyway)
        reason: null, // optional
    };

    if (!payload.name || !email || !phone || !captcha_answer) {
        errorsBox.textContent = 'Please fill in name, email, phone, and captcha.';
        errorsBox.style.display = 'block';
        showToast('Please complete required fields.', 'error');
        return;
    }

    setBusy(true);

    try {
        const res = await fetch('{{ url('/contact') }}', { // adjust to your route
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
                'X-CSRF-TOKEN': csrf
            },
            body: JSON.stringify(payload),
            credentials: 'same-origin'
        });

        const data = await res.json().catch(() => ({}));

        if (!res.ok) {
            if (res.status === 422 && data?.errors) {
                const firstField = Object.keys(data.errors)[0];
                const firstMsg = data.errors[firstField][0];
                errorsBox.textContent = firstMsg;
                errorsBox.style.display = 'block';
                showToast(firstMsg || 'Validation failed.', 'error');
            } else {
                showToast('Something went wrong. Please try again.', 'error');
            }
            return;
        }

        // Success: Reset the form and show success message
        form.reset();
        showToast(data?.message || 'Contact submitted successfully.');

        // Redirect to the thank you page
        window.location.href = "/thank-you";  // Redirect to the thank you page

    } catch (err) {
        console.error(err);
        showToast('Network error. Check your connection.', 'error');
    } finally {
        setBusy(false);
    }
});

        })();




        
document.addEventListener('DOMContentLoaded', function() {
    const openBtns = document.querySelectorAll('#menuOpenBtn, .menuOpenBtn'); // support multiple IDs or class
    const drawer = document.getElementById('drawer-mobile');
    const overlay = document.getElementById('drawer-overlay');
    const closeBtn = document.getElementById('drawer-close');

    function openDrawer(e) {
        if (e) e.preventDefault();
        drawer.classList.remove('-translate-x-full');
        overlay.classList.remove('pointer-events-none');
        overlay.style.opacity = '0.2';
        document.body.style.overflow = 'hidden';
    }

    function closeDrawer() {
        drawer.classList.add('-translate-x-full');
        overlay.classList.add('pointer-events-none');
        overlay.style.opacity = '0';
        document.body.style.overflow = '';
    }

    // Bind click to ALL open buttons
    openBtns.forEach(btn => btn.addEventListener('click', openDrawer));
    closeBtn && closeBtn.addEventListener('click', closeDrawer);
    overlay && overlay.addEventListener('click', closeDrawer);

    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') closeDrawer();
    });
});


    </script>

    @stack('scripts')





<!-- Flowbite (after Tailwind) -->
<script src="https://cdn.jsdelivr.net/npm/flowbite@2.5.1/dist/flowbite.min.js"></script>

    <!-- other scripts here -->

<script>
document.addEventListener("DOMContentLoaded", function () {
  const header = document.getElementById("mainHeader");

  if (!header) return; // safety check

  window.addEventListener("scroll", function () {
    let scrollTop = window.scrollY || document.documentElement.scrollTop;

    if (scrollTop > 50) {
      // When scrolled down
      header.classList.remove("bg-transparent");
      header.classList.add("bg-black");
    } else {
      // Back to top
      header.classList.add("bg-transparent");
      header.classList.remove("bg-black");
    }
  });
});
</script>
<script>
document.addEventListener("DOMContentLoaded", function () {
  const header = document.getElementById("mainHeader");

  if (!header) return; // safety check

  window.addEventListener("scroll", function () {
    let scrollTop = window.scrollY || document.documentElement.scrollTop;

    if (scrollTop > 50) {
      // When scrolled down
      header.classList.remove("bg-transparent");
      header.classList.add("bg-black");
    } else {
      // Back to top
      header.classList.add("bg-transparent");
      header.classList.remove("bg-black");
    }
  });
});
</script>

<script>
document.addEventListener("DOMContentLoaded", function () {
  const header = document.getElementById("mobile-header");

  if (!header) return; // safety check

  window.addEventListener("scroll", function () {
    let scrollTop = window.scrollY || document.documentElement.scrollTop;

    if (scrollTop > 50) {
      // When scrolled down
      header.classList.remove("bg-transparent");
      header.classList.add("bg-black");
    } else {
      // Back to top
      header.classList.add("bg-transparent");
      header.classList.remove("bg-black");
    }
  });
});
</script>
<script>
    function trackEvent(eventType, elementId = null, extraData = {}) {
        fetch("{{ route('track.event') }}", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "X-CSRF-TOKEN": "{{ csrf_token() }}",
                "Accept": "application/json",
            },
            body: JSON.stringify({
                event_type: eventType,
                element_id: elementId,
                extra_data: extraData,
                page_url: window.location.href,
            }),
        }).catch(e => {
            // silently ignore errors – don’t break UI
            console.error('Track error', e);
        });
    }
</script>

</body>


</html>