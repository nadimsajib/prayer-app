<?php

namespace App\Http\Controllers;

use App\Models\PrayerTime;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Http;
use Carbon\Carbon;

class PrayerTimeController extends Controller
{
    public function getPrayerTimes(Request $request)
    {
        $city = $request->get('city', 'Dhaka');
        $country = $request->get('country', 'Bangladesh');
        
        $today = Carbon::today()->format('Y-m-d');
        
        // Check if we have cached data for today
        $prayerTime = PrayerTime::where('date', $today)
            ->where('city', $city)
            ->where('country', $country)
            ->first();
            
        if (!$prayerTime) {
            // Fetch from API
            $prayerTime = $this->fetchFromAPI($city, $country, $today);
        }
        
        return response()->json($prayerTime);
    }
    
    private function fetchFromAPI($city, $country, $date)
    {
        try {
            $response = Http::get("http://api.aladhan.com/v1/timingsByCity", [
                'city' => $city,
                'country' => $country,
                'method' => 2
            ]);
            
            $data = $response->json();
            
            if ($response->successful() && $data['code'] == 200) {
                $timings = $data['data']['timings'];
                
                return PrayerTime::create([
                    'date' => $date,
                    'fajr' => $timings['Fajr'],
                    'sunrise' => $timings['Sunrise'],
                    'dhuhr' => $timings['Dhuhr'],
                    'asr' => $timings['Asr'],
                    'maghrib' => $timings['Maghrib'],
                    'isha' => $timings['Isha'],
                    'city' => $city,
                    'country' => $country
                ]);
            }
        } catch (\Exception $e) {
            // Return default times if API fails
            return $this->getDefaultTimes($city, $country, $date);
        }
    }
    
    private function getDefaultTimes($city, $country, $date)
    {
        return PrayerTime::create([
            'date' => $date,
            'fajr' => '05:30',
            'sunrise' => '06:45',
            'dhuhr' => '12:30',
            'asr' => '15:45',
            'maghrib' => '18:15',
            'isha' => '19:30',
            'city' => $city,
            'country' => $country
        ]);
    }
    
    public function getMonthlyPrayerTimes(Request $request)
    {
        $city = $request->get('city', 'Mecca');
        $country = $request->get('country', 'Saudi Arabia');
        $month = $request->get('month', Carbon::now()->month);
        $year = $request->get('year', Carbon::now()->year);
        
        $prayerTimes = PrayerTime::whereYear('date', $year)
            ->whereMonth('date', $month)
            ->where('city', $city)
            ->where('country', $country)
            ->get();
            
        return response()->json($prayerTimes);
    }
}