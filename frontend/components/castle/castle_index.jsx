import React from 'react';
import CastleIndexItem from './castle_index_items';


class CastleIndex extends React.Component {

  componentDidMount(){
    this.props.fetchCastles();
  }


  render(){

    if (Object.keys(this.props.castles).length === 0) {
      return (
        <p>Loading...</p>
      );
    }

    const featuredCastles = Object.values(this.props.castles);

    return(

      <div>
        <div className='exploreTab'>
          <h3>Explore Castlebnb</h3>
          <img
            src='http://res.cloudinary.com/doohtqbau/image/upload/v1523652055/ancient-architecture-building-749078_ah1q68.jpg'
            alt='awesome background picture'
          />
          <h3>Castles around the world</h3>
        </div>
        <ul className='castle-index'>

        {featuredCastles.map(castle => (

          <CastleIndexItem
            castle={castle}
            key={castle.id}
            />

        ))}
        </ul>

      </div>
    );

  }
}

export default CastleIndex;
