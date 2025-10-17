<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\PrayerTimeController;

Route::get('/user', function (Request $request) {
    return $request->user();
})->middleware('auth:sanctum');

Route::get('/prayer-times', [PrayerTimeController::class, 'getPrayerTimes']);
Route::get('/prayer-times/monthly', [PrayerTimeController::class, 'getMonthlyPrayerTimes']);
Route::get('/test', function () {
    return response()->json(['message' => 'API is working!']);
});