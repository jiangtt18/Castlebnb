import React from 'react';
import { Link, withRouter } from 'react-router';
import Geosuggest from 'react-geosuggest';

class SearchBar extends React.Component {
  constructor(props) {

    super(props);
    this.state = {
      city:''
    };
    this.handleDestination = this.handleDestination.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e){
    e.preventDefault();
    this.props.searchCastles(this.state.city)
    .then(this.props.history.push('/search'));

  }

  update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  }


  handleDestination(value) {
    console.log(value);
    const lat = value.location.lat;
    const lng = value.location.lng;

    if (value && value.location) {
      this.props.history.push(`/search/?lat=${lat}&lng=${lng}`);
    }
 }

  render() {

    return (
      <form className = 'top-bar' onSubmit={this.handleSubmit}>
        <input
          value={this.state.city}
          placeholder="Try Tokyo..."
          onChange ={this.update('city')}
        />
      </form>
    );
}
}

export default withRouter(SearchBar);
