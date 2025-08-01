﻿# Library Project 📚

Proyecto CRUD de libros desarrollado con el stack **MERN** (MongoDB, Express, React, Node.js). Permite crear, leer, actualizar y eliminar libros desde una interfaz web sencilla.

---

## Tecnologías Utilizadas

### Backend
- **Node.js**: Entorno de ejecución para JavaScript en el servidor.
- **Express**: Framework para construir la API REST.
- **MongoDB**: Base de datos NoSQL para almacenar los libros.
- **Mongoose**: ODM para modelar los datos de MongoDB.
- **CORS**: Middleware para habilitar solicitudes entre frontend y backend.

### Frontend
- **React**: Biblioteca para construir interfaces de usuario.
- **Vite**: Herramienta de desarrollo rápida para React.
- **TailwindCSS**: Framework de estilos utilitario para un diseño moderno y responsivo.
- **Axios**: Cliente HTTP para consumir la API.
- **React Router DOM**: Navegación entre páginas.
- **React Icons**: Iconografía moderna.
- **Notistack**: Notificaciones tipo snackbar.

---

## Estructura del Proyecto

```bash
library-project/
├── client/                     # Código fuente del frontend
│   ├── public/                 # Archivos estáticos públicos
│   └── src/                    # Código fuente de React
│       ├── components/          # Componentes reutilizables de React
│       ├── pages/               # Páginas de la aplicación
│       ├── App.jsx              # Componente principal de la app
│       └── index.jsx            # Punto de entrada de React
├── server/                     # Código fuente del backend
│   ├── config/                 # Archivos de configuración
│   ├── controllers/            # Controladores de la API
│   ├── models/                 # Modelos de datos de MongoDB
│   ├── routes/                 # Rutas de la API
│   ├── .env                    # Variables de entorno
│   ├── server.js               # Archivo principal del servidor
│   └── package.json            # Dependencias y scripts del backend
├── README.md                   # Documentación del proyecto
└── package.json                # Dependencias y scripts del proyecto
```

---

## Instalación y Ejecución

Para ejecutar este proyecto en tu máquina local, sigue estos pasos:

1. **Clona el repositorio**:
   ```bash
   git clone https://github.com/tu_usuario/library-project.git
   cd library-project
   ```

2. **Instala las dependencias del servidor**:
   ```bash
   cd server
   npm install
   ```

3. **Configura las variables de entorno**:
   - Renombra el archivo `.env.example` a `.env` y configura tus credenciales de MongoDB y puertos.

4. **Inicia el servidor**:
   ```bash
   npm start
   ```

5. **Instala las dependencias del cliente**:
   ```bash
   cd ../client
   npm install
   ```

6. **Inicia el cliente**:
   ```bash
   npm run dev
   ```

Ahora deberías poder acceder a la aplicación en `http://localhost:3000`.

---
[Mateo Muscolino]
