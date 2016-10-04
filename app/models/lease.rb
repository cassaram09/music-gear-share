class Lease < ActiveRecord::Base
  belongs_to :owner, class_name: "User"
  belongs_to :renter, class_name: "User"
  has_many :gears
end
