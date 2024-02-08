# SecureChange

Este proyecto es un sistema de compra y venta de dolares, con el fin de que los usuarios puedan realizar transacciones
de manera segura y rápida.

## Instalación

Para la instalación del proyecto, sigue los siguientes pasos:

1. Clona el repositorio: `git clone https://github.com/MaickDavila/secure_change`
2. Navega al directorio del proyecto: `cd proyecto`
3. Instala las dependencias: `npm install`

## Configuración

Se debe configurar el .env con las siguientes variables de entorno:

````
VITE_APP_FIREBASE_APIKEY=
VITE_APP_FIREBASE_AUTHDOMAIN=
VITE_APP_FIREBASE_PROJECTID=
VITE_APP_FIREBASE_STORAGEBUCKET=
VITE_APP_FIREBASE_MESSAGINGSENDERID=
VITE_APP_FIREBASE_APPID=
````

## Uso

Para utilizar el proyecto, sigue los siguientes pasos:

- Para iniciar el servidor de desarrollo: `npm run dev`
- Para construir el proyecto: `npm run build`
- Para ejecutar las pruebas: `npm run test`

## Características

- Te da en tiempo real el valor del dolar en soles.
- Te permite comprar dólares.
- Te permite vender dólares.

## Contribución

Este proyecto es parte de un proceso de selección, para demostrar habilidades en el desarrollo de software del lado del
frontend con Vuejs3.