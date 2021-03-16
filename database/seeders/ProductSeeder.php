<?php

namespace Database\Seeders;

use Faker\Factory as Faker;
use Illuminate\Database\Seeder;

class ProductSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $faker = Faker::create();

        foreach (range(1, 500) as $index)  {
            $img = ($index % 11) + 1;
            \DB::table('products')->insert([
                'category_id' => $index % 5 + 1,
                'title' => $faker->unique()->word,
                'description' => $faker->paragraph($nb =2),
                'price' => $faker->randomFloat($nbMaxDecimals = 2, $min = 1, $max = 1000),
                'quantity' => $faker->numberBetween($min = 1, $max = 10),
                'disabled' => $faker->boolean,
                'img_url' => url("/images/" . $img . ".jpeg")
            ]);
        }
    }
}
