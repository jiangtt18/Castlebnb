class Api::ReviewsController < ApplicationController
  # before_action :require_logged_in

  def index
    @reviews = Review.where(castle_id:params[:castleId] )
    #
      if @reviews
       render :index
      else
       render json: ["great reviews are coming soon"]
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
    params.require(:review).permit(:accuracy,:communication,:cleanliness, :location,
       :value, :checkin, :comment, :castle_id,:reviewer_id,:num_reviewers)
  end
end
