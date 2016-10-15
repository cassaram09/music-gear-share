class Gear < ActiveRecord::Base
  belongs_to :user
  belongs_to :lease
  enum gear_type: [:instrument, :accessory]
end
