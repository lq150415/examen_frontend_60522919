import { Component, OnInit, Inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

interface CampoFormulario {
  nombre: string;
  etiqueta: string;
  placeholder?: string;
  required?: boolean;
}

@Component({
  selector: 'app-crear-modal',
  templateUrl: './crear-modal.component.html',
  styleUrls: ['./crear-modal.component.css']
})
export class CrearModalComponent implements OnInit {
  modalForm: FormGroup;
  titulo: string;
  campos: CampoFormulario[];
  constructor(
    private dialogRef: MatDialogRef<CrearModalComponent>,
    private formBuilder: FormBuilder,
    @Inject(MAT_DIALOG_DATA) public data: { titulo: string, campos: CampoFormulario[] },
  ) {
    this.modalForm = this.inicializarFormulario();
    this.titulo = data.titulo;
    this.campos = data.campos;
  }

  ngOnInit() {
  }

  guardarInformacion() {
    if (this.modalForm.valid) {
      const informacion = this.modalForm.value;
      console.log('Información guardada:', informacion);

      // Agrega lógica adicional según tus necesidades

      // Cierra el modal
      this.dialogRef.close();
    }
  }

  cerrarModal() {
    this.dialogRef.close();
  }
  // Método para manejar el valor del placeholder
  obtenerPlaceholder(placeholder: string | undefined): string {
    // Si es undefined, devuelve una cadena vacía, de lo contrario, devuelve el valor
    return placeholder || '';
  }
  private inicializarFormulario(): FormGroup {
    const camposFormulario: { [key: string]: any } = {}; // Indicamos el tipo explícitamente
    for (const campo of this.data.campos) {
      camposFormulario[campo.nombre] = ['', Validators.required];
    }
    return this.formBuilder.group(camposFormulario);
  }
}
