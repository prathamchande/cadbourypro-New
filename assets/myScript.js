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





