import React from 'react';
import CastleIndexItem from './castle_index_items';

class CastleIndex extends React.Component {

  componentDidMount(){

    this.props.fetchCastles();
  }


  render(){
    if (Object.keys(this.props.castles).length == 0) {
      return (
        <p>Loading...</p>
      )
    }

    const featuredCastles = Object.values(this.props.castles[0]);
    const castleImages = Object.values(this.props.castles[1]);
    return(
      <div>
        {featuredCastles.map(castle => (
          <CastleIndexItem
            castle={castle}
            image={castleImages[castle.castleImageId[0]]}
            key={castle.id}
            />
        ))}
      </div>
    );

  }
}

export default CastleIndex;
