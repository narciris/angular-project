# 📘 Guía rápida de Angular

Este documento es una guía básica para iniciar con Angular, incluyendo instalación, configuración y primeros pasos.

## 🔹 ¿Qué es Angular?
Angular es un framework de JavaScript desarrollado por Google para crear aplicaciones web de una sola página (SPA). 

📌 **Documentación oficial**: [angular.io](https://angular.io/)

---

## 🚀 Instalación y configuración

### 1️⃣ Verificar Node.js y npm
Angular requiere Node.js y npm para funcionar. Para verificar si están instalados, usa los siguientes comandos:

```sh
node -v   # Verifica la versión de Node.js
npm -v    # Verifica la versión de npm
```
Si no están instalados, descárgalos desde [nodejs.org](https://nodejs.org/).

### 2️⃣ Instalar Angular CLI
Para instalar Angular CLI globalmente en tu sistema:

```sh
npm install -g @angular/cli
```
Verifica la instalación con:

```sh
ng version
```

---

## 🎯 Crear un nuevo proyecto Angular

Para crear una nueva aplicación Angular, ejecuta:

```sh
ng new mi-proyecto-angular
cd mi-proyecto-angular
ng serve
```
Abre `http://localhost:4200/` en tu navegador para ver la aplicación en ejecución.

---

## 📂 Estructura del proyecto

- `src/` → Contiene el código fuente de la aplicación.
- `app/` → Contiene los componentes principales.
- `angular.json` → Configuración del proyecto.
- `package.json` → Dependencias y scripts npm.

---

## ⚡ Conceptos básicos

### 🔹 Crear un componente
```sh
ng generate component nombre-del-componente
```
Los componentes son la base de Angular y permiten dividir la interfaz en partes reutilizables.
un componente prodria definirse como una clase con una serie de propiedades
puedes llamar un componente dentro de otro componenete
 y tambien usar directivas para crear funcionalidades dentro del mismo

 para llamar un componente tienes que tener en cuenta el nombre del selecto
 ``` sh
 selector: 'app-header',
 standlone: true,
 imports:[],
 templateUrl:'./header.component.html',
 styleUrl: './header.component.css,
 ```
 asi aparecer el archivo ts, luego de ejecutar el comando para crear un componente
 en este archivo estan el nombre del selector que te servirá para llamar el componente en otros lugares
 standlone hacer el componente sea independiente y no necesite de un modulo
 immport, los insumos que usaras en el componente
 templateUrl, es el html que puede llamar d emanara independiente asociado al compoentne
 syleUrl hace referencia a los estilos

### 🔹 Crear un módulo
```sh
ng generate module no