# Proyecto React - Gestión de Posts

Este proyecto es una aplicación web que permite crear, editar y eliminar posts, con una interfaz intuitiva para la gestión de contenidos. A continuación, se presentan las instrucciones para instalar y ejecutar el proyecto en tu máquina local, así como una breve guía de uso de la interfaz.

## Instalación

Sigue los pasos a continuación para instalar y ejecutar el proyecto en tu máquina local.

### Requisitos

Asegúrate de tener instalados los siguientes programas:

- **Node.js**: [Descargar Node.js](https://nodejs.org)
- **Git**: [Descargar Git](https://git-scm.com/)

### Instrucciones

1. **Clona el repositorio** en tu máquina local:

   ```bash
   git clone https://github.com/usuario/nombre-del-repositorio.git

2. Accede a la carpeta del proyecto:

   ```bash
   cd nombre-del-repositorio

3. Instala las dependencias utilizando npm:

   ```bash
   npm install



4. Inicia la aplicación en modo de desarrollo:

   ```bash
   npm start

5. Accede a la carpeta del proyecto:

   Abre tu navegador y accede a http://localhost:5173 para ver la aplicación.


## Guía de uso

Al ingresar al sitio web, podrás interactuar con los posts existentes y utilizar diferentes opciones para gestionarlos. A continuación se describe el proceso para crear, editar y eliminar posts.

### Crear posts

1. Haz clic en el botón "Crear" ubicado en la esquina superior derecha.
   
   [![Captura-de-pantalla-2024-10-21-105831.png](https://i.postimg.cc/br14QbXp/Captura-de-pantalla-2024-10-21-105831.png)](https://postimg.cc/jnd8TDdF)

2. Aparecerá un formulario en el cual debes completar todos los campos obligatorios.

   ![Imagen del formulario](ruta/a/imagen)

3. Una vez completado, haz clic en el botón "Agregar" en la parte inferior del formulario para añadir el nuevo post.

   ![Imagen del botón Agregar](ruta/a/imagen)

### Editar y eliminar posts

Cada post tiene botones para **editar** y **eliminar** a la izquierda de su contenido.

- **Editar**: Haz clic en el botón azul con el ícono de un lápiz para editar un post. Aparecerá un formulario con los datos actuales, donde podrás realizar cambios. Tras editar, haz clic en el botón "Editar" en la parte inferior para guardar las modificaciones.

  **IMPORTANTE**: Solo puedes editar los posts que hayas creado, debido a una limitación del servidor que impide la edición de posts ajenos.

   ![Imagen del botón Editar](ruta/a/imagen)

- **Eliminar**: Haz clic en el botón rojo con el ícono de una papelera para eliminar un post.

   ![Imagen del botón Eliminar](ruta/a/imagen)

### Paginación

En la parte inferior de la tabla, encontrarás controles de paginación y podrás seleccionar cuántas filas de posts quieres visualizar por página.

   ![Imagen de la paginación](ruta/a/imagen)
