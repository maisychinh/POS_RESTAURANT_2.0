<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\MenuItem>
 */
class MenuItemFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition()
    {
        return [
            'name' => $this->faker->text('30'),
            'price' => $this->faker->randomFloat(2,0,1000),
            'description' => $this->faker->text('100'),
            'image' => $this->faker->text('30'),
            'enable' => $this->faker->boolean(),
            'type' => $this->faker->text('10')
        ];
    }
}
