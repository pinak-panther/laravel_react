<?php

namespace Database\Factories;

use App\Models\Store;
use Illuminate\Database\Eloquent\Factories\Factory;

class StoreFactory extends Factory
{
    /**
     * The name of the factory's corresponding model.
     *
     * @var string
     */
    protected $model = Store::class;

    /**
     * Define the model's default state.
     *
     * @return array
     */
    public function definition()
    {
        return [
            'application_id'=>$this->faker->randomElement(['1','2','3','4','5']),
            'name'=>$this->faker->domainName,
            'email'=>$this->faker->email,
            'current_plan'=>$this->faker->randomElement(['plan1','plan2','plan3','plan4']),
            'status'=>$this->faker->randomElement(['1','0']),
        ];
    }
}
