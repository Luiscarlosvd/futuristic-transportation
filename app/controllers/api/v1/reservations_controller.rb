class Api::V1::ReservationsController < ApplicationController
  skip_before_action :verify_authenticity_token, only: %i[create destroy]

  def index
    user_id = params[:user_id]
    @reservations = Reservation.includes(:vehicle).where(user_id:)
    render json: @reservations, include: :vehicle
  end

  def create
    @reservation = Reservation.new(reservation_params)
    if @reservation.save
      render json: @reservation, status: :created, notice: 'Your reservation has been successfully added.'
    else
      render json: @reservation.errors, status: :unprocessable_entity, alert: 'Your reservation could not be processed.'
    end
  end

  def destroy
    @reservation = Reservation.find(params[:id])
    if @reservation.destroy
      render json: { message: 'Vehicle deleted successfully' }, status: :no_content
    else
      render json: { errors: @reservation.errors.full_messages }, status: :unprocessable_entity
    end
  end

  private

  def reservation_params
    params.require(:reservation).permit(:city, :event_date, :user_id, :vehicle_id)
  end

  def user_params
    params..require(:user).permit(:userId)
  end
end
