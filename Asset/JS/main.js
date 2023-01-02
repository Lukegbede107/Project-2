//Initialize and add the map
function initMap(){
    //your location
    const loc = {lat: 6.559670, lng: 3.362480 };
    // Centered map on location
    const map = new google.maps.Maps(document.querySelector('.map'),
    {
        zoom: 14,
        center: loc
    });
    //The marker, positioned at location
    const marker = new google.maps.Marker({position: loc, map:map});
}