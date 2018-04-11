import React from 'react';
// import SearchIndex from './search_index';
import CastleMap from './castle_map';
import { withRouter } from 'react-router-dom';


class Search extends React.Component {
  render() {
    return(
      <div>
        <CastleMap
        updateFilter = {this.props.updateFilter}/>
      </div>
    );
  }
}

export default Search;

// <SearchIndex />
