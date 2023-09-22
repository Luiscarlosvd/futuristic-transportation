Rails.application.routes.draw do
  root 'root#index'
  namespace :api do
    namespace :v1 do
      resources :users, except: [:update]
      resources :vehicles, only: [:index, :create, :destroy]
    end
  end  
end
