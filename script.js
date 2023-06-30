document
  .getElementById("dark-mode-toggle")
  .addEventListener("click", function () {
    document.body.classList.toggle("dark-mode");
  });

// You can add similar event listeners for color-blind-toggle and font-size-toggle
document
  .getElementById("font-size-toggle")
  .addEventListener("click", function () {
    document.body.classList.toggle("larger-font");
  });

document
  .getElementById("color-blind-toggle")
  .addEventListener("click", function () {
    document.body.classList.toggle("color-blind-mode");
  });

document
  .getElementById("hamburger-menu")
  .addEventListener("click", function () {
    var navLinks = document.getElementById("nav-links");
    if (navLinks.style.display === "block") {
      navLinks.style.display = "none";
    } else {
      navLinks.style.display = "block";
    }
  });

window.addEventListener("scroll", function () {
  const myNameElement = document.getElementById("myName");

  // You can set a scroll threshold if you want.
  if (window.scrollY > 50) {
    myNameElement.classList.add("colorChange");
  } else {
    myNameElement.classList.remove("colorChange");
  }
});


document
  .getElementById("playAudioButton")
  .addEventListener("click", function () {
    var audio = document.getElementById("greetingAudio");
    audio.play();
  });





document.addEventListener("DOMContentLoaded", function () {
  var backToTopButton = document.getElementById("back-to-top");

  // When the user scrolls down 20px from the top, show the button
  window.addEventListener("scroll", function () {
    if (
      document.body.scrollTop > 20 ||
      document.documentElement.scrollTop > 20
    ) {
      backToTopButton.style.display = "block";
    } else {
      backToTopButton.style.display = "none";
    }
  });

  // When the user clicks on the button, scroll to the top of the document
  backToTopButton.addEventListener("click", function () {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
});



