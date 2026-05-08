<?php

if (!function_exists('getStatusClass')) {
    function getStatusClass($status)
    {
        $statuses = config('constants.statuses');
        return $statuses[$status]['class'] ?? 'muted';
    }
}

if (!function_exists('getStatusName')) {
    function getStatusName($status)
    {
        $statuses = config('constants.statuses');
        return $statuses[$status]['name'] ?? 'Unknown';
    }
}