Rails.application.routes.draw do
  

  root 'books#app'
  get '/books', to: 'books#index'
  post '/books', to: 'books#create'
  put '/books/:id', to: 'books#update'
  patch '/books/:id', to: 'books#update'
end
