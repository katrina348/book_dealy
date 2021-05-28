class BooksController < ApplicationController
  
  def app
    render component: "App"
  end

  def index
    @books = Book.order(neats: :desc)
    render json: @books
  end

  def update
    @book = Book.find(params[:id])
    if(@book.update(book_params))
      render json: @book
    else
      render json: @book.errors.full_messages, status: :unprocessable_entity

    end
  end
  def create
    @book = Book.new(book_params)
    if(@book.save)
      render json: @book
    else
      render json: @book.errors.full_messages, status: :unprocessable_entity
    end
  end

  private

  def book_params
    params.require(:book).permit(:title, :author, :genre, :neats)
  end





end
