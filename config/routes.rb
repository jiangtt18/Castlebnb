Rails.application.routes.draw do
  namespace :api, defaults: {format: :json} do
   resources :users, only: [:create,:show] # testing only
   resource :session, only:[:create, :destroy]
   # resources :users, only: [:create]
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  end
  root "static_pages#root"
end
