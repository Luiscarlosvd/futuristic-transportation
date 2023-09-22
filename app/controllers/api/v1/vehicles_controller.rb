class Api::V1::VehiclesController < ApplicationController
  skip_before_action :verify_authenticity_token, only: %i[create destroy]

  def index
    @vehicles = Vehicle.all
    render json: @vehicles
  end

  def create
    @vehicle = Vehicle.new(vehicle_params)
    if @vehicle.save
      render json: @vehicle, status: :created
    else
      render json: @vehicle.errors, status: :unprocessable_entity
    end
  end

  def destroy
    @vehicle = Vehicle.find(params[:id])
    if @vehicle.destroy
      render json: { message: 'Vehicle deleted successfully' }, status: :no_content
    else
      render json: { errors: @vehicle.errors.full_messages }, status: :unprocessable_entity
    end
  end

  private

  def vehicle_params
    params.require(:vehicle).permit(:name, :description, :price, :photo, :photo_back, :photo_left, :photo_right)
  end
end
