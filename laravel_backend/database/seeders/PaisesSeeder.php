<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class PaisesSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('paises')->insert([
            'nombre' => 'Colombia',
            'capital' => 'Bogotá',
            'idioma' => 'Español',
            'poblacion' => 50000000,
            'created_at' => now(),
            'updated_at' => now()
        ]);

        DB::table('paises')->insert([
            'nombre' => 'China',
            'capital' => 'Pekín',
            'idioma' => 'Chino',
            'poblacion' => 70000000,
            'created_at' => now(),
            'updated_at' => now()
        ]);

        DB::table('paises')->insert([
            'nombre' => 'Italia',
            'capital' => 'Roma',
            'idioma' => 'Italiano',
            'poblacion' => 30000000,
            'created_at' => now(),
            'updated_at' => now()
        ]);

        DB::table('paises')->insert([
            'nombre' => 'Brasil',
            'capital' => 'Brasilia',
            'idioma' => 'Portugués',
            'poblacion' => 80000000,
            'created_at' => now(),
            'updated_at' => now()
        ]);

        DB::table('paises')->insert([
            'nombre' => 'España',
            'capital' => 'Madrid',
            'idioma' => 'Español',
            'poblacion' => 10000000,
            'created_at' => now(),
            'updated_at' => now()
        ]);

        DB::table('paises')->insert([
            'nombre' => 'Tailandia',
            'capital' => 'Bangkok',
            'idioma' => 'Tailandés',
            'poblacion' => 40000000,
            'created_at' => now(),
            'updated_at' => now()
        ]);

        DB::table('paises')->insert([
            'nombre' => 'Corea del Sur',
            'capital' => 'Seúl',
            'idioma' => 'Coreano',
            'poblacion' => 11000000,
            'created_at' => now(),
            'updated_at' => now()
        ]);

        DB::table('paises')->insert([
            'nombre' => 'Chile',
            'capital' => 'Santiago',
            'idioma' => 'Español',
            'poblacion' => 10000000,
            'created_at' => now(),
            'updated_at' => now()
        ]);

        DB::table('paises')->insert([
            'nombre' => 'Estados Unidos',
            'capital' => 'Washington',
            'idioma' => 'Inglés',
            'poblacion' => 50000000,
            'created_at' => now(),
            'updated_at' => now()
        ]);

        DB::table('paises')->insert([
            'nombre' => 'Rusia',
            'capital' => 'Moscú',
            'idioma' => 'Ruso',
            'poblacion' => 59000000,
            'created_at' => now(),
            'updated_at' => now()
        ]);

        DB::table('paises')->insert([
            'nombre' => 'Francia',
            'capital' => 'París',
            'idioma' => 'Francés',
            'poblacion' => 20000000,
            'created_at' => now(),
            'updated_at' => now()
        ]);
    }
}
