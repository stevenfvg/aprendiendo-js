// import all css files
import './public/assets/css/normalize.css';
import './public/assets/css/skeleton.css';
import './public/assets/css/styles.css';

// import layout components
import Header from './layout/header.js';
import Hero from './layout/hero.js';
import InfoBar from './layout/infoBar.js';
import CourseList from './layout/courseList.js';
import Footer from './layout/footer';

import { getElementsFromDom } from './app.js';

document.addEventListener('DOMContentLoaded', () => {
    const app = document.querySelector('#app');
    app.innerHTML = `
        ${Header()}
        ${Hero()}
        ${InfoBar()}
        ${CourseList()}
        ${Footer()}
    `;

    const elements = [
        document.querySelector('#carrito'),
        document.querySelector('#lista-carrito tbody'),
        document.querySelector('#vaciar-carrito'),
        document.querySelector('#lista-cursos'),
    ];

    getElementsFromDom(elements);
    
});
