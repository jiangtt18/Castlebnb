import React from 'react';
import { Link, withRouter } from 'react-router';
import Geosuggest from 'react-geosuggest';

class SearchBar extends React.Component {
  constructor(props) {

    super(props);
    this.state = {
      city:'',

    };
    this.handleDestination = this.handleDestination.bind(this);
  }



  handleDestination(value) {

      if (value && value.location) {
        console.log(value);
        const lat = value.location.lat;
        const lng = value.location.lng;
        this.props.history.replace({
          pathname:"/search",
          query: {
          lat: value.location.lat,
          lng: value.location.lng
        }
        });
      }

 }



  render() {
    return (
      <div className = 'search_bar'>
      <Geosuggest
          className="search-input"
          placeholder="Where to?"
          id="top-bar"
          onSuggestSelect={this.handleDestination}
      />
      </div>
    );
}
}

export default withRouter(SearchBar);
