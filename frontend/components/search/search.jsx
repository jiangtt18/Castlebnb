import React from 'react';
import SearchIndex from './search_index';
import CastleMap from './castle_map';
import { withRouter } from 'react-router-dom';


class Search extends React.Component {
  render() {
    return(
      <div>
        <CastleMap
        castles={this.props.castles}
        updateFilter = {this.props.updateFilter}/>
      <SearchIndex
        castles={this.props.castles}
        searchCastles = {this.props.searchCastles} />
      </div>
    );
  }
}

export default Search;
