Programacion-Web
Este es el repositorio de los ejercicios de programacion web

#Ejercicios de Programación Web - HTML, CSS y JS#

Este repositorio contiene la colección completa de ejercicios desarrollados durante el curso de Programación Web, abarcando desde los fundamentos de HTML5 hasta la integración de JavaScript y el despliegue en línea mediante GitHub Pages.

#Objetivo de la Actividad#

Integrar todos los ejercicios de la actividad del Tema 2 en un solo repositorio público, publicado en línea mediante GitHub Pages, como evidencia del trabajo realizado. El sitio debe funcionar correctamente, respetando las rutas relativas de imágenes, CSS y JavaScript.

#Contenido de los Ejercicios#

Bloque 1: Fundamentos de HTML
Ejercicio 1: Primera página HTML ("Hola Mundo") con estructura básica de HTML5.
Ejercicio 2: Párrafos, texto en negrita (<strong>), énfasis (<em>) y saltos de línea (<br>).
Ejercicio 3: Enlaces externos e internos usando target="_blank" y target="_self".
Ejercicio 4: Inserción de imágenes con atributos src, alt y width.
Ejercicio 5: Integración de texto, imágenes y enlaces en una página de blog personal.
Ejercicio 6: Uso de secciones semánticas: <header>, <section> y <footer>.
Bloque 2: Estructura Avanzada
Ejercicio 7: Listas anidadas (<ul> y <ol>) aplicadas a una receta de cocina.
Ejercicio 8: Tabla de horario de clases con <thead>, <tbody>, rowspan y colspan, acompañada de CSS externo.
Ejercicio 9: Formulario de contacto con HTML5 avanzado (fieldset, legend, tipos de input, select, datalist), validación y CSS con variables.
Bloque 3: JavaScript
Ejercicio 10: Calculadora de conversión de grados Celsius a Fahrenheit, con validación de datos y campo de resultado readonly.
Tecnologías Utilizadas
HTML5: Estructura y contenido semántico.
CSS3: Estilizado con variables, Flexbox, Grid y pseudoclases.
JavaScript: Manipulación del DOM y lógica de conversión.
XAMPP: Servidor local Apache para pruebas.
GitHub Pages: Despliegue del sitio en línea.



<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Menú de Ejercicios - Programación Web</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            max-width: 800px;
            margin: 40px auto;
            padding: 20px;
            background-color: #f8f9fa;
        }
        h1 { color: #927dc1; }
        ul { list-style: none; padding: 0; }
        li { margin-bottom: 10px; }
        a {
            display: block;
            padding: 12px 20px;
            background: white;
            border-radius: 8px;
            text-decoration: none;
            color: #2b2d42;
            box-shadow: 0 2px 5px rgba(0,0,0,0.1);
            transition: 0.3s;
        }
        a:hover {
            background: #927dc1;
            color: white;
        }
    </style>
</head>
<body>
    <h1>Ejercicios de Programación Web</h1>
    <p>Selecciona un ejercicio para verlo:</p>
    <ul>
        <li><a href="ejercicio1.html">Ejercicio 1 - Hola Mundo</a></li>
        <li><a href="ejercicio2.html">Ejercicio 2 - Párrafos y Formato</a></li>
        <li><a href="ejercicio3.html">Ejercicio 3 - Enlaces</a></li>
        <li><a href="ejercicio4.html">Ejercicio 4 - Imágenes</a></li>
        <li><a href="ejercicio5.html">Ejercicio 5 - Integración</a></li>
        <li><a href="ejercicio6.html">Ejercicio 6 - Secciones Semánticas</a></li>
        <li><a href="ejercicio7.html">Ejercicio 7 - Listas Anidadas</a></li>
        <li><a href="ejercicio8.html">Ejercicio 8 - Horario de Clases</a></li>
        <li><a href="ejercicio9.html">Ejercicio 9 - Formulario de Contacto</a></li>
        <li><a href="ejercicio10.html">Ejercicio 10 - Calculadora JS</a></li>
    </ul>
</body>
</html>
