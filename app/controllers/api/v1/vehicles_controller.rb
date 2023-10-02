class Api::V1::VehiclesController < ApplicationController
  skip_before_action :verify_authenticity_token, only: %i[create destroy]

  def index
    @vehicles = Vehicle.all
    if @vehicles.present?
      render json: { success: true, vehicles: @vehicles, message: 'Vehicles Found' }
    else
      render json: { success: false, message: 'No Vehicles Found' }
    end
  rescue StandardError => e
    render json: { success: false, message: e.message }
  end

  def create
    @vehicle = Vehicle.new(vehicle_params)
    if @vehicle.save
      render json: @vehicle, message: 'Vehicle Created', status: :created
    else
      render json: @vehicle.errors, status: :unprocessable_entity, message: 'Invalid Request'
    end
  end

  def destroy
    @vehicle = Vehicle.find(params[:id])
    if @vehicle.destroy
      render json: { success: true, message: 'Vehicle deleted successfully' }
    else
      render json: { errors: @vehicle.errors.full_messages }, status: :unprocessable_entity
    end
  rescue StandardError => e
    render json: { success: false, message: e.message }
  end

  private

  def vehicle_params
    params.require(:vehicle).permit(:name, :description, :price, :photo, :photo_back, :photo_left, :photo_right)
  end
end
