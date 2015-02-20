class PostSerializer < ActiveModel::Serializer
  attributes :id, :title, :link, :description, :username
end
