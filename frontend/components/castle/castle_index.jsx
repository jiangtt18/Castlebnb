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

    const featuredCastles = Object.values(this.props.castles[0]);
    const castleImages = this.props.castles[1];
    return(

      <div>
        <div className='exploreTab'>
          <h3>Explore Castlebnb</h3>
          <img
            src= 'http://res.cloudinary.com/doohtqbau/image/upload/v1523059007/Screen_Shot_2018-04-06_at_4.19.03_PM_jsb38t.png'
            alt='awesome background picture'
          />
          <h3>Castles around the world</h3>
        </div>
        <ul className='castle-index'>

        {featuredCastles.map(castle => (

          <CastleIndexItem
            castle={castle}
            image={castleImages}
            key={castle.id}
            />

        ))}
        </ul>

      </div>
    );

  }
}

export default CastleIndex;
