document
  .getElementById("dark-mode-toggle")
  .addEventListener("click", function () {
    document.body.classList.toggle("dark-mode");
  });

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

  backToTopButton.addEventListener("click", function () {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
});

document.addEventListener("DOMContentLoaded", function () {
  let index = 0;
  const slides = document.querySelector(".slides");
  const slideWidth = document.querySelector(".carousel").clientWidth;

  const slide = () => {
    index++;
    if (index === slides.children.length / 2) {
      slides.style.transition = "none"; // Disable transition
      slides.style.transform = "translateX(0)"; // Reset position
      index = 0; // Reset index
      // Re-enable transition for normal slide movement
      setTimeout(() => {
        slides.style.transition = "all 0.5s ease";
      }, 50);
      // Skip this slide interval so it doesn't slide immediately
      return;
    }
    slides.style.transition = "all 0.5s ease"; // Enable transition
    slides.style.transform = `translateX(${-slideWidth * index}px)`; // Shift slides
  };

  setInterval(slide, 3000); // Change slide every 2 seconds
});

document.addEventListener("DOMContentLoaded", function () {
  var toggleButton = document.getElementById("toggleButton");
  var hiddenParagraphs = document.querySelectorAll(".text-container2 .hide");

  toggleButton.addEventListener("click", function () {
    if (hiddenParagraphs[0].classList.contains("hide")) {
      hiddenParagraphs.forEach(function (paragraph) {
        paragraph.classList.remove("hide");
      });
      toggleButton.textContent = "Show Less";
    } else {
      hiddenParagraphs.forEach(function (paragraph) {
        paragraph.classList.add("hide");
      });
      toggleButton.textContent = "Read More";
    }
  });
});

document.getElementById("getJoke").addEventListener("click", getJoke);

function getJoke() {
  fetch("https://icanhazdadjoke.com/", {
    headers: {
      Accept: "application/json",
    },
  })
    .then((response) => response.json())
    .then(
      (data) => (document.getElementById("joke").innerText = `${data.joke} 😂`)
    )
    .catch((error) => console.error(error));
}

// Load an initial joke
getJoke();



document
  .getElementById("getWeather")
  .addEventListener("click", function getWeather() {
    const city = document.getElementById("city").value;
    fetch(
      "http://api.openweathermap.org/data/2.5/weather?q=" +
        city +
        "&APPID=07762fc005a25e1ba052bb33aa8d12e5&units=metric"
    )
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        document.getElementById("weatherContainer").innerHTML = `
    <p>Temperature: ${data.main.temp}°C</p>
    <p>Weather: ${data.weather[0].description}</p>
  `;
      })
      .catch((error) => console.error("Error:", error));
  });

getWeather();

document.addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    event.preventDefault(); // Prevent the default behavior of the Enter key
    getWeather();
  }
});
