class Api::V1::UsersController < ApplicationController
  skip_before_action :verify_authenticity_token, only: %i[create destroy]

  def index
    @users = User.all
    if @users.present?
      render json: { success: true, users: @users }
    else
      render json: { success: false, message: 'No Users Found' }
    end
  rescue StandardError => e
    render json: { success: false, message: e.message }
  end

  # POST /api/v1/users
  def create
    @user = User.new(user_params)
    if @user.save
      render json: @user, status: :created
    else
      render json: @user.errors, status: :unprocessable_entity
    end
  end

  # DELETE /api/v1/users/1
  def destroy
    @user = User.find(params[:id])
    @user.destroy
  end

  private

  def user_params
    params.require(:user).permit(:name, :email)
  end
end
