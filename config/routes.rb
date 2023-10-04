Rails.application.routes.draw do
  mount Rswag::Ui::Engine => '/api-docs'
  mount Rswag::Api::Engine => '/api-docs'
  
  namespace :api do
    namespace :v1 do
      resources :users, only: [:index, :create, :destroy]
      resources :vehicles, only: [:index, :create, :destroy]
      resources :reservations, only: [:index, :create, :destroy]
    end
  end
  namespace :authentication, path: '', as: '' do
    resources :users, only: [:create], path: '/register', path_names: { new: '/' }
    resources :sessions, only: [:create, :destroy], path: '/login', path_names: { new: '/' }
  end
  root 'react_app#index'
  get '(/*all)', to: 'react_app#index'
end
