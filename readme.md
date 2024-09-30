# LoMo App

## Overview
The LoMo App is developed by Nicholas Case at WyGISC, School of Computing, University of Wyoming. This application demonstrates how to utilize the ArcGIS API for JavaScript to display raster data from a Cloud Optimized GeoTIFF (COG) alongside a GeoJSON layer representing river data. The app includes various UI enhancements using Bootstrap and Bootswatch to provide a clean and responsive user experience.

## Setting Up Your Development Environment

### Create Project Structure
- Make a new folder named `LoMoApp`.
- Open this folder with Visual Studio Code or your preferred IDE.

### Bootstrap Setup
- Get the Bootstrap template from the [Bootstrap Getting Started Guide](https://getbootstrap.com/docs/5.3/getting-started/introduction/) and paste it into a new file named `index.html`.
- Choose a theme from [Bootswatch](https://bootswatch.com/); for example, [Simplex](https://bootswatch.com/simplex/).

### Organize Styles and Scripts
- Inside `LoMoApp`, create a folder named `scripts`, then inside `scripts`, create two more folders named `css` and `js`.
- Download the CSS from Bootswatch and save it in the `css` folder. Update the `<link>` tag in your HTML to reference this local CSS file instead of the CDN.

### Configure the Navbar, Container, and Footer
- Add the navbar, container, and footer elements to `index.html` following the Bootstrap documentation.

### JavaScript for Theme Adjustment
- Create a new file in the `js` folder named `app.js`. 
- Add JavaScript to handle theme switching based on Bootswatch documentation and include a `<script>` tag in `index.html` referring to this file.

### Displaying the Map
- Follow the [ArcGIS tutorial to display a map](https://developers.arcgis.com/javascript/latest/tutorials/display-a-map/). Use `topo-vector` as the basemap to avoid the need for an API key.

### Add the COG Layer
- Reference the [documentation on adding a COG layer using ImageryTileLayer](https://developers.arcgis.com/javascript/latest/sample-code/layers-imagerytilelayer-cog/).

### Enhance Visualization Using ClassBreakRenderer
- Implement a ClassBreakRenderer to style the COG layer. Documentation available [here](https://developers.arcgis.com/javascript/latest/api-reference/esri-renderers-ClassBreaksRenderer.html).

### Add GeoJSON Layer
- Integrate the GeoJSON layer to display river data using the [GeoJSONLayer API reference](https://developers.arcgis.com/javascript/latest/api-reference/esri-layers-GeoJSONLayer.html).

### Additional UI Widgets
- Integrate additional widgets like ScaleBar, Compass, Legend, and Basemap Gallery for enhanced interactivity and usability.
  - [ScaleBar](https://developers.arcgis.com/javascript/latest/api-reference/esri-widgets-ScaleBar.html)
  - [Compass](https://developers.arcgis.com/javascript/latest/api-reference/esri-widgets-Compass.html)
  - [Legend](https://developers.arcgis.com/javascript/latest/api-reference/esri-widgets-Legend.html)
  - [Basemap Gallery](https://developers.arcgis.com/javascript/latest/api-reference/esri-widgets-BasemapGallery.html)
  - [Expand](https://developers.arcgis.com/javascript/latest/api-reference/esri-widgets-Expand.html) widget used with the Basemap Gallery.

## Development Notes
This application is designed to be straightforward for GIS professionals new to web development. Comments within the code provide further guidance on the functionality and customization options.
