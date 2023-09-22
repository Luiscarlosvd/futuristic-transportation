class ReactAppController < ApplicationController
  def index
    render file: 'app/javascript/application.js'
  end
end
