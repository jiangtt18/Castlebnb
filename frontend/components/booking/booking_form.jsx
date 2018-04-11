import React from 'react';
import { Link } from 'react-router';
import { withRouter } from 'react-router';
import 'react-dates/initialize';
import { DateRangePicker } from 'react-dates';

class BookingForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      guestId: "",
      castleId: this.props.match.params.castleId,
      startDate: null,
      endDate: null,
      focusedInput:null,
      numGuests:0
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
      if(this.state.startDate || this.state.endDate){
      if(this.props.currentUser){
        this.state.guestId = this.props.currentUser.id;
      }

      let fetchInfo = {
        guest_id: this.state.guestId,
        castle_id: this.state.castleId,
        check_in: this.state.startDate._d,
        check_out: this.state.endDate._d,
        num_guests:this.state.numGuests
      };

      this.props.createBooking(fetchInfo).then(() => {
        this.props.clearBookingErrors();
      });

    } else {
      return (
        <div>
          <h1>please select date</h1>
        </div>);
    }
  }


  renderErrors() {
    return(
      <ul className="error-ul">
        {this.props.errors.map((error, idx) => (
          <li key={`error-${idx}`}>
            {error}
          </li>
        ))}
      </ul>
    );
  }




  render() {
    // const {checkin, checkout, numGuests} = this.state;
    return (
      <div >

            <div>
              <h1 >${this.props.castle.price}</h1>
              <p>per night</p>
            </div>
            <div>
              {this.props.castle.average_rating}
              {this.props.castle.num_guests}
            </div>

            <div className="form-container">
            <form onSubmit={this.handleSubmit}  className="form-container">
              <DateRangePicker
                startDate={this.state.startDate}
                startDateId="checkin"
                endDate={this.state.endDate}
                endDateId="checkout"
                onDatesChange={({ startDate, endDate }) => this.setState({ startDate, endDate })}
                focusedInput={this.state.focusedInput}
                onFocusChange={focusedInput => this.setState({ focusedInput })}
                startDatePlaceholderText="Check In"
                endDatePlaceholderText="Check Out"
                hideKeyboardShortcutsPanel={true}
                showClearDates={true}
                />

              <div>
                <p>Guests</p>
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
