import React from 'react';
import SearchIndex from './search_index';
import CastleMap from './castle_map';
import { withRouter } from 'react-router-dom';


class Search extends React.Component {
  render() {
    const SFLat =37.773972;
    const SFLng =-122.431297;
    let lat;
    let lng;
        debugger;
    if(this.props.location.query === undefined){
      lat = SFLat;
      lng = SFLng;
    } else {
      lat = this.props.location.query.lat;
      lng = this.props.location.query.lng;
    }

    return(
      <div className='serach'>
        <div className="spot-map">
        <CastleMap
        lat={lat}
        lng={lng}
        castles={this.props.castles}
        updateFilter = {this.props.updateFilter}/>
      </div>

      <div className="search-index">
      <SearchIndex
        castles={this.props.castles}
        />
      </div>
      </div>
    );

  }
}

export default withRouter(Search);
