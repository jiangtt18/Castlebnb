let locations = [];
let directionsService;
let directionsDisplay;
let markers = [];
let urlsearch;
let geocoder;
let map;
let request;
let storedResponse;
let clickListener;

export const initMap = () => {

  map = new google.maps.Map(document.getElementById("map"), {
    zoom: 14,
    center: { lat: 37.77949, lng: -122.4194 },
    disableDefaultUI: true
  });

  // map.setOptions({
  //   styles: [
  //     {
  //       featureType: "poi",
  //       stylers: [{ visibility: "off" }]
  //     },
  //     {
  //       featureType: "transit",
  //       elementType: "labels.icon",
  //       stylers: [{ visibility: "off" }]
  //     }
  //   ]
  // });



   map.addListener("click", e => {
    placeMarker(e.latLng, map);
    });

};

function placeMarker(latLng) {
  let marker = new google.maps.Marker({
    position: latLng,
    map: map,
    draggable:true,
  });
  markers.push(marker);
}

function clearFirstMarker() {
  markers[markers.length - 1].setMap(null);
}



//Call this wherever needed to actually handle the display
export const codeAddress = location => {
  geocoder = new google.maps.Geocoder();
  geocoder.geocode(
    {
      address: location,
    },
    function(results, status) {
      if (status == google.maps.GeocoderStatus.OK) {
        map.setCenter(results[0].geometry.location);
      } else {
        alert("Geocode was not successful for the following reason: " + status);
      }
    }
  );
};
