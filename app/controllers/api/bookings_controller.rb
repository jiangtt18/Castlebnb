class Api::BookingsController < ApplicationController
  before_action :require_logged_in

  def index

    user = User.find_by(id: params[:guestId])

     if user
       @bookings = user.trips
     else
       render json: ["Your honeymoon trip is wating for you"], status:404
     end

  end


  def create
    @booking = Booking.new(booking_params)

    if @booking.save
      render "api/bookings/show"
    else
      render json: @booking.errors.full_messages, status: 422
    end
  end

  def destroy
    @booking = Booking.find(params[:id])
    @booking.destroy
  end


  private

  def booking_params
    params.require(:booking).permit( :guest_id, :castle_id,
      :check_in, :check_out, :num_guests)
  end

end
