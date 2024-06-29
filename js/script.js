const themeToggles = document.querySelectorAll(".theme-toggle");

  themeToggles.forEach((btn) => {
    btn.addEventListener("click", function () {
    // Add theme-transition class for smooth transitions
      document.documentElement.classList.add("theme-transition");
    // Retrieve the current theme and determine the target theme
      let currentTheme = document.documentElement.getAttribute("data-theme");
      let targetTheme = (currentTheme === "light") ? "dark" : "light";
    // Remove theme-transition class after a short delay
      window.setTimeout(function () {
          document.documentElement.classList.remove("theme-transition");
      }, 50);
    // Set the data-theme attribute and store in local storage
      document.documentElement.setAttribute("data-theme", targetTheme);
    });
  });

const settings = { theme: 'targetTheme', font: 'targetFont' };
localStorage.setItem('settings', JSON.stringify(settings));