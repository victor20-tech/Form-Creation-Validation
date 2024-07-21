document.addEventListener('DOMContentLoaded', () => {
    console.log("Load successfully!")
    const form = document.getElementById('registration-form');
    const feedbackDiv = document.getElementById('form-feedback');

    form.addEventListener('submit', (event) => {
        //prevent form submission
        event.preventDefault();

        const username = document.getElementById('username').value.trim();
        const email = document.getElementById('email').value.trim();
        const password = document.getElementById('password').value.trim();

        let isValid = true;
        let messages = [];

        //Username Validation
        if(username.length < 3){
            isValid = false;
            messages.push('username must be at least 3 characters long.');
        }

         // Email Validation
        if (!email.includes('@') || !email.includes('.')) {
            isValid = false;
            messages.push('Please enter a valid email address.');
        }

        // Password Validation
        if (password.length < 8) {
            isValid = false;
            messages.push('Password must be at least 8 characters long.');
        }
        
        // Make feedbackDiv visible
        feedbackDiv.style.display = 'block';

        // Display feedback based on validation status
        if (isValid) {
            feedbackDiv.style.color = '#28a745';
            feedbackDiv.textContent = 'Registration successful!';
            feedbackDiv.style.display = 'block';
        } else {
            feedbackDiv.innerHTML = messages.join('<br>');
            feedbackDiv.style.color = '#dc3545';
            feedbackDiv.style.display = 'block';
        }

        // // Clear the form fields if registration is successful
        // if (isValid) {
        //     document.getElementById('registration-form').reset();
        // }

    });
});