Rails.application.routes.draw do
    
  devise_for :users

  root to: 'home#index'

  namespace :api, defaults:{format: :json} do
    namespace :v1 do
      resources :messages
      resources :gears
      get '/my-gear' => 'gears#my_gear'
      get '/users/:id/sent-messages' => 'messages#sent_messages'
      get '/users/:id/received-messages' => 'messages#received_messages'
    end
  end
 
  devise_scope :user do
    get '/login' => 'devise/sessions#new'
    post '/login' => 'devise/sessions#create'
    delete '/logout' => 'devise/sessions#destroy'
    get "/signup" => "devise/registrations#new"
    get "/profile" => 'devise/registrations#edit'
  end
  
end