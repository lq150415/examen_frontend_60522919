// app-routing.module.ts
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GestionarAutoresComponent } from './gestionar-autores/gestionar-autores.component';
import { GestionarLibrosComponent } from './gestionar-libros/gestionar-libros.component';
import { GestionarClientesComponent } from './gestionar-clientes/gestionar-clientes.component';
import { RegistrarPrestamosComponent } from './registrar-prestamos/registrar-prestamos.component';
import { ReportesComponent } from './reportes/reportes.component';
import { DashboardComponent } from './dashboard/dashboard.component';

const routes: Routes = [
  { path: 'gestionar-autores', component: GestionarAutoresComponent },
  { path: 'gestionar-libros', component: GestionarLibrosComponent },
  { path: 'gestionar-clientes', component: GestionarClientesComponent },
  { path: 'registrar-prestamos', component: RegistrarPrestamosComponent },
  { path: 'reportes', component: ReportesComponent },
  { path: '', component: DashboardComponent, pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
