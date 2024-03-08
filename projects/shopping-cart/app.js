export function getElementsFromDom(elements) {
    const cart = elements[0];
    const cartContainer = elements[1];
    const emptyCartButton = elements[2];
    const courseList = elements[3];
    
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

        coursesAddedToCart = [...coursesAddedToCart, courseData];
        listCoursesInCart();
    }

    // Lists courses in the shopping cart, removing duplicates and displaying each course's data.
    function listCoursesInCart() {
        removeDuplicateCoursesInCart();
        coursesAddedToCart.forEach(course => {
            const row = document.createElement('tr');
            row.innerHTML = `
                <td><img src="${course.img}" width="100" /></td>
                <td>${course.title}</td>
                <td>${course.price}</td>
                <td>${course.quantity}</td>
                <td>
                    <a href="#" class"borrar-curso" data-id="${course.id}"> X </a> 
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
