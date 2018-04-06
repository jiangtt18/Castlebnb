import React from 'react';
import { withRouter } from 'react-router-dom';


class castleIndexItem extends React.Component {
 constructor(props) {
   super(props);
   this.handleClick = this.handleClick.bind(this);
 }

 handleClick() {
   const castleId = this.props.castles.castle.id;
   this.props.history.push(`/castles/${castleId}`);
 }

 render() {
   const { city, title, price, num_guests, castleImageId} = this.props.castle;
   let image_url = 'http://res.cloudinary.com/doohtqbau/image/upload/c_scale,w_172/v1522973051/Screen_Shot_2018-04-05_at_5.03.58_PM_dc9jwv.png' ;
   if (this.props.image !== undefined) {
    image_url = this.props.image.image_url;
   }

   return (
     <div
       className="castle-index-item"
       onClick={this.handleClick}
     >
       <div className="index-item-info">
         <span>{city}</span>
         <span>{title}</span>
         <span className="index-item-copy">{price} per night</span>
         <span className="index-item-category">Rating:5 {num_guests}</span>
         {/*  <span className="index-item-copy">
            {average_rating || 'No reviews yet'}
          </span> */}
       </div>
       <img
         src={image_url}
         style={{'width': '64px', 'height': '64px'}}/>
     </div>
   );
 }
}

export default withRouter(castleIndexItem);
