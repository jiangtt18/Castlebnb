import React from 'react';
import { Link } from 'react-router';
import { withRouter } from 'react-router';
import 'react-dates/initialize';
import { DateRangePicker } from 'react-dates';
import { isEmpty } from 'lodash';

class BookingForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      guestId: "",
      castleId: this.props.match.params.castleId,
      startDate: null,
      endDate: null,
      focusedInput:null,
      numGuests:null,
    };
    this.update = this.update.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }


  componentWillUnmount() {
    this.props.clearBookingErrors();
  }

  update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  }

  handleSubmit(e){
    e.preventDefault();
    if (isEmpty(this.props.currentUser)){
      this.props.openModal();
      return;
    }

    let fetchInfo = {
      guest_id: this.props.currentUser.id,
      castle_id: this.state.castleId,
      check_in: this.state.startDate
      ? this.state.startDate._d
      : this.state.startDate,
      check_out: this.state.endDate
      ? this.state.endDate._d
      : this.state.endDate,
      num_guests:this.state.numGuests
    };

    this.props.createBooking(fetchInfo).then(() => {
      this.props.clearBookingErrors();
    });

  }


  renderErrors() {
    return(
      <ul className="error-ul">
        {this.props.errors.map((error, idx) => (
          <li className='errors' key={`error-${idx}`}>
            {error}
          </li>
        ))}
      </ul>
    );
  }


  render() {
    return (
      <div >

        <div className='price'>
          <span className='book-price'>${this.props.castle.price} </span>
          <span> per night</span>
        </div>
        <div>
          <span>Rating:</span>
          <span>{this.props.castle.rating}</span>
        </div>

        <div className="form-container">
          <form onSubmit={this.handleSubmit}  className="form-container">
            <DateRangePicker
              startDate={this.state.startDate}
              startDateId="checkin"
              endDate={this.state.endDate}
              endDateId="checkout"
              onDatesChange={
                ({ startDate, endDate }) =>
                this.setState({ startDate, endDate })
              }
              focusedInput={this.state.focusedInput}
              onFocusChange={focusedInput => this.setState({ focusedInput })}
              startDatePlaceholderText="Check In"
              endDatePlaceholderText="Check Out"
              hideKeyboardShortcutsPanel={true}
              showClearDates={true}
            />

            <div>
              <p className='guest'>Guests</p>
                <input
                  className="guest-input"
                  type="number"
                  value= {this.state.num_guests}
                  onChange={this.update('numGuests')}
                />
            </div>

            {this.renderErrors()}

            <input
            className="submit-booking"
            type="submit"
            value="Request to Book"
            />
            <p className="booking-warning">You won't be charged yet</p>
          </form>
        </div>

      </div>
    );
  }
}

export default withRouter(BookingForm);
