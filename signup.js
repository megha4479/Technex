document.getElementById("signupForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent form submission to add custom validation

    const emailInput = document.getElementById("email");
    const email = emailInput.value;

    // Simple email regex pattern to validate email format
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    if (!emailPattern.test(email)) {
        alert("Please enter a valid email address.");
        emailInput.focus();
        return false;
    }

    // If email is valid, allow the form to be submitted
    alert("Form submitted successfully!");
    event.target.submit();
});
