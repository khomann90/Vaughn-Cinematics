document.addEventListener("DOMContentLoaded", function() {
    const form = document.querySelector("#contactForm");
    if (form) {
        form.addEventListener("submit", function(event) {
            const email = form.querySelector("#email");
            if (!email.value.includes("@")) {
                alert("Please enter a valid email address.");
                event.preventDefault();
            }
        });
    }
});
