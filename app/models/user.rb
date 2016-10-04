class User < ActiveRecord::Base
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable and :omniauthable
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :trackable, :validatable

  has_many :gears
  
  has_many :received_ratings, class_name: "Rating", foreign_key: "reviewee_id"
  has_many :ratings, class_name: "Rating", foreign_key: "reviewer_id"
  has_many :leases, foreign_key: "owner_id" #as the lease owner
  has_many :rentals, class_name: "Lease", foreign_key: "renter_id" #as a renter

end
