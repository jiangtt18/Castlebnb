import React from 'react';
import SearchIndex from './search_index';
import CastleMap from './castle_map';
import { withRouter } from 'react-router-dom';


class Search extends React.Component {
  render() {
    return(
      <div className='serach'>
        <div className="spot-map">
        <CastleMap
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

export default Search;
