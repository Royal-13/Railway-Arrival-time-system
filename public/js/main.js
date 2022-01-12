mapboxgl.accessToken = //Write your api key here
navigator.geolocation.getCurrentPosition( successLocation, errorLocation, {enableHighAccuracy: true
})
function successLocation(position){
setupMap([position.coords.longitude, position.coords.latitude])
}
function errorLocation(){
    setupMap([78.0322,30.3165])

}
function setupMap(center){
    const map = new mapboxgl.Map({
        container: 'map',
        style: 'mapbox://styles/mapbox/streets-v11',
        center: center,
        zoom: 15
    }); 
    const nav = new mapboxgl.NavigationControl();
map.addControl(nav);
var directions = new MapboxDirections({
    accessToken: mapboxgl.accessToken
});
map.addControl(directions, 'top-left');
// Set marker options.
const marker = new mapboxgl.Marker({
    color: "#D2042D",
    draggable: true
}).setLngLat([78.0322,30.3165])
    .addTo(map);
}
