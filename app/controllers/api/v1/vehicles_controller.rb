class Api::V1::VehiclesController < ApplicationController
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
    @vehicle.destroy
    head :no_content
  end

  private

  def vehicle_params
    params.require(:vehicle).permit(:name, :description, :price, :photo, :photo_back, :photo_left, :photo_right)
  end
end