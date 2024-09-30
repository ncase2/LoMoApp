// Function to toggle themes for both the UI and the ArcGIS map
function toggleThemeMenu() {
  let themeMenu = document.querySelector('#theme-menu');

  if (!themeMenu) return;

  document.querySelectorAll('[data-bs-theme-value]').forEach(value => {
      value.addEventListener('click', () => {
          const theme = value.getAttribute('data-bs-theme-value');
          document.documentElement.setAttribute('data-bs-theme', theme);
          updateMapTheme(theme); // Update the map theme based on the selection
      });
  });
}
let isDarkMode = false; // Current theme status
// Function to update the map's basemap and the ArcGIS CSS based on the selected theme
function updateMapTheme(theme) {
  // Assuming 'dark' is the value for the dark mode
  const isDarkMode = theme === 'dark';
console.log(theme);
  // Update the ArcGIS CSS dynamically
  const cssLink = document.getElementById('arcgis-css');
  cssLink.href = isDarkMode 
      ? "https://js.arcgis.com/4.30/esri/themes/dark/main.css"
      : "https://js.arcgis.com/4.30/esri/themes/light/main.css";
  window.view.map.basemap = isDarkMode ? 'dark-gray-vector' : 'topo-vector';

  // Change the basemap according to the theme
  if (window.view) { // Ensure the view is loaded and accessible
  }
}

// Initialize the theme toggle menu
toggleThemeMenu();
