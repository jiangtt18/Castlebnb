import React from 'react';
import SearchIndex from './search_index';
import CaslteMap from './castle_map';
import { withRouter } from 'react-router-dom';


class Search extends React.Component {
  render() {
    return(
      <div>
        <SearchIndex />
        <CastleMap />
      </div>
    );
  }
}
