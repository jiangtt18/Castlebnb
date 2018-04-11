import React from 'react';
import ReactDOM from 'react-dom';
import { withRouter } from 'react-router-dom';


class CastleMap extends React.Component {

render() {
    return (
      <div>
        <div id='map-container' ref='map'>Map</div>
      </div>
    );
  }
}

export default withRouter(CastleMap);
