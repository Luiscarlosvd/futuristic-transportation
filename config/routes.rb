Rails.application.routes.draw do
  
  devise_for :users
  namespace :api do
    namespace :v1 do
      resources :users, except: [:update]
      resources :vehicles, only: [:index, :create, :destroy]
    end
  end
  root 'react_app#index'
  get '(/*all)', to: 'react_app#index'
end
