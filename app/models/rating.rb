class Rating < ActiveRecord::Base
  belongs_to :user, class_name: "reviewer"
  belongs_to :user, class_name: "reviewee"

  enum rating: [:poor, :fair, :average, :good, :excellent]
end
