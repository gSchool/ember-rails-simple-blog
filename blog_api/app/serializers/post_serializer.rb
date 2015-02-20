class PostSerializer < ActiveModel::Serializer
  attributes :id, :title, :link, :description, :username
  has_many :comments, include: true
end
