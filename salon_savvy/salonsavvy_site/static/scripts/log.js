(function () {
    // Function to toggle between login and signup forms
    function toggleForms(formToShow, formToHide) {
        document.querySelector(formToHide).classList.add('hidden');
        document.querySelector(formToShow).classList.remove('hidden');
    }

    // Event listener for login button
    document.querySelector('.login-btn').addEventListener('click', function (event) {
        event.preventDefault(); // Prevent default link behavior
        toggleForms('.login-form', '.signup-form'); // Show login form, hide signup form
    });

    // Event listener for signup button
    document.querySelector('.signup-btn').addEventListener('click', function (event) {
        event.preventDefault(); // Prevent default link behavior
        toggleForms('.signup-form', '.login-form'); // Show signup form, hide login form
    });

    // Event listener for control buttons
    [...document.querySelectorAll(".control")].forEach(button => {
        button.addEventListener("click", function() {
            document.querySelector(".active-btn").classList.remove("active-btn");
            this.classList.add("active-btn");
            document.querySelector(".active").classList.remove("active");
            document.getElementById(button.dataset.id).classList.add("active");
        })
    });
})();
