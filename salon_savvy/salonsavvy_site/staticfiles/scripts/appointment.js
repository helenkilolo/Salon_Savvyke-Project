document.addEventListener("DOMContentLoaded", function() {
    const bookAppointmentButton = document.querySelector(".main-btn");
    
    if (bookAppointmentButton) {
        bookAppointmentButton.addEventListener("click", function(event) {
            event.preventDefault(); // Prevent the default behavior of the anchor tag
            
            // Redirect the user to the appointment page
            window.location.href = "{% url 'appointment' %}";
        });
    }
});
