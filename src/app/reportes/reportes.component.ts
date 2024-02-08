import { Component } from '@angular/core';

@Component({
  selector: 'app-reportes',
  templateUrl: './reportes.component.html',
  styleUrls: ['./reportes.component.css']
})
export class ReportesComponent {
  tipoReporte: string = ''; // Inicializa el tipo de reporte
  periodo: string = ''; // Inicializa el periodo
  semana: number | undefined; // Inicializa la semana como número o indefinido
  mes: string = ''; // Inicializa el mes

  resultados: any[] = []; // Inicializa los resultados como un arreglo vacío

  dtOptions: DataTables.Settings = {};

  ngOnInit(): void {
    this.configurarDatatable();
  }

  generarReporte(): void {
    // Lógica para generar el reporte y cargar los resultados en this.resultados
    // Puedes implementar llamadas a servicios o cargar datos de alguna manera
    // según el tipo de reporte seleccionado y los parámetros elegidos.

    // Una vez tengas los resultados, puedes actualizar el datatable
    this.dtOptions.data = this.resultados;
  }

  private configurarDatatable(): void {
    // Configuración básica del Datatable
    this.dtOptions = {
      pagingType: 'full_numbers',
      // Puedes agregar más opciones según tus necesidades
    };
  }
}
