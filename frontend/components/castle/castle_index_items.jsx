import React from 'react';
import { withRouter, Link } from 'react-router-dom';


class CastleIndexItem extends React.Component {
  constructor(props) {
     super(props);
  }

  render() {

    const { average_rating, id, city, title, price, num_guests, castleImageId} = this.props.castle;
    let image_url = 'http://res.cloudinary.com/doohtqbau/image/upload/c_scale,w_172/v1522973051/Screen_Shot_2018-04-05_at_5.03.58_PM_dc9jwv.png' ;


    if (!this.props.castle) {
      return (
        <div> loading..</div>
      )
    }


    if (castleImageId.length !== 0) {

      let firstImage = castleImageId[0];
      let singleImage = this.props.image[firstImage];
      image_url = singleImage.image_url;
    }

    return (
      <li>
      <Link to={`/castles/${id}`}>
        <div
          className="castle-index-item"
        >
          <img
             src={image_url} alt='awesome castle pic'
          />
          <div className="index-item-info">
            <p className='index-city'>{city}</p>
            <p className='index-title'>{title}</p>
            <p className='index-price'>${price} per night</p>
            <p className='index-rating'>Rating:{average_rating} {num_guests}</p>
          </div>
        </div>
      </Link>
    </li>
    );
  }

}




export default withRouter(CastleIndexItem);
