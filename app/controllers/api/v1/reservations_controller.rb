class Api::V1::ReservationsController < ApplicationController
  skip_before_action :verify_authenticity_token, only: %i[create destroy]

  def index
    @reservations = Reservations.all
    render json: @reservations
  end

  def create
    @reservations = Reservations.new(reservations_params)
    if @reservations.save
      render json: @reservations, status: :created
    else
      render json: @reservations.errors, status: :unprocessable_entity
    end
  end

  def destroy; end
end
