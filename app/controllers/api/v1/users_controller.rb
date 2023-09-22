class Api::V1::UsersController < ApplicationController

    def index
        @users = User.all
    end
end
