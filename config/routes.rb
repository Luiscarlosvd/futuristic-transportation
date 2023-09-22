Rails.application.routes.draw do
  root 'root#index'
  namespace :api do
    namespace :v1 do
      resources :vehicles, only: [:index, :create, :destroy]
    end
  end  
end
