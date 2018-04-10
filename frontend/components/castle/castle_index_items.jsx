import React from 'react';
import { withRouter, Link } from 'react-router-dom';


class CastleIndexItem extends React.Component {
  constructor(props) {
     super(props);
  }

  render() {

    const { num_guests,average_rating, id, city, title, price, imageUrl} = this.props.castle;
    if (!this.props.castle) {
      return (
        <div> loading..</div>
      );
    }

    return (
      <li>
      <Link to={`/castles/${id}`}>
        <div
          className="castle-index-item"
        >
          <img
             src={imageUrl} alt='awesome castle pic'
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
