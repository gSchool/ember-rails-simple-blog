class PostsController < ApplicationController
  def index
    @posts = Post.all
    render json: @posts
  end

  def create
    post = Post.new(post_params)
    if post.save
      render json: post
    end
  end

  private
  def post_params
    params.require(:post).permit(:title, :username, :link, :description)

  end
end
