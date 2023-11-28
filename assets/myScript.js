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
    window.location.href = "contact.html";

    //add class after sometime for display none main
    // setTimeout(() => {
    //     document.querySelector('.mainWallpaper').classList.add('dsNone');
    //         }, 100); 


  }, 10000); // 10000 milliseconds = 10 seconds
}

// Function to redirect to info.html
function navigate(e) {
  if (e == "home") {
    window.location.href = "index.html";
  } else if (e == "info") {
    window.location.href = "info.html";
  } else if (e == "contact") {
    window.location.href = "contact.html";
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
  } else if (window.location.pathname.endsWith("system.html")) {
    document.querySelector('.designSystem').classList.add('loaded');
   }
  else{
    return;
  //  document.body.classList.remove("loaded");
  }
});

/////////////////////////////////////////////////////////////////////////
//text rotation

let words = document.querySelectorAll(".word");

words.forEach(word => {
    let letters = word.textContent.split("");
    word.textContent = "";
    letters.forEach(letter => {
        let span = document.createElement("span");
        span.textContent = letter;
        span.className = "letter";
        word.append(span);
    });
});

let currentWordIndex = 0;
let maxWordIndex = words.length - 1;
words[currentWordIndex].style.opacity = "1";

let rotateText = () => {
    let currentWord = words[currentWordIndex];
    let nextWord = currentWordIndex === maxWordIndex ? words[0] : words[currentWordIndex + 1];

    // Rotate out letters of the current word
    Array.from(currentWord.children).forEach((letter, i) => {
        setTimeout(() => {
            letter.className = "letter out";
        }, i * 80);
    });

    // Reveal and rotate in letters of the next word
    nextWord.style.opacity = "1";
    Array.from(nextWord.children).forEach((letter, i) => {
        letter.className = "letter behind";
        setTimeout(() => {
            letter.className = "letter in";
        }, 340 + i * 80);
    });

    currentWordIndex = currentWordIndex === maxWordIndex ? 0 : currentWordIndex + 1;
};

rotateText();
setInterval(rotateText, 4000);



/////////////////////////////////////////////////////////////////////////

/////////////////////////////////////////////////////////////////////////

/////////////////////////////////////////////////////////////////////////

/////////////////////////////////////////////////////////////////////////

/////////////////////////////////////////////////////////////////////////

/////////////////////////////////////////////////////////////////////////

/////////////////////////////////////////////////////////////////////////

/////////////////////////////////////////////////////////////////////////

/////////////////////////////////////////////////////////////////////////
