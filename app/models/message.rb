class Message < ActiveRecord::Base
  belongs_to :sender, class_name: "User"
  belongs_to :recipient, class_name: "User"

  enum :gear_type [:instrument, :accessory]
end
