<!DOCTYPE html>
<html lang="en">

<head>
    <!-- Title -->
    <title>Admin Login - CMS</title>

    <!-- Meta -->
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <!-- Favicon icon -->
    <link rel="icon" type="image/png" sizes="16x16" href="images/favicon.png">
    
    <!-- Tailwind CSS -->
    <script src="https://cdn.tailwindcss.com"></script>
</head>

<body class="bg-gray-50 min-h-screen flex items-center justify-center">
    <div class="w-full max-w-md mx-auto px-4 sm:px-0">
        <div class="bg-white rounded-lg shadow-lg p-8">
            <!-- Logo/Title -->
            <div class="text-center mb-8">
                <h1 class="text-2xl font-bold mb-3 text-gray-800">Admin</h1>
                <p class="text-sm text-gray-600">Sign in to your account</p>
            </div>

            <!-- Success/Error Messages -->
            @if(session('success'))
                <div class="mb-6 bg-green-100 text-green-700 px-4 py-3 rounded text-sm font-semibold text-center">
                    {{ session('success') }}
                </div>
            @endif

            @if(session('error'))
                <div class="mb-6 bg-red-100 text-red-700 px-4 py-3 rounded text-sm font-semibold text-center">
                    {{ session('error') }}
                </div>
            @endif

            @if ($errors->any())
                <div class="mb-6 bg-red-100 text-red-700 px-4 py-3 rounded text-sm font-semibold text-center">
                    {{ $errors->first() }}
                </div>
            @endif

            <!-- Login Form -->
            <form method="POST" action="{{ route('admin.login.submit') }}">
                @csrf
                
                <!-- Email Input -->
                <div class="mb-5">
                    <label for="email" class="font-medium text-sm block mb-2 text-gray-700">Email</label>
                    <input type="email" 
                           name="email" 
                           id="email"
                           required 
                           placeholder="Admin Email"
                           value="{{ old('email') }}"
                           class="border border-gray-300 text-gray-700 focus:border-gray-400 focus:ring-0 text-sm rounded-lg py-2.5 px-4 w-full focus:outline-none">
                </div>

                <!-- Password Input -->
                <div class="mb-5">
                    <label for="password" class="font-medium text-sm block mb-2 text-gray-700">Password</label>
                    <input type="password" 
                           name="password" 
                           id="password"
                           required 
                           placeholder="Admin Password"
                           class="border border-gray-300 text-gray-700 focus:border-gray-400 focus:ring-0 text-sm rounded-lg py-2.5 px-4 w-full focus:outline-none">
                    
                    <!-- Forgot Password Link (Optional) -->
                    <!-- <div class="mt-2 text-right">
                        <a href="#" class="text-sm text-blue-600 hover:underline">
                            Forgot Password?
                        </a>
                    </div> -->
                </div>

                <!-- Submit Button -->
                <div class="flex justify-center mt-8">
                    <button type="submit"
                            class="bg-[#FFDE59] hover:bg-[#FFD700] text-black text-sm font-semibold rounded-lg px-6 py-2.5 w-full sm:w-auto text-center transition-colors duration-200">
                        Login Admin
                    </button>
                </div>
            </form>
        </div>

        <!-- Footer (Optional) -->
        <div class="text-center mt-6">
            <p class="text-sm text-gray-500">© {{ date('Y') }} CMS. All rights reserved.</p>
        </div>
    </div>

    <script>
        window.addEventListener('pageshow', function(event) {
            if (event.persisted) {
                window.location.reload();
            }
        });
    </script>

</body>

</html>