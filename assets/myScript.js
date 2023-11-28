// Check if the user is accessing from a mobile device
function isMobile() {
    return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
}

document.addEventListener("DOMContentLoaded", function () {
    const mobileContainer = document.querySelector('.mobile-container');
    const desktopMessage = document.querySelector('.desktop-message');

    if (isMobile()) {
        mobileContainer.style.display = 'block';
    } else {
        desktopMessage.style.display = 'block';
    }
});


// document.addEventListener("DOMContentLoaded", function () {
//     setTimeout(() => {
//         // window.location.href = "login.html";
//     }, 30000); // Navigate to the next page after 30 seconds
// });


// document.addEventListener("DOMContentLoaded", function () {
//     setTimeout(() => {
//         window.location.href = "login.html";
//     }, 3000000); // Navigate to the next page after 30 seconds
// });


// function stopAnimations() {
//     const animationImages = document.querySelectorAll('.animationImages');
//     animationImages.forEach(image => {
//         image.style.animation = 'none';
//     });
// }


// document.addEventListener("DOMContentLoaded", function () {
//     setTimeout(() => {
//         document.querySelector('.birthdayLogo').classList.add('finalState');
//         document.querySelector('.gut').classList.add('finalState');
//         document.querySelector('.mus').classList.add('finalState');
//         document.querySelector('.pon').classList.add('finalState');
//         window.location.href = "login.html";
//     }, 3000000); // Navigate to the next page after 30 seconds
// });






// Navigation code

// Global functions  

// function redirectToContactPage() {
//     setTimeout(function () {
//         window.location.href = 'contact.html';
//     }, 10000); // 10000 milliseconds = 10 seconds
// }

// redirectToContactPage();

// document.addEventListener("DOMContentLoaded", function () {
//     // Redirect from index.html to contact.html after 10 seconds
//     if (document.getElementById('index')) {
//         setTimeout(function () {
//             redirectToContactPage();
//         }, 10000);
//     }
// });

// function redirectToContactPage() {
//     document.getElementById('index').style.display = 'none';
//     document.getElementById('contact').style.display = 'block';
// }

// function redirectToInfoPage() {
//     document.getElementById('contact').style.display = 'none';
//     document.getElementById('info').style.display = 'block';
// }

// function redirectToIndexPage() {
//     document.getElementById('info').style.display = 'none';
//     document.getElementById('index').style.display = 'block';
// }



// commonScript.js

// Function to redirect to contact.html after 10 seconds// commonScript.js

// Function to redirect to contact.html after 10 seconds
function redirectToContactPage() {
    setTimeout(function () {
        window.location.href = 'contact.html';
    }, 10000); // 10000 milliseconds = 10 seconds
}

// Function to redirect to info.html
function redirectToInfoPage() {
    window.location.href = 'info.html';
}

// Function to redirect to index.html
function redirectToIndexPage() {
    window.location.href = 'index.html';
}

// Event listener for the submit button in contact.html
document.addEventListener('DOMContentLoaded', function () {
    var submitButton = document.getElementById('submitButton');
    
    if (submitButton) {
        submitButton.addEventListener('click', function () {
            // Call the function to redirect to info.html
            redirectToInfoPage();
        });
    }

    // Check if the current page is index.html before calling redirectToContactPage()
    if (window.location.pathname.endsWith('index.html')) {
        // Call the function to redirect to contact.html after 10 seconds
        redirectToContactPage();
    }
});
