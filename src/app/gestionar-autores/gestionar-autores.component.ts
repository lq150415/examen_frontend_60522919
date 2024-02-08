
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { CrearModalComponent } from '../components/crear-modal/crear-modal.component';
import { Subject } from 'rxjs';

interface Autor {
  id: number;
  nombre: string;
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
  selector: 'app-gestionar-autores',
  templateUrl: './gestionar-autores.component.html',
  styleUrls: ['./gestionar-autores.component.css'],
})
export class GestionarAutoresComponent implements OnInit {
  autores: Autor[] = []; // Inicializa el arreglo vacío
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

  abrirModalCrearAutor(): void {
    const camposAutor: CampoFormulario[] = [
      { nombre: 'nombre', etiqueta: 'Nombre del autor', placeholder: 'Ingrese el nombre', required: true },
      // Agrega más campos según tus necesidades
    ];
  
    this.abrirModal('Crear Autor', camposAutor);
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
