import { Component, Inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';
import { MatDialog, MatDialogModule, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { MatTooltipModule } from '@angular/material/tooltip';

// Importar nuestros componentes personalizados
import { MaterialInputComponent } from '../material-input/material-input';
import { MaterialSelectComponent, SelectOption } from '../material-select/material-select';
import { MaterialDatepickerComponent } from '../material-datepicker/material-datepicker';
import { MaterialCheckboxComponent } from '../material-checkbox/material-checkbox';
import { MaterialTextareaComponent } from '../material-textarea/material-textarea';

@Component({
  selector: 'app-material-demo',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatCardModule,
    MatButtonModule,
    MatSnackBarModule,
    MatDialogModule,
    MatIconModule,
    MatTooltipModule,
    MaterialInputComponent,
    MaterialSelectComponent,
    MaterialDatepickerComponent,
    MaterialCheckboxComponent,
    MaterialTextareaComponent
  ],
  templateUrl: './material-demo.html',
  styleUrl: './material-demo.scss'
})
export class MaterialDemoComponent {
  demoForm: FormGroup;

  // Opciones para el select
  countryOptions: SelectOption[] = [
    { value: 'es', label: 'España' },
    { value: 'mx', label: 'México' },
    { value: 'ar', label: 'Argentina' },
    { value: 'co', label: 'Colombia' },
    { value: 'cl', label: 'Chile' }
  ];

  // Opciones para select múltiple
  interestOptions: SelectOption[] = [
    { value: 'angular', label: 'Angular' },
    { value: 'react', label: 'React' },
    { value: 'vue', label: 'Vue.js' },
    { value: 'node', label: 'Node.js' },
    { value: 'python', label: 'Python' }
  ];

  constructor(
    private fb: FormBuilder,
    private snackBar: MatSnackBar,
    private dialog: MatDialog
  ) {
    this.demoForm = this.fb.group({
      firstName: ['', [Validators.required, Validators.minLength(2)]],
      lastName: ['', [Validators.required, Validators.minLength(2)]],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', [Validators.required, Validators.pattern(/^\+?[\d\s\-\(\)]+$/)]],
      birthDate: ['', Validators.required],
      country: ['', Validators.required],
      interests: [[]],
      acceptTerms: [false, Validators.requiredTrue],
      description: ['', [Validators.required, Validators.minLength(10)]]
    });
  }

  // Métodos para mostrar información de componentes
  showInputInfo(): void {
    this.dialog.open(ComponentInfoDialogComponent, {
      width: '600px',
      data: {
        title: '📝 Material Input Component',
        content: `
          <h3>¿Qué es?</h3>
          <p>Un componente reutilizable que envuelve el <code>mat-input</code> de Angular Material con funcionalidad de formularios reactivos.</p>
          
          <h3>Características principales:</h3>
          <ul>
            <li><strong>ControlValueAccessor:</strong> Implementado para trabajar con Reactive Forms</li>
            <li><strong>Validaciones:</strong> Integradas con mensajes de error personalizables</li>
            <li><strong>Tipos:</strong> text, email, password, number, etc.</li>
            <li><strong>Apariencias:</strong> outline, fill, standard</li>
          </ul>
          
          <h3>Uso básico:</h3>
          <pre><code>&lt;app-material-input
  label="Nombre"
  placeholder="Ingrese su nombre"
  formControlName="firstName"
  [required]="true"
&gt;&lt;/app-material-input&gt;</code></pre>
          
          <h3>Inputs disponibles:</h3>
          <ul>
            <li><code>label</code>: Etiqueta del campo</li>
            <li><code>placeholder</code>: Texto de placeholder</li>
            <li><code>type</code>: Tipo de input (text, email, password)</li>
            <li><code>required</code>: Si es requerido</li>
            <li><code>disabled</code>: Si está deshabilitado</li>
            <li><code>appearance</code>: Apariencia del campo</li>
            <li><code>hint</code>: Texto de ayuda</li>
            <li><code>errorMessage</code>: Mensaje de error personalizado</li>
          </ul>
        `
      }
    });
  }

  showSelectInfo(): void {
    this.dialog.open(ComponentInfoDialogComponent, {
      width: '600px',
      data: {
        title: '🔽 Material Select Component',
        content: `
          <h3>¿Qué es?</h3>
          <p>Un componente que envuelve <code>mat-select</code> para crear selectores desplegables reutilizables.</p>
          
          <h3>Características principales:</h3>
          <ul>
            <li><strong>Selección simple y múltiple:</strong> Soporte para ambas opciones</li>
            <li><strong>Opciones dinámicas:</strong> Array de opciones configurable</li>
            <li><strong>Opciones deshabilitadas:</strong> Posibilidad de deshabilitar opciones específicas</li>
            <li><strong>Validaciones:</strong> Integradas con Reactive Forms</li>
          </ul>
          
          <h3>Uso básico:</h3>
          <pre><code>&lt;app-material-select
  label="País"
  [options]="countryOptions"
  formControlName="country"
  [required]="true"
&gt;&lt;/app-material-select&gt;</code></pre>
          
          <h3>Interfaz de opciones:</h3>
          <pre><code>interface SelectOption {
  value: any;        // Valor que se guarda
  label: string;     // Texto que ve el usuario
  disabled?: boolean; // Si está deshabilitada
}</code></pre>
          
          <h3>Inputs disponibles:</h3>
          <ul>
            <li><code>options</code>: Array de opciones</li>
            <li><code>multiple</code>: Si permite selección múltiple</li>
            <li><code>label</code>: Etiqueta del campo</li>
            <li><code>placeholder</code>: Texto de placeholder</li>
            <li><code>required</code>: Si es requerido</li>
            <li><code>hint</code>: Texto de ayuda</li>
            <li><code>errorMessage</code>: Mensaje de error personalizado</li>
          </ul>
        `
      }
    });
  }

  showDatepickerInfo(): void {
    this.dialog.open(ComponentInfoDialogComponent, {
      width: '600px',
      data: {
        title: '📅 Material Datepicker Component',
        content: `
          <h3>¿Qué es?</h3>
          <p>Un componente que combina <code>mat-input</code> con <code>mat-datepicker</code> para selección de fechas.</p>
          
          <h3>Características principales:</h3>
          <ul>
            <li><strong>Selector de fecha nativo:</strong> Calendario integrado</li>
            <li><strong>Fechas límite:</strong> Fechas mínimas y máximas configurables</li>
            <li><strong>Vistas configurables:</strong> month, year, multi-year</li>
            <li><strong>Validaciones:</strong> Integradas con Reactive Forms</li>
          </ul>
          
          <h3>Uso básico:</h3>
          <pre><code>&lt;app-material-datepicker
  label="Fecha de Nacimiento"
  formControlName="birthDate"
  [minDate]="new Date(1900, 0, 1)"
  [maxDate]="new Date()"
  startView="year"
&gt;&lt;/app-material-datepicker&gt;</code></pre>
          
          <h3>Inputs disponibles:</h3>
          <ul>
            <li><code>minDate</code>: Fecha mínima permitida</li>
            <li><code>maxDate</code>: Fecha máxima permitida</li>
            <li><code>startView</code>: Vista inicial (month, year, multi-year)</li>
            <li><code>label</code>: Etiqueta del campo</li>
            <li><code>placeholder</code>: Texto de placeholder</li>
            <li><code>required</code>: Si es requerido</li>
            <li><code>hint</code>: Texto de ayuda</li>
            <li><code>errorMessage</code>: Mensaje de error personalizado</li>
          </ul>
          
          <h3>Casos de uso comunes:</h3>
          <ul>
            <li>Fechas de nacimiento</li>
            <li>Fechas de inicio/fin de proyectos</li>
            <li>Rangos de fechas</li>
            <li>Fechas de reservas</li>
          </ul>
        `
      }
    });
  }

  showCheckboxInfo(): void {
    this.dialog.open(ComponentInfoDialogComponent, {
      width: '600px',
      data: {
        title: '☑️ Material Checkbox Component',
        content: `
          <h3>¿Qué es?</h3>
          <p>Un componente que envuelve <code>mat-checkbox</code> para checkboxes reutilizables.</p>
          
          <h3>Características principales:</h3>
          <ul>
            <li><strong>Estados múltiples:</strong> checked, unchecked, indeterminate</li>
            <li><strong>Colores configurables:</strong> primary, accent, warn</li>
            <li><strong>Posición del label:</strong> before, after</li>
            <li><strong>Validación requiredTrue:</strong> Para términos y condiciones</li>
          </ul>
          
          <h3>Uso básico:</h3>
          <pre><code>&lt;app-material-checkbox
  label="Acepto los términos y condiciones"
  formControlName="acceptTerms"
  [required]="true"
  color="primary"
&gt;&lt;/app-material-checkbox&gt;</code></pre>
          
          <h3>Inputs disponibles:</h3>
          <ul>
            <li><code>label</code>: Texto del checkbox</li>
            <li><code>indeterminate</code>: Estado intermedio (triángulo)</li>
            <li><code>color</code>: Color (primary, accent, warn)</li>
            <li><code>labelPosition</code>: Posición del label (before, after)</li>
            <li><code>required</code>: Si es requerido</li>
            <li><code>disabled</code>: Si está deshabilitado</li>
            <li><code>errorMessage</code>: Mensaje de error personalizado</li>
          </ul>
          
          <h3>Validación especial:</h3>
          <pre><code>acceptTerms: [false, Validators.requiredTrue]</code></pre>
          <p>El campo debe ser <code>true</code> para que el formulario sea válido.</p>
        `
      }
    });
  }

  showTextareaInfo(): void {
    this.dialog.open(ComponentInfoDialogComponent, {
      width: '600px',
      data: {
        title: '📄 Material Textarea Component',
        content: `
          <h3>¿Qué es?</h3>
          <p>Un componente que envuelve <code>mat-textarea</code> para campos de texto multilínea.</p>
          
          <h3>Características principales:</h3>
          <ul>
            <li><strong>Múltiples filas:</strong> Configurables con el input rows</li>
            <li><strong>Contador de caracteres:</strong> Muestra longitud actual/máxima</li>
            <li><strong>Límites de longitud:</strong> minLength y maxLength configurables</li>
            <li><strong>Validaciones:</strong> Integradas con Reactive Forms</li>
          </ul>
          
          <h3>Uso básico:</h3>
          <pre><code>&lt;app-material-textarea
  label="Descripción"
  formControlName="description"
  [rows]="4"
  [maxLength]="500"
  hint="Máximo 500 caracteres"
&gt;&lt;/app-material-textarea&gt;</code></pre>
          
          <h3>Inputs disponibles:</h3>
          <ul>
            <li><code>rows</code>: Número de filas visibles</li>
            <li><code>maxLength</code>: Longitud máxima de caracteres</li>
            <li><code>minLength</code>: Longitud mínima de caracteres</li>
            <li><code>label</code>: Etiqueta del campo</li>
            <li><code>placeholder</code>: Texto de placeholder</li>
            <li><code>required</code>: Si es requerido</li>
            <li><code>hint</code>: Texto de ayuda</li>
            <li><code>errorMessage</code>: Mensaje de error personalizado</li>
          </ul>
          
          <h3>Contador de caracteres:</h3>
          <p>Se muestra automáticamente cuando se establece <code>maxLength</code>:</p>
          <pre><code>{{ value.length }}/{{ maxLength }}</code></pre>
          
          <h3>Casos de uso comunes:</h3>
          <ul>
            <li>Descripciones largas</li>
            <li>Comentarios</li>
            <li>Contenido de texto extenso</li>
            <li>Biografías</li>
          </ul>
        `
      }
    });
  }

  showControlValueAccessorInfo(): void {
    this.dialog.open(ComponentInfoDialogComponent, {
      width: '700px',
      data: {
        title: '🔧 ControlValueAccessor - Explicación Técnica',
        content: `
          <h3>¿Qué es ControlValueAccessor?</h3>
          <p>Es una interfaz que permite que componentes personalizados funcionen con Angular Reactive Forms.</p>
          
          <h3>¿Por qué es necesario?</h3>
          <p>Sin ControlValueAccessor, no puedes usar <code>formControlName</code> en componentes personalizados.</p>
          
          <h3>Los 4 métodos obligatorios:</h3>
          
          <h4>1. writeValue(value: any): void</h4>
          <pre><code>writeValue(value: string): void {
  this.value = value; // Actualiza el valor interno
}</code></pre>
          <p><strong>¿Cuándo se llama?</strong> Cuando Angular establece el valor del FormControl</p>
          
          <h4>2. registerOnChange(fn: any): void</h4>
          <pre><code>registerOnChange(fn: any): void {
  this.onChange = fn; // Guarda la función de Angular
}</code></pre>
          <p><strong>¿Cuándo se llama?</strong> Angular registra su función de cambio</p>
          
          <h4>3. registerOnTouched(fn: any): void</h4>
          <pre><code>registerOnTouched(fn: any): void {
  this.onTouched = fn; // Guarda la función de Angular
}</code></pre>
          <p><strong>¿Cuándo se llama?</strong> Angular registra su función de touched</p>
          
          <h4>4. setDisabledState(isDisabled: boolean): void</h4>
          <pre><code>setDisabledState(isDisabled: boolean): void {
  this.disabled = isDisabled; // Actualiza el estado disabled
}</code></pre>
          <p><strong>¿Cuándo se llama?</strong> Cuando se llama formControl.disable() o enable()</p>
          
          <h3>Flujo completo:</h3>
          <ol>
            <li>Angular registra las funciones (registerOnChange, registerOnTouched)</li>
            <li>Angular establece el valor inicial (writeValue)</li>
            <li>Usuario interactúa → se ejecuta onChange()</li>
            <li>Usuario sale del campo → se ejecuta onTouched()</li>
            <li>Angular actualiza el FormControl</li>
          </ol>
          
          <h3>Configuración en el componente:</h3>
          <pre><code>providers: [
  {
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => MiComponente),
    multi: true
  }
]</code></pre>
        `
      }
    });
  }

  onSubmit(): void {
    if (this.demoForm.valid) {
      console.log('Formulario válido:', this.demoForm.value);
      this.snackBar.open('¡Formulario enviado exitosamente!', 'Cerrar', {
        duration: 3000,
        horizontalPosition: 'center',
        verticalPosition: 'top'
      });
    } else {
      this.markFormGroupTouched();
      this.snackBar.open('Por favor, complete todos los campos requeridos', 'Cerrar', {
        duration: 3000,
        horizontalPosition: 'center',
        verticalPosition: 'top'
      });
    }
  }

  onReset(): void {
    this.demoForm.reset();
    this.snackBar.open('Formulario limpiado', 'Cerrar', {
      duration: 2000,
      horizontalPosition: 'center',
      verticalPosition: 'top'
    });
  }

  private markFormGroupTouched(): void {
    Object.keys(this.demoForm.controls).forEach(key => {
      const control = this.demoForm.get(key);
      control?.markAsTouched();
    });
  }

  getErrorMessage(controlName: string): string {
    const control = this.demoForm.get(controlName);
    
    if (control?.hasError('required')) {
      return 'Este campo es requerido';
    }
    
    if (control?.hasError('email')) {
      return 'Ingrese un email válido';
    }
    
    if (control?.hasError('minlength')) {
      const requiredLength = control.errors?.['minlength'].requiredLength;
      return `Mínimo ${requiredLength} caracteres`;
    }
    
    if (control?.hasError('pattern')) {
      return 'Formato inválido';
    }
    
    if (control?.hasError('requiredTrue')) {
      return 'Debe aceptar los términos y condiciones';
    }
    
    return '';
  }
}

// Componente para el diálogo de información
@Component({
  selector: 'app-component-info-dialog',
  standalone: true,
  imports: [CommonModule, MatDialogModule, MatButtonModule],
  template: `
    <h2 mat-dialog-title>{{ data.title }}</h2>
    <mat-dialog-content [innerHTML]="data.content"></mat-dialog-content>
    <mat-dialog-actions align="end">
      <button mat-button mat-dialog-close>Cerrar</button>
    </mat-dialog-actions>
  `,
  styles: [`
    mat-dialog-content {
      max-height: 70vh;
      overflow-y: auto;
    }
    
    h3 {
      color: #667eea;
      margin-top: 20px;
      margin-bottom: 10px;
    }
    
    h4 {
      color: #495057;
      margin-top: 15px;
      margin-bottom: 8px;
    }
    
    ul {
      margin: 10px 0;
      padding-left: 20px;
    }
    
    li {
      margin: 5px 0;
    }
    
    pre {
      background: #f8f9fa;
      border: 1px solid #e9ecef;
      border-radius: 4px;
      padding: 12px;
      margin: 10px 0;
      overflow-x: auto;
      font-size: 12px;
    }
    
    code {
      background: #f1f3f4;
      padding: 2px 4px;
      border-radius: 3px;
      font-family: 'Courier New', monospace;
    }
    
    p {
      margin: 10px 0;
      line-height: 1.6;
    }
  `]
})
export class ComponentInfoDialogComponent {
  constructor(@Inject(MAT_DIALOG_DATA) public data: {title: string, content: string}) {}
}
