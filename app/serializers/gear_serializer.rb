class GearSerializer < ActiveModel::Serializer
  attributes :id, :name, :description, :rental_fee, :gear_type
  has_one :user
end
