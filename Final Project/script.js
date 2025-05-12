function showAlert() {
    alert("You clicked 'Read More'! Stay tuned for new posts.");
}
const contactForm = document.getElementById('contact-form');
const formStatus = document.getElementById('form-status');

contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    if (name && email && message) {
        formStatus.textContent = 'Thank you for your message!';
        formStatus.style.color = 'green';
        contactForm.reset();
    } else {
        formStatus.textContent = 'Please fill out all fields.';
        formStatus.style.color = 'red';
    }
});



