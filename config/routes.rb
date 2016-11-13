Rails.application.routes.draw do
    
  devise_for :users, :controllers => { registrations: 'users/registrations' }

  

  namespace :api, defaults:{format: :json} do
    namespace :v1 do
      resources :messages
      resources :gears
      get '/my-gear' => 'gears#my_gear'
      get '/users/sent-messages' => 'messages#sent_messages'
      get '/users/received-messages' => 'messages#received_messages'
      get '/gear-types' => "gears#gear_types"
      get "/profile" => 'user#profile'
    end
  end
 
  devise_scope :user do
    get '/login' => 'devise/sessions#new'
    post '/login' => 'devise/sessions#create'
    delete '/logout' => 'devise/sessions#destroy'
    get "/signup" => "devise/registrations#new"
    get "/profile" => 'devise/registrations#edit'
  end

  # get '/my-gear' => 'home#index'

  # scope 'messages' do
  #   get '/' => 'home#index'
  #   get '/sent' => 'home#index'
  #   get '/received' => 'home#index'
  # end

  get "*path" => redirect("/")

  root to: 'home#index'

end