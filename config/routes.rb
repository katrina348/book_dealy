Rails.application.routes.draw do
  # resources :books
  root 'books#app'

  get '/books', to: 'books#index'




end
