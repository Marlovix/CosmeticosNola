<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;

class CategorySeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        \DB::table('categories')->insert([
            'name' => 'Category A'
        ]);
        \DB::table('categories')->insert([
            'name' => 'Category B'
        ]);
        \DB::table('categories')->insert([
            'name' => 'Category C'
        ]);
        \DB::table('categories')->insert([
            'name' => 'Category D'
        ]);
        \DB::table('categories')->insert([
            'name' => 'Category E'
        ]);
    }
}
