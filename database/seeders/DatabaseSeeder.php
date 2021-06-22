<?php

namespace Database\Seeders;

use App\Models\Plan;
use App\Models\User;
use Illuminate\Database\Seeder;
use Illuminate\Support\Str;
use Illuminate\Support\Facades\DB;
class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
        // \App\Models\User::factory(10)->create();

        //Plans Seeder
        $plans = [
            ['name'=>'Gold', 'price'=>10.99,'duration'=>30],
            ['name'=>'Silver', 'price'=>5.99,'duration'=>30],
            ['name'=>'Bronze', 'price'=>3.99,'duration'=>30]
        ];
        foreach ($plans as $plan)
        {
            Plan::create([
                'name'=>$plan['name'],
                'price'=>$plan['price'],
                'duration'=>$plan['duration']
            ]);
        }

        //User Seeder
        User::create([
            'name' => 'Panther Codx',
            'email' => 'admin@demo.com',
            'email_verified_at' => now(),
            'password' => '$2y$10$92IXUNpkjO0rOQ5byMi.Ye4oKoEa3Ro9llC/.og/at2.uheWG/igi', // password
            'remember_token' => Str::random(10),
        ]);

        \App\Models\Application::factory(5)->create();
        \App\Models\Store::factory(10)->create();

        for ($i=1;$i<6;$i++){
            for($j=0;$j<11;$j++){
                DB::table('application_store')->insert(
                    [
                        'application_id'=>$i,
                        'store_id'=>$j,
                        'plan_id'=>random_int(1,3)
                ]
                );
            }

        }

    }
}
