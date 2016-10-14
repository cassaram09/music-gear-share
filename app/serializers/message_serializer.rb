class MessageSerializer < ActiveModel::Serializer
  attributes :id, :content, :sender_id, :recipient_id
  has_one :recipient
  has_one :sender
end
