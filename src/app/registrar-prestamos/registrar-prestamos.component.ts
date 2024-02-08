import { Component } from '@angular/core';

@Component({
  selector: 'app-registrar-prestamos',
  templateUrl: './registrar-prestamos.component.html',
  styleUrls: ['./registrar-prestamos.component.css']
})
export class RegistrarPrestamosComponent {
  fechaPrestamo: Date = new Date();
  cliente: string = '';
  libro: string = '';
  diasPrestamo: number = 0;

  clientes = ['Cliente 1', 'Cliente 2', 'Cliente 3'];
  libros = ['Libro 1', 'Libro 2', 'Libro 3'];

  calcularFechaLimite(): Date|null {
    if (this.fechaPrestamo && this.diasPrestamo) {
      const fechaLimite = new Date(this.fechaPrestamo);
      fechaLimite.setDate(fechaLimite.getDate() + this.diasPrestamo);
      return fechaLimite;
    }
    return null;
  }

  guardarPrestamo(): void {
    // Aquí puedes implementar la lógica para guardar el préstamo
    console.log('Prestamo guardado');
  }
}
