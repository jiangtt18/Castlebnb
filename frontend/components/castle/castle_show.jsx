import React from 'react';
import { withRouter, Link } from 'react-router-dom';


class CastleShow extends React.Component{
  constructor(props){
    super(props);
  }

  componentDidMount(){
    this.props.fetchCastle(this.props.match.params.castleId);
  }



  render(){

    let a = this.props.castle;
    if (this.props.castle  === undefined) {
      return (
        <p>Loading...</p>
      );
    }
    const { city, title, price, num_guests, castleImageURL} = this.props.castle;
    let image_url = 'http://res.cloudinary.com/doohtqbau/image/upload/c_scale,w_172/v1522973051/Screen_Shot_2018-04-05_at_5.03.58_PM_dc9jwv.png' ;
    if (this.props.image !== undefined) {
      image_url = {castleImageURL}[0];
    }

    return(
      <div>
        {city};
        <img
           src={image_url} alt='awesome castle pic'
        />
      </div>

    );

  }
}
export default withRouter(CastleShow);
