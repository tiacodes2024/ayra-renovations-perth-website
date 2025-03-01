function sendMail(){
    let params = {
        name: document.getElementById("name").value,
        email: document.getElementById("phone").value,
        email: document.getElementById("email").value,
        email: document.getElementById("message").value,
    }

    emailjs.send("service_3twuej7", "template_cmqumli", params).then(alert("Enquiry Sent"))
}

// Toggle the menu when clicking the hamburger icon
function toggleMenu(event) {
    event.stopPropagation(); // Prevent the click from bubbling up
    const menu = document.getElementById('navMenu');
    menu.classList.toggle('open');
  }
  
  // Close the menu if clicking outside of it when open
  document.addEventListener('click', function(event) {
    const menu = document.getElementById('navMenu');
    const navToggle = document.querySelector('.nav-toggle');
    if (menu.classList.contains('open') &&
        !menu.contains(event.target) &&
        !navToggle.contains(event.target)) {
      menu.classList.remove('open');
    }
  });
  