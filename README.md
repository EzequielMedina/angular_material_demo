# Aplicación de Gestión de Usuarios - Angular 20

Una aplicación moderna para la gestión de usuarios desarrollada con Angular 20, Angular Material y pipes personalizados.

## 🚀 Características

- **Formulario de Creación de Usuarios**: Interfaz intuitiva para registrar nuevos usuarios
- **Integración con Angular Material**: Componentes UI modernos y responsivos
- **Pipes Personalizados**: Transformación de datos en la vista
- **Validaciones de Formulario**: Validaciones en tiempo real con mensajes de error
- **Diseño Responsivo**: Adaptable a diferentes tamaños de pantalla
- **Tabla de Usuarios**: Visualización de usuarios registrados con pipes personalizados

## 🛠️ Tecnologías Utilizadas

- **Angular 20**: Framework principal
- **Angular Material**: Componentes de UI
- **TypeScript**: Lenguaje de programación
- **SCSS**: Preprocesador de CSS
- **Reactive Forms**: Manejo de formularios reactivos

## 📦 Instalación

1. **Clonar el repositorio**:
   ```bash
   git clone <repository-url>
   cd user-management-app
   ```

2. **Instalar dependencias**:
   ```bash
   npm install
   ```

3. **Ejecutar la aplicación**:
   ```bash
   ng serve
   ```

4. **Abrir en el navegador**:
   ```
   http://localhost:4200
   ```

## 🏗️ Estructura del Proyecto

```
src/
├── app/
│   ├── components/
│   │   └── user-form/           # Componente del formulario de usuario
│   ├── models/
│   │   └── user.ts             # Interfaz del modelo de usuario
│   ├── pipes/
│   │   ├── name-format-pipe.ts # Pipe para formatear nombres
│   │   └── date-format-pipe.ts # Pipe para formatear fechas
│   ├── services/
│   │   └── user.ts             # Servicio para manejo de usuarios
│   ├── app.component.ts        # Componente principal
│   ├── app.component.html      # Template principal
│   └── app.component.scss      # Estilos principales
```

## 🔧 Componentes Principales

### UserFormComponent
- Formulario reactivo para crear usuarios
- Validaciones en tiempo real
- Integración con Angular Material
- Manejo de errores con MatSnackBar

### Pipes Personalizados

#### NameFormatPipe
Transforma nombres para que la primera letra de cada palabra sea mayúscula:
```typescript
// Entrada: "juan carlos pérez"
// Salida: "Juan Carlos Pérez"
```

#### DateFormatPipe
Formatea fechas en formato legible en español:
```typescript
// Entrada: new Date('1990-05-15')
// Salida: "15 de mayo de 1990"
```

### UserService
Servicio para manejo de datos de usuarios:
- Crear nuevos usuarios
- Obtener lista de usuarios
- Almacenamiento en memoria (simulado)

## 🎨 Características de UI/UX

- **Diseño Moderno**: Gradientes y sombras para un aspecto profesional
- **Responsive Design**: Adaptable a móviles, tablets y desktop
- **Feedback Visual**: Notificaciones y mensajes de error claros
- **Accesibilidad**: Componentes Material Design accesibles
- **Animaciones**: Transiciones suaves y efectos visuales

## 📱 Campos del Formulario

1. **Nombre**: Validación de longitud mínima (2 caracteres)
2. **Apellido**: Validación de longitud mínima (2 caracteres)
3. **Email**: Validación de formato de email
4. **Teléfono**: Validación de formato con regex
5. **Fecha de Nacimiento**: Selector de fecha con Material DatePicker
6. **País**: Selector desplegable con países predefinidos
7. **Dirección**: Validación de longitud mínima (5 caracteres)
8. **Ciudad**: Validación de longitud mínima (2 caracteres)

## 🚀 Comandos Útiles

```bash
# Ejecutar en modo desarrollo
ng serve

# Ejecutar con puerto específico
ng serve --port 4201

# Construir para producción
ng build

# Ejecutar tests
ng test

# Linting
ng lint
```

## 📋 Funcionalidades Implementadas

✅ Formulario de creación de usuarios  
✅ Validaciones de formulario  
✅ Integración con Angular Material  
✅ Pipes personalizados  
✅ Diseño responsivo  
✅ Tabla de usuarios  
✅ Notificaciones con MatSnackBar  
✅ Servicio de usuarios  
✅ Modelo de datos tipado  

## 🔮 Próximas Mejoras

- [ ] Persistencia de datos con localStorage
- [ ] Edición de usuarios existentes
- [ ] Eliminación de usuarios
- [ ] Filtros y búsqueda en la tabla
- [ ] Paginación
- [ ] Exportación de datos
- [ ] Tests unitarios
- [ ] Integración con API REST

## 📄 Licencia

Este proyecto está bajo la Licencia MIT.

## 👨‍💻 Autor

Desarrollado como ejemplo de aplicación Angular 20 con Material Design y pipes personalizados.
