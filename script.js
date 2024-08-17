// script.js

function opentab(tabId) {
    // Hide all tab contents
    document.querySelectorAll('.tab-contents').forEach(function(tabContent) {
        tabContent.classList.remove('active-tab');
    });

    // Remove active class from all tab links
    document.querySelectorAll('.tab-links').forEach(function(tabLink) {
        tabLink.classList.remove('active-link');
    });

    // Show the selected tab content
    document.getElementById(tabId).classList.add('active-tab');

    // Add active class to the clicked tab link
    document.querySelector('.tab-links[onclick="opentab(\'' + tabId + '\')"]').classList.add('active-link');
}
// JavaScript for Typewriter Effect
document.addEventListener("DOMContentLoaded", function() {
    const textElement = document.getElementById("typing-effect");
    const text = textElement.textContent;
    textElement.textContent = "";

    let index = 0;
    const speed = 50; // Speed of typing effect in milliseconds

    function typeWriter() {
        if (index < text.length) {
            textElement.textContent += text.charAt(index);
            index++;
            setTimeout(typeWriter, speed);
        }
    }

    typeWriter();
});
function opentab(tabId) {
    // Hide all tabs
    const tabs = document.querySelectorAll('.tab-contents');
    tabs.forEach(tab => {
        tab.classList.remove('active-tab');
    });

    // Remove active-link class from all tab-links
    const tabLinks = document.querySelectorAll('.tab-links');
    tabLinks.forEach(link => {
        link.classList.remove('active-link');
    });

    // Show the selected tab
    const activeTab = document.getElementById(tabId);
    activeTab.classList.add('active-tab');

    // Add active-link class to the clicked tab link
    const clickedLink = document.querySelector(`.tab-links[onclick="opentab('${tabId}')"]`);
    clickedLink.classList.add('active-link');

    // Adjust container height based on the active tab content
    const container = document.querySelector('.tab-container');
    container.style.height = `${activeTab.scrollHeight}px`;
}

// Initialize the container height when the page loads
document.addEventListener('DOMContentLoaded', () => {
    const container = document.querySelector('.tab-container');
    const defaultTab = document.getElementById('skills');
    container.style.height = `${defaultTab.scrollHeight}px`;
});

// Initialize EmailJS with your public key
emailjs.init('2VNxWS38VTCDd6oUm'); // Replace with your public key

document.querySelector('#contact-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the form from submitting the default way

    emailjs.sendForm('service_hysp3pk', 'template_rxbbqnt', this)
        .then(function(response) {
            console.log('Success:', response);
            alert('Message sent successfully!');
        }, function(error) {
            console.log('Error:', error);
            alert('Failed to send message. Please try again later.');
        });
});
