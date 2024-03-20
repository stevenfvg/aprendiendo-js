import courses from './public/data/courses.json';

export function getElementsFromDom(elements) {
    // Obtención de elementos HTML del DOM.
    const [cart, cartContainer, emptyCartButton, courseList] = elements;
    // Array para almacenar cursos agregados al carrito de compras.
    let coursesAddedToCart = [];

    // Función que renderiza los cursos en un <div> con la clase "card".
    const showCourses = (element, data) => {
        const gridContainer = element.children[1];
        data.forEach(course => {
            const gridItem = document.createElement('div');
            gridItem.classList.add('grid-item');
            gridItem.innerHTML = `
                <div class="card">
                    <img src="${course.img}" class="imagen-curso u-full-width">
                    <div class="info-card">
                        <h4>${course.title}</h4>
                        <p>Juan Pedro</p>
                        <img src="${course.reputation}">
                        <p class="precio">$${course.price}  <span class="u-pull-right ">$${course.promoción}</span></p>
                        <a href="#" class="u-full-width button-primary button input agregar-carrito" data-id="${course.id}">Agregar Al Carrito</a>
                    </div>
                </div>
            `;

            gridContainer.appendChild(gridItem);
        });
    };

    // Función para cargar detectores de eventos para interactuar con la lista de cursos y el carrito de compras.
    const loadEventListeners = () => {
        // Agregue un detector de eventos a la lista de cursos para manejar los clics y agregar cursos al carrito de compras.
        courseList.addEventListener('click', addCourseToCart);
        // Agregue un detector de eventos al carrito de compras para manejar los clics y eliminar cursos del carrito.
        cart.addEventListener('click', removeCourseFromCart);
        // Agregue un detector de eventos al botón "Vaciar carrito" para manejar los clics y eliminar todos los cursos del carrito de compras.
        emptyCartButton.addEventListener('click', () => {
            // Se reacciona un arreglo vacio a la variable coursesAddedToCart.
            // Luego, elimine los cursos duplicados del carrito.
            coursesAddedToCart = [];
            removeDuplicateCoursesInCart();
        });
    };

    // Esta función se ejecuta cuando se hace clic en un curso para agregarlo al carrito.
    function addCourseToCart(e) {
        e.preventDefault();
        // Comprueba si el elemento en el que se hizo clic tiene la clase 'agregar-carrito'.
        if (e.target.classList.contains('agregar-carrito')) {
            const selectedCourse = e.target.parentElement.parentElement;
            // Se llama a la función getCourseData para obtener los datos del curso.
            getCourseData(selectedCourse);
        }
    }

    // Elimina un curso del carrito de compras cuando se hace clic en el botón Eliminar.
    function removeCourseFromCart(e) {
        // Compruebe si el elemento en el que se hizo clic tiene la clase 'borrar-curso'.
        if (e.target.classList.contains('borrar-curso')) {
            // Obtención del identificador único del curso que se eliminará.
            const courseIdentifier = e.target.getAttribute('data-id');

            // Filtra el curso con el identificador coincidente al array cursosAddedToCart.
            coursesAddedToCart = coursesAddedToCart.filter(
                course => course.id !== courseIdentifier
            );

            // Actualiza la lista de cursos que se muestra en el carrito de compras.
            listCoursesInCart();
        }
    }

    // Esta función obtiene los datos del curso seleccionado y los almacena en un objeto.
    function getCourseData(course) {
        const courseData = {
            img: course.querySelector('img').src,
            title: course.querySelector('h4').textContent,
            price: course.querySelector('.precio span').textContent,
            id: course.querySelector('a').getAttribute('data-id')
        };

        // Compruebe si ya existe un artículo en el carrito de compras.
        const courseExistsInCart = coursesAddedToCart.some(
            course => course.id === courseData.id
        );
        if (courseExistsInCart) {
            // Comprueba si el curso ya existe en el carrito de compras.
            const courses = coursesAddedToCart.map(course => {
                if (course.id === courseData.id) {
                    alert('El curso ya se encuentra agregado al carrito');
                    return course; // Devolver el objeto actualizado.
                } else {
                    return course; // Devuelve un objeto sin elementos duplicados.
                }
            });
            coursesAddedToCart = [...courses];
        } else {
            coursesAddedToCart = [...coursesAddedToCart, courseData];
        }

        listCoursesInCart();
    }

    // Enumera los cursos en el carrito de compras, eliminando duplicados y mostrando los datos de cada curso.
    function listCoursesInCart() {
        removeDuplicateCoursesInCart();
        coursesAddedToCart.forEach(course => {
            const { img, title, price, id } = course;
            const row = document.createElement('tr');
            row.innerHTML = `
                <td><img src="${img}" width="100" /></td>
                <td>${title}</td>
                <td>${price}</td>
                <td>
                    <a href="#" class="borrar-curso" data-id="${id}"> X </a> 
                </td>
            `;

            // Agregua los datos del curso al contenedor del carrito de compras.
            cartContainer.appendChild(row);
        });
    }

    // Elimina cursos duplicados del carrito de compras.
    // Esto se logra eliminando todos los elementos secundarios del contenedor del carrito.
    function removeDuplicateCoursesInCart() {
        while (cartContainer.firstChild) {
            cartContainer.removeChild(cartContainer.firstChild);
        }
    }

    showCourses(courseList, courses);
    loadEventListeners();
}
