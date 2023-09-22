class Api::V1::UsersController < ApplicationController
    before_action :set_user, only: %i[show destroy]

    # GET /api/v1/users
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
  
    # GET /api/v1/users/1
    def show
      render json: @user
    end
  
    # POST /api/v1/users
    def create
      @user = User.new(user_params)
  
      if @user.save
        render json: { success: true, user: @user }
      else
        render json: @user.errors, status: :unprocessable_entity
      end
    end
  
    # DELETE /api/v1/users/1
    def destroy
      @user.destroy
    end
  
    private
  
    # Use callbacks to share common setup or constraints between actions.
    def set_user
      @user = User.find(params[:id])
    end
  
    # Only allow a list of trusted parameters through.
    def user_params
      params.require(:user).permit(:name, :email, :password, :password_confirmation)
    end
end
