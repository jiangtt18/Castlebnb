import React from 'react';
import ReactDOM from 'react-dom';
import { withRouter } from 'react-router-dom';
import {initMap, codeAddress} from '/Users/TTJ/Documents/appAcademy/bootcamp/airbnb/frontend/utils/api_util.jsx';


class CastleMap extends React.Component {
    constructor(props){
      super(props);
      this.state = {
        location:''
      }

      this.handleChangeSearchBar = this.handleChangeSearchBar.bind(this);
    }
    componentDidMount() {
   // set the map to show SF
   const mapOptions = {
     center: { lat: 37.7758, lng: -122.435 }, // this is SF
     zoom: 13
   };

   // wrap the mapDOMNode in a Google Map

  initMap() ;
 }


handleChangeLocation(){
  codeAddress(this.state.location);
}

handleChangeSearchBar(e){
  this.setState({location: e.target.value});
}


render() {
    return (
      <div>
         <div id='map'>map</div>
         
      </div>
    );
  }
}

export default withRouter(CastleMap);
