class Api::V1::VehiclesController < ApplicationController
  def index
    @vehicles = Vehicle.all
    if @vehicles.present?
      render json: { success: true, vehicles: @vehicles, message: 'Vehicles Found' }
    else
      render json: { success: false, notice: 'No Vehicles Found.' }
    end
  rescue StandardError => e
    render json: { success: false, notice: e.message }
  end

  def create
    @vehicle = Vehicle.new(vehicle_params)
    if @vehicle.save
      render json: @vehicle, status: :created, notice: 'Vehicle was successfully created.', message: 'Vehicle Created'
    else
      render json: @vehicle.errors, status: :unprocessable_entity, alert: 'Vehicle could not be created.',
             message: 'Invalid Request'
    end
  end

  def destroy
    @vehicle = Vehicle.find(params[:id])
    if @vehicle.destroy
      render json: { success: true, notice: 'Vehicle deleted successfully.' }
    else
      render json: { errors: @vehicle.errors.full_messages }, status: :unprocessable_entity,
             alert: 'Error occurred while deleting vehicle.'
    end
  rescue StandardError => e
    render json: { success: false, notice: e.message }
  end

  private

  def vehicle_params
    params.require(:vehicle).permit(:name, :description, :price, :photo, :photo_back, :photo_left, :photo_right)
  end
end
