export function getElementsFromDom(elements) {
    const cart = elements[0];
    const cartContainer = elements[1];
    const emptyCartButton = elements[2];
    const courseList = elements[3];

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

        console.log(courseData);
    }

    loadEventListeners();
}
