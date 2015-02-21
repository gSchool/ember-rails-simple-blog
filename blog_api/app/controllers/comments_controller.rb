class CommentsController < ApplicationController
  def create
    puts params
    # post = Post.find(params[:comment][:post_id])
    comment = Comment.new(comment_params)
    # comment = Comment.new(comment_params)
    if comment.save
      render json: comment
    end
  end

  private
  def comment_params
    params.require(:comment).permit(:post_id, :username, :body)
  end
end
