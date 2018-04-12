import React from 'react';
import ReactDOM from 'react-dom';
import { withRouter } from 'react-router-dom';
import MarkerManager from '../../utils/marker_manager';

const getCoordsObj = latLng => ({
  lat: latLng.lat(),
  lng: latLng.lng()
});

const mapOptions = {
  center: {
    lat: 37.773972,
    lng: -122.431297
  }, // San Francisco coords
  zoom: 13
};

class CastleMap extends React.Component {

  componentDidMount() {

    const map = this.refs.map;
    this.MarkerManager = new MarkerManager(this.map, this.handleMarkerClick.bind(this));


      this.map = new google.maps.Map(map, mapOptions);
      this.registerListeners();
      this.MarkerManager.updateMarkers(this.props.castles);


  }

  componentWillReceiveProps(){

  }


  registerListeners() {
    google.maps.event.addListener(this.map, 'idle', () => {
      const { north, south, east, west } = this.map.getBounds().toJSON();
      const bounds = {
        northEast: { lat:north, lng: east },
        southWest: { lat: south, lng: west } };
      this.props.updateFilter('bounds', bounds);
    });

  }

  handleMarkerClick(castle) {
    this.props.history.push(`castles/${castle.id}`);
  }




  render() {
    return (
      <div className="map" ref="map">
        Map
      </div>
    );
  }

}

export default withRouter(CastleMap);
