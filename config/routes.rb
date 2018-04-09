Rails.application.routes.draw do
  namespace :api, defaults: {format: :json} do
   resources :users, only: [:create,:show] # testing only
   resource :session, only:[:create, :destroy]
   resources :castles
   resources :reviews

  end
  root "static_pages#root"
end
