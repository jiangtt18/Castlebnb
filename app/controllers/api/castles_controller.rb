class Api::CastlesController < ApplicationController

  def index
    @castles = bounds ? Castle.in_bounds(bounds) : Castle.all.order(id: :asc).limit(12)
      # @castles = Castle.all.order(id: :asc).limit(18)
      # if params[:maxGuests]
      #   max_num = params[:maxGuests]
      #   @castles = @castles.where('num_guests >= ?', max_num
    if params[:search]
      @castles = Castle.search(search_params[:search_words])
    end

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

  def search_params
    params.require(:search).permit(:search_words)
  end

  def bounds
   params[:bounds]
  end

end
