Rails.application.routes.draw do
  
  namespace :api do
    namespace :v1 do
      resources :users, only: [:index, :create, :destroy]
      resources :vehicles, only: [:index, :create, :destroy]
      resources :reservations, only: [:index, :create, :destroy]
    end
  end
  namespace :authentication, path: '', as: '' do
    resources :users, only: [:new, :create], path: '/register', path_names: { new: '/' }
    resources :sessions, only: [:new, :create, :destroy], path: '/login', path_names: { new: '/' }
  end
  root 'react_app#index'
  get '(/*all)', to: 'react_app#index'
end
