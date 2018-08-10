import React from 'react';
import { withRouter } from 'react-router-dom';
import CastleIndexItem from'../castle/castle_index_items';

class SearchIndex extends React.Component {

  renderSpots() {
    const castles = Object.values(this.props.castles);
    if(castles.length === 0) {
      return (
        <h2 className='NoMatch'>Sorry, no castles match your search</h2>
      )
    } else {
      return castles.map((castle)=> {
        return <ul className="spot"  key={`${castle.id}`} >
          <CastleIndexItem castle={castle} />
        </ul>;
      });
    }
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
