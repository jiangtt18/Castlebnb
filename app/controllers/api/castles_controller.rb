class Api::CastlesController < ApplicationController

  def index
      @castles = Castle.all.order(id: :asc).limit(18)
  end



  def show
    @castle = Castle.find(params[:id])
  end

  def patch

  end

  def create
    @Castle = Castle.new(castle_params)
    if @listing.save
      render "api/castle/show"
    else
      render json: @castle.errors.full_messages, status: 422
    end
  end

  def destroy
    @castle = Castle.find(params[:id])
    @castle.destroy!
  end

  private

  def castle_params
    params.require(:castle).permit(:host_id, :title, :discription,
      :price,:bed_room,:bath_room,:num_guests,:bath,:lng,:lat,
      :street_address,:city,:zip_code,:state,:country,:is_AV_Equipment,
      :is_ampleParking,:is_carriage,:is_wifi, :is_oceanView,
      :is_gardenView)
  end

end
