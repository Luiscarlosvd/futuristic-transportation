class Authentication::UsersController < ApplicationController
  skip_before_action :protect_pages
  skip_before_action :verify_authenticity_token, only: %i[new create]


  def new
    @user = User.new
  end

  def create
    p user_params
    @user = User.new(user_params)
    p @user
    if @user.save!
      session[:user_id] = @user.id
      redirect_to root_path, notice: 'User Created'
    else
      render :new, status: :unprocessable_entity
    end
  end

  private

  def user_params
    params.require(:user).permit(:email, :name, :password)
  end
end
