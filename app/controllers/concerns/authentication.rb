module Authentication
  extend ActiveSupport::Concern

  included do
    before_action :set_current_user

    private

    def set_current_user
      Current.user = User.find_by(id: session[:user_id]) if session[:user_id]
    end
  end
end
