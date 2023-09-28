class Authentication::SessionsController < ApplicationController
  skip_before_action :protect_pages
  skip_before_action :verify_authenticity_token, only: %i[new create destroy]

  def new; end

  def create
    @user = User.find_by('email = :login OR name = :login', { login: params[:login] })

    if @user&.authenticate(params[:password])
      session[:user_id] = @user.id
      # p @user.id
      redirect_to root_path, notice: 'Login Succesful'
    else
      redirect_to new_session_path, alert: 'Login Failed'
    end
  end

  def destroy
    # p session[:user_id]
    session.delete(:user_id)

    redirect_to root_path, notice: 'User Destroyed'
  end
end
