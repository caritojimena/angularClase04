//Archivo para crear las rutas de los componentes
import{RouterModule, Routes} from '@angular/router'; // importar librerias de la ruta.

import{HomeComponent} from './pages/home/home.component'; // importar el componente home
import{CategoriaComponent} from './pages/categoria/categoria.component'; // importar el componente home
import {Component} from '@angular/core';

const routerM:Routes = [
    {
        path:'', //ruta de la pagina
        component:HomeComponent //el componente al que apunta
    },
    {
        path:'categoria',
        component:CategoriaComponent
    }
];
export const appRouter= RouterModule.forRoot(routerM); //se crea constante con condicionales
