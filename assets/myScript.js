// Check if the user is accessing from a mobile portrait device

document.addEventListener("DOMContentLoaded", function () {
  const mobileContainer = document.querySelector(".mobile-container");
  const desktopMessage = document.querySelector(".desktop-message");

  function updateDisplay() {
    //console.log("Window width:", window.innerWidth);
    //console.log("Window height:", window.innerHeight);

    if (isMobile()) {
      // console.log("Switching to mobile view.");
      desktopMessage.style.display = "none";
      mobileContainer.style.display = "block";
    } else {
      //  console.log("Switching to desktop view.");
      mobileContainer.style.display = "none";
      desktopMessage.style.display = "block";
    }
  }

  // Initial display check
  updateDisplay();

  // Update display on window resize
  window.addEventListener("resize", function () {
    // console.log("Window resized.");
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
let digitValidate = function (ele) {
  // console.log(ele.value);
  ele.value = ele.value.replace(/[^0-9]/g, "");
};

//otp input tab change
let tabChange = function (val) {
  let ele = document.querySelectorAll(".otpInput");

  // Check if the current input element exists
  if (ele[val]) {
    if (ele[val - 1].value != "") {
      ele[val].focus();
    } else if (ele[val - 1].value == "" && ele[val - 2]) {
      ele[val - 2].focus();
    }
  }
};

/////////////////////////////////////////////////////////////////////////

//header script
document.addEventListener("DOMContentLoaded", function () {
  var hamburger = document.getElementById("hamburger");
  var closeBtn = document.getElementById("close");
  var menuItems = document.querySelectorAll("#menuWrapper ul li");

  if (hamburger) {
    hamburger.addEventListener("click", function (event) {
      //console.log("header");
      event.preventDefault();
      document.getElementById("nav").classList.add("showNav");
      var winHeight = window.outerHeight;
      // Set the window height of the mobile menu when engaged!
      document.getElementById("menuWrapper").style.height = winHeight + "px";
    });
  }

  if (closeBtn) {
    closeBtn.addEventListener("click", function (event) {
      event.preventDefault();
      document.getElementById("nav").classList.remove("showNav");
      // Set the window height of the mobile menu when not engaged!
      document.getElementById("menuWrapper").style.height = "auto";
    });
  }

  // On hover apply a class to the dropdown '.hov'
  menuItems.forEach(function (item) {
    item.addEventListener("mouseover", function () {
      var submenu = this.querySelector("ul");
      // check if it has a class of .hov
      if (submenu.classList.contains("hov")) {
        submenu.classList.remove("hov");
      } else {
        submenu.classList.add("hov");
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
  } else if (e == "design") {
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
      document.querySelector(".spalshBody").classList.add("loaded");
    }, 100);
  } else if (window.location.pathname.endsWith("contact.html")) {
    document.querySelector(".contactBody").classList.add("loaded");
  } else if (window.location.pathname.endsWith("info.html")) {
    document.querySelector(".infoBody").classList.add("loaded");
  } else if (window.location.pathname.endsWith("system.html")) {
    document.querySelector(".designSystem").classList.add("loaded");
  } else {
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
  var modalContents = document.querySelectorAll(".modal-content");

  // When the user clicks the button, open the modal with the corresponding content
  btn1.onclick = function () {
    showModalWithContent("firstModal");
  };

  btn2.onclick = function () {
    showModalWithContent("secondModal");
  };

  btn3.onclick = function () {
    showModalWithContent("thirdModal");
  };

  function hideModal() {
    modal.style.display = "none";
  }

  // Function to show modal with the specified content
  function showModalWithContent(contentClass) {
    modalContents.forEach(function (modalContent) {
      modalContent.style.display = "none";
    });

    var selectedContent = document.querySelector("." + contentClass);
    if (selectedContent) {
      selectedContent.style.display = "block";
      modal.style.display = "block";
    }
  }

  // Get all close buttons
  var closeButtons = document.getElementsByClassName("close");

  // Iterate through close buttons and add click event listener
  for (var i = 0; i < closeButtons.length; i++) {
    closeButtons[i].onclick = function () {
      modal.style.display = "none";
    };
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
    var nudgePopup = document.getElementById("nudgePopup");
    nudgePopup.textContent = message;
    nudgePopup.style.display = "block";

    // Hide nudge popup after 3 seconds
    setTimeout(function () {
      nudgePopup.style.display = "none";
    }, 3000);
  }

  function hideNudgePopup() {
    var nudgePopup = document.getElementById("nudgePopup");
    nudgePopup.style.display = "none";
  }

  /////////////////////////////////////////////////////////////////////////

  //otp validation
  function validateOtpAndNavigate() {
    var otpInputs = document.querySelectorAll(".otpInput");
    var otpNudgeAlert = document.getElementById("alertOtpValidationID");

    var otp = "";

    otpInputs.forEach(function (input) {
      otp += input.value;
    });

    // Validate the OTP (you can replace this with your actual validation logic)
    if (otp === "1234") {
      hideModal(); // Function to hide the modal
      navigate("secondSubmit");
    } else {
      // Show the alert
      otpNudgeAlert.style.display = "block";

      // Hide the alert after 3 seconds
      setTimeout(function () {
        otpNudgeAlert.style.display = "none";
      }, 3000);
    }
  }

  // forms validations
  function validateAndNavigate(submitType) {
    var usernameInput = document.getElementById("username");
    var mobileNumberInput = document.getElementById("mobileNumber");
    var emailInput = document.getElementById("email");
    var vehicle1Checkbox = document.getElementById("agree1");
    var vehicle2Checkbox = document.getElementById("agree2");
    var selectedlovedNameId = document.getElementById("lovedNameId");
    var selectedlovedAge = document.getElementById("lovedAge");
    var selectedlovedGender = document.getElementById("lovedGender");

    // username mobile number opt validation on first submit button
    if (submitType === "firstSubmit") {
      // Validate mobile number
      if (!mobileNumberInput.value) {
        showNudgePopup("Mobile number cannot be empty.");
        return;
      } else if (!/^\d+$/.test(mobileNumberInput.value)) {
        showNudgePopup(
          "You are not allowed any characters in the mobile number."
        );
        return;
      } else if (mobileNumberInput.value.length !== 10) {
        showNudgePopup("Mobile number should be 10 digits.");
        return;
      } else {
        hideNudgePopup();
      }

      // Validate username
      if (!usernameInput.value) {
        showNudgePopup("Username cannot be empty.");
        return;
      } else if (/[^a-zA-Z]/.test(usernameInput.value)) {
        showNudgePopup(
          "You are not allowed numbers or special characters in the username."
        );
        return;
      } else {
        hideNudgePopup();
      }

      // Validate email
      if (!emailInput.value) {
        showNudgePopup("Email cannot be empty.");
        return;
      } else if (!/\S+@\S+\.\S+/.test(emailInput.value)) {
        showNudgePopup("Invalid email format.");
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
      if (
        mobileNumberInput.value ||
        usernameInput.value ||
        emailInput.value ||
        vehicle1Checkbox.checked ||
        vehicle2Checkbox.checked
      ) {
        showModalWithContent("firstModal");
        return;
      }
    }

    // Validate second block only when moving from the second to the third block
    if (submitType === "secondSubmit") {
      if (selectedlovedNameId.value === "") {
        showNudgePopup("Please select a Loved Name please.");
        return;
      } else {
        hideNudgePopup();
      }
      if (selectedlovedAge.value === "") {
        showNudgePopup("Please select a Age");
        return;
      } else {
        hideNudgePopup();
      }
      if (selectedlovedGender.value === "") {
        showNudgePopup("Please select a Gender");
        return;
      } else {
        hideNudgePopup();
      }
    }

    // If all validations pass, proceed with navigation
    navigate(submitType);
  }

  /////////////////////////////////////////////////////////////////////////

  //impAll middle content handling here=%%%%%%%%%%%%%%%%
  var currentContainerIndex = 0;
  var containerIds = [
    "firstMainContainerID",
    "secondMainContainerID",
    "thirdMainContainerID",
    "fourthMainContainerID",
    "fifthMainContainerID",
    "sixthMainContainerID",
    "seventhMainContainerID",
  ];
  var progressBarIds = [
    "firstProgBar",
    "secondProgBar",
    "thirdProgBar",
    "fourthProgBar",
    "fifthProgBar",
    "sixthProgBar",
    "seventhProgBar",
  ];
  var buttonIds = [
    "firstMainContBtnID",
    "secondMainContBtnID",
    "thirdMainContBtnID",
    "fourthMainContBtnID",
    "fifthMainContBtnID",
    "sixthMainContBtnID",
    "seventhMainContBtnID",
  ];

  function navigate(submitType) {
    var currentContainer = document.querySelector(".activeCont");
    var currentButton = document.querySelector(".btnBlockShow");
    var currentProgressBar = document.querySelector(".activeProg");

    currentContainer.classList.remove("activeCont");
    currentButton.classList.remove("btnBlockShow");
    currentButton.classList.add("btnBlockHide");
    currentContainer.classList.add("hiddenCont");

    var nextContainerIndex;
    if (submitType === "firstSubmit") {
      nextContainerIndex = (currentContainerIndex + 1) % containerIds.length;
    } else if (submitType === "secondSubmit") {
      nextContainerIndex = (currentContainerIndex + 1) % containerIds.length;
    } else if (submitType === "thirdSubmit") {
      nextContainerIndex = (currentContainerIndex + 1) % containerIds.length;
    } else if (submitType === "fourthSubmit") {
      nextContainerIndex = (currentContainerIndex + 1) % containerIds.length;
    } else if (submitType === "fifthSubmit") {
      nextContainerIndex = (currentContainerIndex + 1) % containerIds.length;
    } else if (submitType === "sixthSubmit") {
      nextContainerIndex = (currentContainerIndex + 1) % containerIds.length;
    } else if (submitType === "seventhSubmit") {
      nextContainerIndex = (currentContainerIndex + 1) % containerIds.length;
    }

    currentContainerIndex = nextContainerIndex;

    var nextContainer = document.getElementById(
      containerIds[nextContainerIndex]
    );
    var nextButton = document.getElementById(buttonIds[nextContainerIndex]);
    var nextProgressBar = document.getElementById(
      progressBarIds[nextContainerIndex]
    );
    nextContainer.classList.add("hiddenCont");

    // Reload the page before navigating to the next container if coming from seventh
    if (submitType === "seventhSubmit") {
      // window.location.reload();
      window.location.href = "index.html";
      return; // Stop further execution
    }
    //   if (submitType === "fifthSubmit") {
    //     // window.location.reload();

    //     setTimeout(() => {
    //         document.getElementById("forGenrateSong").classList.remove("visiNone");
    //       }, 1000);

    //      return; // Stop further execution
    //    }
    var childElementsFirst =
      nextContainer.querySelectorAll(".imgWallpaperWrap");
    var childElementsSecond = nextContainer.querySelectorAll(".bgWll");
    var childElementsThird = nextContainer.querySelectorAll(".bagWall");

    applyClassToChildElements(childElementsFirst, "animate");
    applyClassToChildElements(childElementsSecond, "now");
    applyClassToChildElements(childElementsThird, "check");

    function applyClassToChildElements(childElements, className) {
      if (!childElements || childElements.length === 0) {
        console.warn("No matching elements found.");
        return;
      }

      childElements.forEach(function (childElement) {
        setTimeout(() => {
          childElement.classList.toggle(className);
        }, 100);
      });
    }

    if (!nextContainer.classList.contains("activeCont")) {
      nextContainer.classList.add("activeCont");
    }

    if (!nextButton.classList.contains("btnBlockShow")) {
      nextButton.classList.add("btnBlockShow");
    }

    if (nextButton.classList.contains("btnBlockHide")) {
      nextButton.classList.remove("btnBlockHide");
    }

    currentProgressBar.classList.remove("activeProg");
    currentProgressBar.classList.add("doneProg");

    nextProgressBar.classList.add("activeProg");

    var allDone = Array.from(
      document.querySelectorAll(".progressBarWrapper li")
    ).every(function (el) {
      return el.classList.contains("doneProg");
    });

    if (allDone) {
      Array.from(document.querySelectorAll(".progressBarWrapper li")).forEach(
        function (el) {
          el.classList.remove("doneProg");
          el.classList.remove("activeProg");
        }
      );
      document.getElementById("firstProgBar").classList.add("activeProg");
    }
  }

  //navigate function end here
}
//contact.html js end here
/////////////////////////////////////////////////////////////////////////

//text rotation

if (window.location.pathname.endsWith("index.html")) {
  let words = document.querySelectorAll(".word");

  words.forEach((word) => {
    let letters = word.textContent.split("");
    word.textContent = "";
    letters.forEach((letter) => {
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
    let nextWord =
      currentWordIndex === maxWordIndex
        ? words[0]
        : words[currentWordIndex + 1];

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

    currentWordIndex =
      currentWordIndex === maxWordIndex ? 0 : currentWordIndex + 1;
  };

  rotateText();
  setInterval(rotateText, 4000);
}

/////////////////////////////////////////////////////////////////////////
//testing purpose
function navForIndex() {
  window.location.href = "index.html";
}
/////////////////////////////////////////////////////////////////////////
function toggleMoodVibe(clickedElement) {
  // Remove the 'selected' class from all elements with class 'imgBgVib'
  var allImgBgVibElements = document.querySelectorAll(".imgBgVib");
  var allImgBgVibElements2 = document.querySelectorAll(".imgBgVib2");
  var allImgBgVibElements3 = document.querySelectorAll(".imgBgVib3");

  if (allImgBgVibElements) {
    allImgBgVibElements.forEach(function (element) {
      element.classList.remove("selected");
    });
  } else if (allImgBgVibElements2) {
    allImgBgVibElements.forEach(function (element) {
      element.classList.remove("selected");
    });
  } else if (allImgBgVibElements3) {
    allImgBgVibElements.forEach(function (element) {
      element.classList.remove("selected");
    });
  }

  // Add the 'selected' class only to the clicked element
  clickedElement.classList.add("selected");
}

function toggleMoodVibe(clickedElement) {
  // Get the parent block of the clicked element
  var parentBlock = clickedElement.closest(".vibeBlock");

  // Remove the 'selected' class from all elements within the same block
  var allElements = parentBlock.querySelectorAll(
    ".imgBgVib, .imgBgVib2, .imgBgVib3"
  );
  allElements.forEach(function (element) {
    element.classList.remove("selected");
  });

  // Add the 'selected' class only to the clicked element
  clickedElement.classList.add("selected");
}

/////////////////////////////////////////////////////////////////////////
// Get the fifthMainContBtn element
// Function to handle changes in the "btnBlockShow" class
function handleClassChange(mutations) {
  mutations.forEach(function (mutation) {
    if (
      mutation.attributeName === "class" &&
      mutation.target.classList.contains("btnBlockShow")
    ) {
      // Add the footerBg class to mainFooter
      document.getElementById("footerId").classList.add("footerBg");
    } else {
      // Remove the footerBg class from mainFooter
      document.getElementById("footerId").classList.remove("footerBg");
    }
  });
}

// Create a MutationObserver to observe changes in the "btnBlockShow" class
var observer = new MutationObserver(handleClassChange);

// Target the element with the ID "fifthMainContBtnID"
var targetElement = document.getElementById("thirdMainContBtnID");

// Configure the observer to watch for attribute changes
var observerConfig = { attributes: true };

// Start observing the target element
observer.observe(targetElement, observerConfig);
/////////////////////////////////////////////////////////////////////////

var answerMoreButton = document.getElementById('answrMoreId');
function scrollContainerDown() {
  var container = document.getElementById("tellMoreID");
  container.scrollTop = container.scrollHeight;
  // Toggle classes on the Answer More button
  answerMoreButton.classList.remove("answerMore");
  answerMoreButton.classList.add("deactiveBtn");

  // Disable the button after it has been clicked
  answerMoreButton.disabled = true;
}
/////////////////////////////////////////////////////////////////////////
function visbil() {
    // Set a timeout to remove the "noVisible" class after 10 seconds
    setTimeout(function() {
        var forGenrateSongButton = document.getElementById('forGenrateSong');
        forGenrateSongButton.classList.remove('visiNone');
    }, 15000);
}
/////////////////////////////////////////////////////////////////////////
function animationWork() {
    var animationElement = document.getElementById('animationGerratID');
    var animationClasses = ['frMusic1', 'frMusic2', 'frMusic3', 'frMusic4'];
    var currentIndex = 0;
    var duration = 100; // Total duration in seconds
    var interval = 2000; // Change class every 5 seconds

    var animationInterval = setInterval(function () {
        // Change the class
        animationElement.className = 'imgWallpaperWrap ' + animationClasses[currentIndex];

        // Increment index for the next class
        currentIndex++;

        // Reset index when it reaches the end of the classes array
        if (currentIndex === animationClasses.length) {
            currentIndex = 0;
        }

        // Stop the interval after the specified duration
        duration -= 5;
        if (duration <= 0) {
            clearInterval(animationInterval);
        }
    }, interval);
} 

/////////////////////////////////////////////////////////////////////////
// animationWork()