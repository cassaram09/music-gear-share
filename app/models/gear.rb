class Gear < ActiveRecord::Base
  belongs_to :user
  belongs_to :lease
end
