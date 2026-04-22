📌 Trabajo Práctico Nº 4
Integración con APIs

Objetivo General

Desarrollar una aplicación web utilizando React + Vite, capaz de consumir una API externa, procesar la información obtenida y presentarla en pantalla de forma dinámica, incorporando además interacción con el usuario mediante formularios y persistencia de datos.

// Objetivos Específicos
Implementar el consumo de una API REST.
Aplicar asincronía mediante async/await.
Utilizar hooks de React (useState, useEffect).
Gestionar formularios controlados.
Implementar manejo de errores.
Incorporar persistencia de datos mediante LocalStorage.
Diseñar una interfaz clara y funcional.


🧩 Descripción del Sistema

//La aplicación desarrollada consiste en un Buscador de Personajes de la serie Rick and Morty.//

El sistema permite al usuario:

Buscar personajes por nombre.
Visualizar los resultados en tarjetas.
Acceder a información detallada de cada personaje mediante un modal.
Agregar personajes a una lista de favoritos.
Visualizar los favoritos en un menú desplegable.
Eliminar personajes de la lista de favoritos.
Visualizar personajes automáticamente al iniciar la aplicación.


🌐 API Utilizada

Se utilizó la API pública: 👉 https://rickandmortyapi.com/documentation

Esta API proporciona información sobre personajes, episodios y ubicaciones de la serie.

//Endpoint principal utilizado: https://rickandmortyapi.com/api/character

⚙️ Tecnologías Utilizadas
React (con Vite)
JavaScript (ES6+)
Axios
React Toastify
CSS (estilos personalizados)
LocalStorage

🔄 Desarrollo e Implementación

🔹 Consumo de la API Se implementó el consumo de la API mediante Axios, utilizando funciones asincrónicas (async/await) para obtener los datos.
Se incorporó manejo de errores mediante try/catch, permitiendo controlar fallas en la conexión o resultados inexistentes.


🔹 Manejo de Estado //Se utilizaron los siguientes hooks:
useState: para gestionar estados como personajes, búsqueda, favoritos y carga.
useEffect: para realizar la carga inicial de datos al iniciar la aplicación.


🔹 Formulario de Búsqueda
Se implementó un input controlado que permite buscar personajes por nombre.

Además, se incorporó la funcionalidad de que, al vaciar el campo de búsqueda, se vuelvan a mostrar automáticamente todos los personajes.

🔹 Persistencia de Datos // Se desarrolló un hook personalizado (useLocalStorage) para almacenar la lista de favoritos en el navegador, permitiendo mantener los datos incluso al recargar la página.

🔹 Componentización // La aplicación fue dividida en componentes reutilizables:

CharacterCard: muestra la información básica del personaje.
CharacterModal: muestra el detalle completo.
Custom Hook: manejo de LocalStorage.
Service API: centraliza las peticiones HTTP.


🔹 Interfaz de Usuario - Se diseñó una interfaz con:

Tarjetas para cada personaje.
Modal para visualización detallada.
Menú desplegable para favoritos.
Diseño responsive y organizado mediante CSS.


🔹 Notificaciones - Se utilizó react-toastify para mostrar mensajes al usuario en distintos eventos:

Carga de datos.
Errores en la búsqueda.
Acciones sobre favoritos.

🌍 Deploy // Link de Netlify

👉 https://multiversrickandmorty.netlify.app/


Se incorpore funcionalidades adicionales como:
Modal de detalle.
Menú desplegable de favoritos.
Carga automática de personajes.
Interfaz mejorada
