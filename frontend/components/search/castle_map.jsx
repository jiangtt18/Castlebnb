
import React from 'react';
import { Link , withRouter} from 'react-router';
import MarkerManager from '../../utils/marker_manager';
import queryString from 'query-string';

const _getCoordsObj = latLng => ({
  lat: latLng.lat(),
  lng: latLng.lng()
});

class Map extends React.Component {
  constructor(props) {
    debugger;
    super(props);
  }

  componentDidMount() {
    let mapOptions = {
      center: { lat: 25, lng:-43 },
      zoom:2
    };

    debugger;

    if(this.props.location){
      const center = queryString.parse(this.props.location.search);
      const lat = parseFloat(center.lat);
      const lng = parseFloat(center.lng);
      const parsedCenter = {lat: lat, lng:lng};
        mapOptions = {
          center: parsedCenter,
          zoom:12
        };
    }

    const map = this.refs.map;
    this.map = new google.maps.Map(map, mapOptions);
    this.MarkerManager = new MarkerManager(this.map, this._handleMarkerClick.bind(this));
    this._registerListeners();
    this.MarkerManager.updateMarkers(this.props.castles);

  }

  componentDidUpdate() {
     this.MarkerManager.updateMarkers(this.props.castles);
  }

  // componentWillReceiveProps(newProps) {
  //   if (this.props.lat !== newProps.lat && this.props.lng !== newProps.lng){
  //     this.map.setOptions({
  //       center: {lat: parseFloat(newProps.lat), lng: parseFloat(newProps.lng)},
  //       zoom: 13
  //     });
  //   }
  // }

  _registerListeners() {
    google.maps.event.addListener(this.map, 'idle', () => {
      const { north, south, east, west } = this.map.getBounds().toJSON();
      const bounds = {
        northEast: { lat:north, lng: east },
        southWest: { lat: south, lng: west } };
      this.props.updateFilter('bounds', bounds);
    });
  }

  _handleMarkerClick(castle) {
    this.props.history.push(`castles/${castle.id}`);
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

export default withRouter(Map)
