export default class MarkerManager {
  constructor(map, handleClick) {
    this.map = map;
    this.handleClick = handleClick;
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
    const position = new google.maps.LatLng(castle.lat, castle.lng);
    const marker = new google.maps.Marker({
      position: position,
      map: this.map,
      id: castle.id
    });
    marker.addListener('click', () => this.handleClick(castle));
    this.markers[marker.id] = marker;
  }

  removeMarker(marker) {
    this.markers[marker.id].setMap(null);
    delete this.markers[marker.id];
  }

}
