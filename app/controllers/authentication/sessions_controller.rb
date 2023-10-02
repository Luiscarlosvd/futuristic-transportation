class Authentication::SessionsController < ApplicationController
  # skip_before_action :verify_authenticity_token, only: %i[new create destroy]

  def new; end

  def create
    @user = User.find_by('email = :login OR name = :login', { login: params[:login] })

    if @user&.authenticate(params[:password])
      session[:user_id] = @user.id
      redirect_to '/', notice: 'Login Successfull.', status: 200
    else
      redirect_to '/', alert: 'Error: Username or Password Invalid.', status: :unprocessable_entity
    end
  end

  def destroy
    if session.delete(:user_id)

      redirect_to '/', status: 200, notice: 'You have succesfully logged out.'
    else
      redirect_to '/', status: :unprocessable_entity, alert: 'We have troubles with the logout.'
    end
  end
end
