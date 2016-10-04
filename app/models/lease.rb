class Lease < ActiveRecord::Base
  belongs_to :user, class_name: "owner"
  belongs_to :user, class_name: "renter"
  has_many :gears
end
