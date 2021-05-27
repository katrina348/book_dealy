class BooksController < ApplicationController
  
  def app
    render component: "App"
  end

  def index
    @books = Book.order(neats: :desc)
    render json: @books
  end
end
