import React from 'react';
import { withRouter } from 'react-router-dom';


class castleIndexItem extends React.Component {
 constructor(props) {
   super(props);
 }


 render() {
   const { city, title, price, num_guests, castleImageId} = this.props.castle;
   let image_url = 'http://res.cloudinary.com/doohtqbau/image/upload/c_scale,w_172/v1522973051/Screen_Shot_2018-04-05_at_5.03.58_PM_dc9jwv.png' ;
   if (this.props.image !== undefined) {
    image_url = this.props.image.image_url;
   }

   return (
       <div className="castle-index-item">
         <img
           src={image_url} alt='awesome castle pic'
         />
         <div className="index-item-info">
          <p className='index-city'>{city}</p>
          <p className='index-title'>{title}</p>
          <p className='index-price'>${price} per night</p>
          <p className='index-rating'>Rating:5 {num_guests}</p>
         </div>
       </div>
   );
 }
}




export default withRouter(castleIndexItem);
