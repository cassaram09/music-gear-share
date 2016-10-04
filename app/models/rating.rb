class Rating < ActiveRecord::Base
  belongs_to :reviewer, class_name: "User"
  belongs_to :reviewee, class_name: "User"

  # enum rating: [:poor, :fair, :average, :good, :excellent]
end
