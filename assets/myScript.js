// Check if the user is accessing from a mobile device
function isMobile() {
  return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
    navigator.userAgent
  );
}

document.addEventListener("DOMContentLoaded", function () {
  const mobileContainer = document.querySelector(".mobile-container");
  const desktopMessage = document.querySelector(".desktop-message");

  if (isMobile()) {
    mobileContainer.style.display = "block";
  } else {
    desktopMessage.style.display = "block";
  }
});

/////////////////////////////////////////////////////////////////////////

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

/////////////////////////////////////////////////////////////////////////
// Navigation code

function redirectToContactPage() {
  setTimeout(function () {
    // window.location.href = "contact.html";
  }, 10000); // 10000 milliseconds = 10 seconds
}

// Function to redirect to info.html
function navigate(e) {
  if (e == "home") {
    window.location.href = "index.html";
  } else if (e == "info") {
    window.location.href = "info.html";
  }
}

// Event listener for the submit button in contact.html
document.addEventListener("DOMContentLoaded", function () {
  // Check if the current page is index.html before calling redirectToContactPage()
  if (window.location.pathname.endsWith("index.html")) {
    // Call the function to redirect to contact.html after 10 seconds
    redirectToContactPage();
    setTimeout(() => {
             
        document.querySelector('.spalshBody').classList.add('loaded');
            }, 100); 
  } else if (window.location.pathname.endsWith("contact.html")) {
    document.querySelector('.contactBody').classList.add('loaded');
  } else if (window.location.pathname.endsWith("info.html")) {
   document.querySelector('.infoBody').classList.add('loaded');
  }
  else{
    return;
  //  document.body.classList.remove("loaded");
  }
});

/////////////////////////////////////////////////////////////////////////

/////////////////////////////////////////////////////////////////////////

/////////////////////////////////////////////////////////////////////////

/////////////////////////////////////////////////////////////////////////

/////////////////////////////////////////////////////////////////////////

/////////////////////////////////////////////////////////////////////////

/////////////////////////////////////////////////////////////////////////

/////////////////////////////////////////////////////////////////////////

/////////////////////////////////////////////////////////////////////////

/////////////////////////////////////////////////////////////////////////
