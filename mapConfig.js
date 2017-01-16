var bounds = new L.LatLngBounds(new L.LatLng(-85, -200), new L.LatLng(85, 250));
var map = L.map('map', {
    attributionControl: false,
    maxBounds: bounds,
    maxBoundsViscosity: 0.4,
}).setView([49.2827, -123.1207], 13);
// disable double click to zoom
map.doubleClickZoom.disable();
map.options.minZoom = 3;

var roads = L.gridLayer.googleMutant({
    type: 'roadmap' // valid values are 'roadmap', 'satellite', 'terrain' and 'hybrid'
}).addTo(map);