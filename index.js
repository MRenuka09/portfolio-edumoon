document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('contactForm').addEventListener('submit', function(event) {
        event.preventDefault();

        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const message = document.getElementById('message').value;
        const formMessage = document.getElementById('formMessage');

        if (name && email && message) {
            // Simulating form submission
            setTimeout(function() {
                formMessage.textContent ` Thank you for contacting me, ${name}! I will respond to you at ${email}.`;
                formMessage.classList.add('success');
                formMessage.classList.remove('error');
                document.getElementById('contactForm').reset();
            }, 1000);
        } else {
            formMessage.textContent = 'Please fill out all fields.';
            formMessage.classList.add('error');
            formMessage.classList.remove('success');
        }
    });
});
