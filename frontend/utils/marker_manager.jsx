export default class MarkerManager {
  constructor(map) {
    this.map = map;
    this.markers = {};
  }

  updateMarkers(castles) {

    const castleKeys = Object.keys(castles);
    const markerKeys = Object.keys(this.markers);

    castleKeys.forEach((id) => {
      if (!this.markers[id]) {
        const castle = castles[id];
        this.createMarkerFromCastle(castle);
      }
    });

    markerKeys.forEach((id) => {
      if (!castles[id]){
        this.removeMarker(this.markers[id]);
      }
    });
  }

  createMarkerFromCastle(castle) {
    const imageUrl = castle.imageUrl;

    var infowindow = new google.maps.InfoWindow({
       content: `<img src =${imageUrl}  />`
     });
    const position = { lng: castle.lng, lat: castle.lat };

    const marker = new google.maps.Marker({
      position,
      map: this.map,
      id: castle.id
    });
    marker.addListener('click',
    () =>{
      infowindow.open(this.map, marker);

    });

    this.markers[marker.id] = marker;
  }


  removeMarker(marker) {
    this.markers[marker.id].setMap(null);
    delete this.markers[marker.id];
  }

}
