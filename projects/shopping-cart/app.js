import courses from './public/data/courses.json';

export function getElementsFromDom(elements) {
    // Destructuring mapping to extract HTML elements from the document.
    const [cart, cartContainer, emptyCartButton, courseList] = elements;
    // Array to store courses added to the shopping cart.
    let coursesAddedToCart = [];

    // Rendering courses in a <div> element with class 'card'.
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

    // Function to load event listeners for interacting with the course list and shopping cart.
    const loadEventListeners = () => {
        // Add event listener to the course list to handle clicks and add courses to the shopping cart.
        courseList.addEventListener('click', addCourseToCart);
        // Add event listener to the shopping cart to handle clicks and remove courses from the cart.
        cart.addEventListener('click', removeCourseFromCart);
        // Add event listener to the "Empty Cart" button to handle clicks and remove all courses from the shopping cart.
        emptyCartButton.addEventListener('click', () => {
            // Set the coursesAddedToCart array to an empty array to clear the cart.
            // Then, remove any duplicate courses from the cart.
            coursesAddedToCart = [];
            removeDuplicateCoursesInCart();
        });
    };

    // This function is executed when a course is clicked to add to cart.
    function addCourseToCart(e) {
        e.preventDefault();
        // It checks if the clicked element has the 'add-cart' class.
        if (e.target.classList.contains('agregar-carrito')) {
            const selectedCourse = e.target.parentElement.parentElement;
            // The getCourseData function is called to get the course data.
            getCourseData(selectedCourse);
        }
    }

    // Removes a course from the shopping cart when the delete button is clicked.
    function removeCourseFromCart(e) {
        // Check if the clicked element has the class 'borrar-curso'.
        if (e.target.classList.contains('borrar-curso')) {
            // Get the unique identifier of the course to be removed.
            const courseIdentifier = e.target.getAttribute('data-id');

            //Filter out the course with the matching identifier from the coursesAddedToCart array.
            coursesAddedToCart = coursesAddedToCart.filter(
                course => course.id !== courseIdentifier
            );

            // Update the displayed list of courses in the shopping cart
            listCoursesInCart();
        }
    }

    // This function gets the data from the selected course and stores it in an object.
    function getCourseData(course) {
        const courseData = {
            img: course.querySelector('img').src,
            title: course.querySelector('h4').textContent,
            price: course.querySelector('.precio span').textContent,
            id: course.querySelector('a').getAttribute('data-id')
        };

        // Check if an item already exists in the shopping cart.
        const courseExistsInCart = coursesAddedToCart.some(
            course => course.id === courseData.id
        );
        if (courseExistsInCart) {
            // Update the quantity of the item added to the shopping cart.
            const courses = coursesAddedToCart.map(course => {
                if (course.id === courseData.id) {
                    alert('El curso ya se encuentra agregado al carrito');
                    return course; // return the updated object.
                } else {
                    return course; // returns object without duplicate element.
                }
            });
            coursesAddedToCart = [...courses];
        } else {
            coursesAddedToCart = [...coursesAddedToCart, courseData];
        }

        listCoursesInCart();
    }

    // Lists courses in the shopping cart, removing duplicates and displaying each course's data.
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

            // Add course data to the shopping cart container.
            cartContainer.appendChild(row);
        });
    }

    // Removes duplicate courses from the shopping cart.
    // This is achieved by removing all child elements of the cart container.
    function removeDuplicateCoursesInCart() {
        while (cartContainer.firstChild) {
            cartContainer.removeChild(cartContainer.firstChild);
        }
    }

    // Execution of main functions
    showCourses(courseList, courses);
    loadEventListeners();
}
