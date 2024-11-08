document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevents page from refreshing on form submission

    // Retrieve the email value from the form
    const email = document.getElementById("email").value;
    
    // Store the email in local storage
    localStorage.setItem("userEmail", email);

    // Display a message to the user
    alert("Logged in as: " + email);

    // Redirect to the homepage
    window.location.href = "index.html"; // Replace with the actual path of your homepage
});
