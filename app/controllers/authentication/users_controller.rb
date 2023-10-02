class Authentication::UsersController < ApplicationController

  def new
    @user = User.new
  end

  def create
    @user = User.new(user_params)
    if @user.save!
      session[:user_id] = @user.id
      redirect_to '/', notice: 'User Created!'
    else
      redirect_to '/', status: :unprocessable_entity, alert: 'Unable to create the user.'
    end
  end

  private

  def user_params
    params.require(:user).permit(:email, :name, :password)
  end
end
