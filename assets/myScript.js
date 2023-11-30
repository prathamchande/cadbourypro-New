// Check if the user is accessing from a mobile portrait device

document.addEventListener("DOMContentLoaded", function () {
    const mobileContainer = document.querySelector(".mobile-container");
    const desktopMessage = document.querySelector(".desktop-message");

    function updateDisplay() {
      console.log("Window width:", window.innerWidth);
      console.log("Window height:", window.innerHeight);

      if (isMobile()) {
        console.log("Switching to mobile view.");
        desktopMessage.style.display = "none";
        mobileContainer.style.display = "block";
      } else {
        console.log("Switching to desktop view.");
        mobileContainer.style.display = "none";
        desktopMessage.style.display = "block";
      }
    }

    // Initial display check
    updateDisplay();

    // Update display on window resize
    window.addEventListener("resize", function () {
      console.log("Window resized.");
      updateDisplay();
    });

    function isMobile() {
      const windowWidth = window.innerWidth;
      const windowHeight = window.innerHeight;

      return (
        windowWidth <= 640 || // Width less than or equal to 640 pixels
        (windowWidth < windowHeight && windowHeight <= 640) // Portrait mode with height less than or equal to 640 pixels
        // || /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)
      );
    }
  });


  //for otp input validation
let digitValidate = function(ele){
    console.log(ele.value);
    ele.value = ele.value.replace(/[^0-9]/g,'');
}

//otp input tab change
let tabChange = function(val){
    let ele = document.querySelectorAll('.otpInput');
    
    // Check if the current input element exists
    if (ele[val]) {
        if(ele[val-1].value != ''){
            ele[val].focus();
        } else if(ele[val-1].value == '' && ele[val-2]) {
            ele[val-2].focus();
        }
    }
}




/////////////////////////////////////////////////////////////////////////


//header script
document.addEventListener("DOMContentLoaded", function () {
    var hamburger = document.getElementById("hamburger");
    var closeBtn = document.getElementById("close");
    var menuItems = document.querySelectorAll('#menuWrapper ul li');
  
    if (hamburger) {
      hamburger.addEventListener("click", function (event) {
        console.log("header");
        event.preventDefault();
        document.getElementById("nav").classList.add("showNav");
        var winHeight = window.outerHeight;
        // Set the window height of the mobile menu when engaged!
        document.getElementById('menuWrapper').style.height = winHeight + 'px';
      });
    }
  
    if (closeBtn) {
      closeBtn.addEventListener("click", function (event) {
        event.preventDefault();
        document.getElementById("nav").classList.remove("showNav");
        // Set the window height of the mobile menu when not engaged!
        document.getElementById('menuWrapper').style.height = 'auto';
      });
    }
  
    // On hover apply a class to the dropdown '.hov'
    menuItems.forEach(function (item) {
      item.addEventListener('mouseover', function () {
        var submenu = this.querySelector('ul');
        // check if it has a class of .hov 
        if (submenu.classList.contains('hov')) {
          submenu.classList.remove('hov');
        } else {
          submenu.classList.add('hov');
        }
      });
    });
  });
  


/////////////////////////////////////////////////////////////////////////

// Navigation code for pages

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
    }else if (e == "design") {
        window.location.href = "system.html";
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
//all contact page script here


if (window.location.pathname.endsWith("contact.html")) {

//modal js/////////////
 

  // Get the modal
  var modal = document.getElementById("myModal");

  // Get the buttons that open the modals
  var btn1 = document.getElementById("myBtn1");
  var btn2 = document.getElementById("myBtn2");
  var btn3 = document.getElementById("myBtn3");

  // Get all modal content elements
  var modalContents = document.querySelectorAll('.modal-content');

  // When the user clicks the button, open the modal with the corresponding content
  btn1.onclick = function() {
    showModalWithContent('firstModal');
  }

  btn2.onclick = function() {
    showModalWithContent('secondModal');
  }

  btn3.onclick = function() {
    showModalWithContent('thirdModal');
  }

  function hideModal() {
    modal.style.display = "none";
  }

  // Function to show modal with the specified content
  function showModalWithContent(contentClass) {
    modalContents.forEach(function(modalContent) {
      modalContent.style.display = 'none';
    });

    var selectedContent = document.querySelector('.' + contentClass);
    if (selectedContent) {
      selectedContent.style.display = 'block';
      modal.style.display = "block";
    }
  }

  // Get all close buttons
  var closeButtons = document.getElementsByClassName("close");

  // Iterate through close buttons and add click event listener
  for (var i = 0; i < closeButtons.length; i++) {
    closeButtons[i].onclick = function() {
      modal.style.display = "none";
    }
  }

  // When the user clicks anywhere outside of the modal, close it
//   window.onclick = function(event) {
//     if (event.target == modal) {
//       modal.style.display = "none";
//     }
//   }




/////////////////////////////////////////////////////////////////////////

// inputNudg error msgjs 
function showNudgePopup(message) {
    var nudgePopup = document.getElementById('nudgePopup');
    nudgePopup.textContent = message;
    nudgePopup.style.display = 'block';

    // Hide nudge popup after 3 seconds
    setTimeout(function () {
      nudgePopup.style.display = 'none';
    }, 3000);
}

function hideNudgePopup() {
    var nudgePopup = document.getElementById('nudgePopup');
    nudgePopup.style.display = 'none';
}


/////////////////////////////////////////////////////////////////////////

//otp validation
function validateOtpAndNavigate() {
    var otpInputs = document.querySelectorAll('.otpInput');
    var otpNudgeAlert = document.getElementById('alertOtpValidationID');

    var otp = "";
    
    otpInputs.forEach(function(input) {
        otp += input.value;
    });

    // Validate the OTP (you can replace this with your actual validation logic)
    if (otp === '1234') {
        hideModal(); // Function to hide the modal
        navigate('secondSubmit');
    } else {
        // Show the alert
    otpNudgeAlert.style.display = 'block';

    // Hide the alert after 3 seconds
    setTimeout(function() {
        otpNudgeAlert.style.display = 'none';
    }, 3000);
    }
}



// forms validations
function validateAndNavigate(submitType) {
    var usernameInput = document.getElementById('username');
    var mobileNumberInput = document.getElementById('mobileNumber');
    var vehicle1Checkbox = document.getElementById('vehicle1');
    var vehicle2Checkbox = document.getElementById('vehicle2');
    var selectedCar = document.getElementById('cars');

// username mobile number opt validation on first submit button
    if (submitType === 'firstSubmit') {
    // Validate username
    if (!usernameInput.value) {
        showNudgePopup("Username cannot be empty.");
        return;
    } else if (/[^a-zA-Z]/.test(usernameInput.value)) {
        showNudgePopup("You are not allowed numbers or special characters in the username.");
        return;
    } else {
        hideNudgePopup();
    }

    // Validate mobile number
    if (!mobileNumberInput.value) {
        showNudgePopup("Mobile number cannot be empty.");
        return;
    } else if (!/^\d+$/.test(mobileNumberInput.value)) {
        showNudgePopup("You are not allowed any characters in the mobile number.");
        return;
    } else {
        hideNudgePopup();
    }

    // Check if both checkboxes are checked
    if (!vehicle1Checkbox.checked || !vehicle2Checkbox.checked) {
        showNudgePopup("Please check both checkboxes before proceeding.");
        return;
    } else {
        hideNudgePopup();
    }

        // Check if any of the fields are filled
        if (mobileNumberInput.value || usernameInput.value || vehicle1Checkbox.checked || vehicle2Checkbox.checked) {
            showModalWithContent('firstModal');
            return;
        }
    }

    // Validate selected car only when moving from the second to the third block
    if (submitType === 'secondSubmit' && selectedCar.value === "") {
        showNudgePopup("Please select a car before proceeding.");
        return;
    } else {
        hideNudgePopup();
    }

    // If all validations pass, proceed with navigation
    navigate(submitType);
}



/////////////////////////////////////////////////////////////////////////


//impAll middle content handling here=%%%%%%%%%%%%%%%%  
var currentContainerIndex = 0;
var containerIds = ['firstMainContainerID', 'secondMainContainerID', 'thirdMainContainerID'];
var progressBarIds = ['firstProgBar', 'secondProgBar', 'thirdProgBar'];
var buttonIds = ['firstMainContBtnID', 'secondMainContBtnID', 'thirdMainContBtnID'];

function navigate(submitType) {
    
  var currentContainer = document.querySelector('.activeCont');
  var currentButton = document.querySelector('.btnBlockShow');
  var currentProgressBar = document.querySelector('.activeProg');

  currentContainer.classList.remove('activeCont');
  currentButton.classList.remove('btnBlockShow');
  currentButton.classList.add('btnBlockHide');
  currentContainer.classList.add('hiddenCont');

  var nextContainerIndex;
  if (submitType === 'firstSubmit') {
    nextContainerIndex = (currentContainerIndex + 1) % containerIds.length;
  } else if (submitType === 'secondSubmit') {
    nextContainerIndex = (currentContainerIndex + 1) % containerIds.length;
  } else if (submitType === 'thirdSubmit') {
    nextContainerIndex = (currentContainerIndex + 1) % containerIds.length;
  }

  currentContainerIndex = nextContainerIndex;

  var nextContainer = document.getElementById(containerIds[nextContainerIndex]);
  var nextButton = document.getElementById(buttonIds[nextContainerIndex]);
  var nextProgressBar = document.getElementById(progressBarIds[nextContainerIndex]);

  nextContainer.classList.add('hiddenCont');

  if (!nextContainer.classList.contains('activeCont')) {
    nextContainer.classList.add('activeCont');
  }

  if (!nextButton.classList.contains('btnBlockShow')) {
    nextButton.classList.add('btnBlockShow');
  }

  if (nextButton.classList.contains('btnBlockHide')) {
    nextButton.classList.remove('btnBlockHide');
  }

  currentProgressBar.classList.remove('activeProg');
  currentProgressBar.classList.add('doneProg');

  nextProgressBar.classList.add('activeProg');

  var allDone = Array.from(document.querySelectorAll('.progressBarWrapper li')).every(function (el) {
    return el.classList.contains('doneProg');
  });

  if (allDone) {
    Array.from(document.querySelectorAll('.progressBarWrapper li')).forEach(function (el) {
      el.classList.remove('doneProg');
      el.classList.remove('activeProg');
    });
    document.getElementById('firstProgBar').classList.add('activeProg');
  }
}






//navigate function end here  
}

   
/////////////////////////////////////////////////////////////////////////

//text rotation

if (window.location.pathname.endsWith("index.html")) {



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


}

/////////////////////////////////////////////////////////////////////////

/////////////////////////////////////////////////////////////////////////

/////////////////////////////////////////////////////////////////////////

/////////////////////////////////////////////////////////////////////////

/////////////////////////////////////////////////////////////////////////

/////////////////////////////////////////////////////////////////////////

/////////////////////////////////////////////////////////////////////////
