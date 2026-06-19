# Sign Up Challenge

Una aplicación frontend desarrollada con **React** y **Vite** cuyo objetivo es implementar un flujo de registro (**Sign Up**) con una arquitectura simple, mantenible y escalable.

Este proyecto sirve como base para futuros retos relacionados con autenticación y gestión de formularios.

---

# Tecnologías

* React
* Vite
* JavaScript (ES6+)
* CSS

---

# Instalación

Clona el repositorio:

```bash
git clone <url-del-repositorio>
```

Instala las dependencias:

```bash
npm install
```

Inicia el servidor de desarrollo:

```bash
npm run dev
```

Genera la versión de producción:

```bash
npm run build
```

Previsualiza la versión de producción:

```bash
npm run preview
```

---

# Objetivos

* Implementar un formulario de registro.
* Validar los datos ingresados por el usuario.
* Gestionar el estado del formulario.
* Mantener una arquitectura limpia y reutilizable.
* Facilitar la extensión del proyecto para futuros retos.

---

# Arquitectura

Se propone una arquitectura **Feature-Based** simplificada, adecuada para aplicaciones pequeñas pero preparada para crecer sin necesidad de reorganizar el proyecto.

### Principios

* Separación por funcionalidades.
* Componentes reutilizables.
* Lógica desacoplada de la interfaz.
* Servicios independientes.
* Evitar sobreingeniería.

No se utilizan soluciones globales como Redux debido al tamaño del proyecto.

---

# Estructura del proyecto

```text
src/
│
├── app/
│   └── App.jsx
│
├── features/
│   └── auth/
│       ├── components/
│       │   └── SignUpForm.jsx
│       │
│       ├── hooks/
│       │   └── useSignUp.js
│       │
│       ├── services/
│       │   └── authService.js
│       │
│       └── auth.utils.js
│
├── components/
│   ├── ui/
│   │   ├── Input.jsx
│   │   ├── Button.jsx
│   │   └── Modal.jsx
│   │
│   └── layout/
│       └── Container.jsx
│
├── hooks/
│   └── useForm.js
│
├── utils/
│   ├── validation.js
│   └── constants.js
│
├── styles/
│   └── global.css
│
└── main.jsx
```

---

# Justificación técnica

## Feature: Auth

Toda la funcionalidad relacionada con el registro se concentra dentro del módulo `auth`.

Incluye:

* Componentes.
* Hooks.
* Servicios.
* Utilidades.

Esta organización evita la dispersión del código y facilita incorporar nuevas funcionalidades como Login, Recuperación de contraseña o Perfil.

---

## Componentes reutilizables

Los componentes se dividen en dos categorías:

### UI

Componentes básicos reutilizables.

* Input
* Button
* Modal

### Layout

Componentes encargados únicamente de la estructura visual.

* Container

Esta separación mejora la consistencia visual y evita duplicación de código.

---

## Hooks personalizados

La lógica de negocio permanece fuera de los componentes.

### useForm

Gestiona:

* estado
* cambios de inputs
* validaciones
* envío

### useSignUp

Encapsula la lógica específica del registro.

Esto mantiene los componentes enfocados únicamente en la presentación.

---

## Servicios

La comunicación con el backend se abstrae mediante un servicio.

```text
authService.js
```

Actualmente puede simular una API, permitiendo reemplazarla posteriormente por un backend real sin modificar la interfaz.

---

# Flujo de datos

```text
SignUpForm
      │
      ▼
useSignUp
(estado + lógica)
      │
      ▼
authService
(fake API / API real)
      │
      ▼
Success / Error
      │
      ▼
Actualización de la UI
```

---

# Escalabilidad

La estructura propuesta permite incorporar nuevas funcionalidades sin reorganizar el proyecto.

Ejemplos:

* Login
* Forgot Password
* Verify Email
* User Profile
* Dashboard

Cada nueva funcionalidad puede añadirse como una nueva **feature**, manteniendo el mismo patrón de organización.

---

# Autor

Desarrollado como parte de un reto técnico utilizando React y Vite.
