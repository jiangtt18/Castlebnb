class Api::ImagesController < ApplicationController
  before_action :require_logged_in

  def index
    if params.include?("review")
      @reviews = Review.where(review_params)
    else
      @reviews = Review.all.limit(18)
    end
  end

  def create
    @review = Review.new(review_params)

    if @review.save
      render  "api/reviews/show";
    else
      render json: @review.errors.full_messages, status: :unprocessable_entity
    end
  end

  def destroy
    @review = Review.find(params[:id])
    @review.destroy!
  end


  private

  def review_params
    params.require(:review).permit(:accuracy,:communication,:cleanliness, :location
       :value, :checkin, :comment, :castle_id,:reviewer_id
    )
  end


end
