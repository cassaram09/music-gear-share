class GearSerializer < ActiveModel::Serializer
  attributes :id, :name, :description, :rental_fee
  has_one :user
end
