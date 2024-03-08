export function getElementsFromDom(elements) {
    // Destructuring mapping to extract HTML elements from the document.
    const [cart, cartContainer, emptyCartButton, courseList] = elements;
    // Array to store courses added to the shopping cart.
    let coursesAddedToCart = [];

    const loadEventListeners = () => {
        courseList.addEventListener('click', addCourseToCart);
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

    // This function gets the data from the selected course and stores it in an object.
    function getCourseData(course) {
        const courseData = {
            img: course.querySelector('img').src,
            title: course.querySelector('h4').textContent,
            price: course.querySelector('.precio span').textContent,
            id: course.querySelector('a').getAttribute('data-id'),
            quantity: 1,
        };

        // Check if an item already exists in the shopping cart.
        const courseExistsInCart = coursesAddedToCart.some(
            course => course.id === courseData.id
        );
        if (courseExistsInCart) {
            // Update the quantity of the item added to the shopping cart.
            const courses = coursesAddedToCart.map(course => {
                if (course.id === courseData.id) {
                    course.quantity++;
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
            const { img, title, price, quantity, id } = course;
            const row = document.createElement('tr');
            row.innerHTML = `
                <td><img src="${img}" width="100" /></td>
                <td>${title}</td>
                <td>${price}</td>
                <td>${quantity}</td>
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

    loadEventListeners();
}
