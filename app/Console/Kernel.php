<?php

namespace App\Console;

use Illuminate\Console\Scheduling\Schedule;
use Illuminate\Foundation\Console\Kernel as ConsoleKernel;

class Kernel extends ConsoleKernel
{
    protected function schedule(Schedule $schedule)
    {
        // Sitemap generation should run every 10 minutes
        $schedule->command('sitemap:generate')->everyTenMinutes();
    }
    

    protected function commands()
    {
        $this->load(__DIR__.'/Commands');
    }
}
