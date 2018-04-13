import React from 'react';
import { withRouter } from 'react-router-dom';
import CastleIndexItem from'../castle/castle_index_items';

class SearchIndex extends React.Component {



  renderSpots() {

    const castles = Object.values(this.props.castles);
    return castles.map((castle)=> {
      return <ul className="spot" >
        <CastleIndexItem castle={castle} />
      </ul>;
    });
  }
  render(){
    return(
        <div className='search-index' >
          <div className='spots'>
            {this.renderSpots()}
          </div>
      </div>
    );
  }

}

export default withRouter(SearchIndex);
