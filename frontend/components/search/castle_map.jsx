
import React from 'react';
import { Link } from 'react-router';
import MarkerManager from '../../utils/marker_manager';

const _getCoordsObj = latLng => ({
  lat: latLng.lat(),
  lng: latLng.lng()
});

class Map extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount () {
    const mapDOMNode = this.refs.map;

    const address = 'tokyo';

    // const geocoder = new google.maps.Geocoder();
    // const geocodeCallback =
    // const that = this;
    const defaultOptions = {
      zoom: 13,
      center: { lng: 35.6895, lat: 139.6917 },
    };

    this.map = new google.maps.Map(mapDOMNode, defaultOptions);
    this.MarkerManager = new MarkerManager(this.map);
    this.MarkerManager.updateMarkers(this.props.castles);

    // const geocodeCallback = (results, status) => {
    //   if (status == google.maps.GeocoderStatus.OK) {
    //     const Lat = results[0].geometry.location.lat();
    //     const Lng = results[0].geometry.location.lng();
    //     const myOptions = {
    //       zoom: 11,
    //       center: new google.maps.LatLng(Lat, Lng)
    //     };
    //
    //     this.map.setOptions(myOptions);
    //     this.map.updateMarkers(this.props.castles);
    //       // document.getElementById("map_canvas"), myOptions);
    //   }
    // };
    //
    // geocoder.geocode({ address }, geocodeCallback);

    // let mapOptions;
    // if(this.props.castle.lat !== "" && this.props.lat !== undefined) {
    //   mapOptions = {
    //     center: {lat: parseFloat(this.props.castle.lat), lng: parseFloat(this.props.castle.lng)},
    //     zoom: 0
    //   };
    // }
    // else {
    //   mapOptions = {
    //     center: { lng: 35.6895, lat: 139.6917 },
    //     zoom: 0
    //   };
    // }
    // this.map = new google.maps.Map(mapDOMNode, mapOptions);
    this._registerListeners();

  }

  componentDidUpdate() {
    this.MarkerManager && this.MarkerManager.updateMarkers(this.props.castles);
  }

  componentWillReceiveProps(newProps) {
    if (this.props.lat !== newProps.lat && this.props.lng !== newProps.lng){
      this.map.setOptions({
        center: {lat: parseFloat(newProps.lat), lng: parseFloat(newProps.lng)},
        zoom: 13
      });
    }
  }

  _registerListeners() {
    google.maps.event.addListener(this.map, 'idle', () => {
      const { north, south, east, west } = this.map.getBounds().toJSON();
      const bounds = {
        northEast: { lat:north, lng: east },
        southWest: { lat: south, lng: west } };
      this.props.updateFilter('bound', bounds);
    });
  }

  _handleMarkerClick(castle) {
    this.props.router.push(`castles/${castle.id}`);
  }

  render() {
    return (
      <div
        className='map'
        ref='map'>
      </div>
    );
  }
}

export default Map
