class GearSerializer < ActiveModel::Serializer
  attributes :id, :gear_type, :quantity, :condition, :year, :value, :rules, :notes, :user_id, :lease_id
end
