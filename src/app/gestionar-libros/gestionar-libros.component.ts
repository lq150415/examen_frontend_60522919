
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { CrearModalComponent } from '../components/crear-modal/crear-modal.component';
import { Subject } from 'rxjs';

interface Libro {
  id: number;
  titulo: string;
  nombre_autor: string;
  lote: number;
  descripcion: string;
  // Agrega más propiedades según tus necesidades
}
interface CampoFormulario {
  nombre: string;
  etiqueta: string;
  placeholder: string;
  required: boolean;
  // Puedes agregar más propiedades según tus necesidades
}
@Component({
  selector: 'app-gestionar-libros',
  templateUrl: './gestionar-libros.component.html',
  styleUrls: ['./gestionar-libros.component.css'],
})
export class GestionarLibrosComponent implements OnInit {
  libros: Libro[] = []; // Inicializa el arreglo vacío
  dtOptions: DataTables.Settings = {};
  dtTrigger: Subject<any> = new Subject();

  constructor(private dialog: MatDialog) {}

  ngOnInit(): void {
    this.dtOptions = {
      pagingType: 'full_numbers',
      // Puedes agregar más opciones según tus necesidades
    };
  
    // Puedes cargar datos aquí si los tienes disponibles
    // Ejemplo:
    // this.autores = [{ id: 1, nombre: 'Autor 1' }, { id: 2, nombre: 'Autor 2' }];
  
    // Llama al método dtTrigger.next() para renderizar la tabla cuando tengas datos
  }

  abrirModalCrearLibro(): void {
    const camposLibro: CampoFormulario[] = [
      { nombre: 'titulo', etiqueta: 'Titulo del libro', placeholder: 'Ingrese el titulo', required: true },
      { nombre: 'nombre_autor', etiqueta: 'Autor del libro', placeholder: 'Ingrese el autor', required: true },
      { nombre: 'lote', etiqueta: 'Numero de lote', placeholder: 'Ingrese el numero de lote', required: true },
      { nombre: 'descripcion', etiqueta: 'Descripcion', placeholder: 'Ingrese una breve descripcion', required: true },
      // Agrega más campos según tus necesidades
    ];
  
    this.abrirModal('Crear Libro', camposLibro);
  }
  private abrirModal(titulo: string, campos: CampoFormulario[]): void {
    const dialogRef = this.dialog.open(CrearModalComponent, {
      width: '400px',
      data: { titulo, campos },
    });
  
    dialogRef.afterClosed().subscribe(() => {
      // Puedes realizar acciones después de que se cierra el modal
      console.log('El modal se cerró');
    });
  }
}
