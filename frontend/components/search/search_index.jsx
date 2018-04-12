import React from 'react';
import { withRouter } from 'react-router-dom';
import CastleIndexItem from'../castle/castle_index_items';

class SearchIndex extends React.Component {



  renderSpots() {

    const castles = Object.values(this.props.castles);

    return castles.map((castle)=> {
      return <div >
        <CastleIndexItem castle={castle} />
      </div>;
    });
  }
  render(){
    return(
        <div >

            {this.renderSpots()}

      </div>
    );
  }

}

export default withRouter(SearchIndex);
