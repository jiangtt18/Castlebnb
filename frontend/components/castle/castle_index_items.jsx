import React from 'react';
import { withRouter, Link } from 'react-router-dom';
import StarRatingComponent from 'react-star-rating-component';

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

            <div key={`${id}2`} style={{fontSize:10}} className="average-rating-index">
            <span><StarRatingComponent
              style={{padding:'20px'}}
              name="star"
              editing={false}
              starCount={5}
              value={average_rating}
              starColor={'#008489'}
              emptyStarColor={'#dce0e0'}
              starSpacing="5px"
              /></span>
            <span><p className='index-rating'> {num_guests}</p></span>
          </div>
          </div>
        </div>
      </Link>
    </li>
    );
  }

}




export default withRouter(CastleIndexItem);
