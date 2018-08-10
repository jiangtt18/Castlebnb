import React from 'react';
import { Link, withRouter } from 'react-router';
import Geosuggest from 'react-geosuggest';

class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {destination:''};
    this.handleDestination = this.handleDestination.bind(this);
  }

  handleDestination(value) {
      if (value && value.location) {
        const lat = value.location.lat || SFLat;
        const lng = value.location.lng || SFLng;
        this.props.searchCastles(this.state.destination);
        this.props.history.replace({
          pathname:"/search",
          query: {
          lat: lat,
          lng: lng
          }
        });

      }
 }

  update(field) {
    return e => this.setState({
      [field]: e
    });
  }

  render() {
    return (
      <div className = 'search_bar'>
      <Geosuggest
        className="search-input"
        placeholder="Try San Francisco"
        id="top-bar"
        onChange ={this.update('destination')}
        onSuggestSelect={this.handleDestination}
      />
      </div>
    );
}
}

export default withRouter(SearchBar);
