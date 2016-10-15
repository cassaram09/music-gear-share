class User < ActiveRecord::Base
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable and :omniauthable
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :trackable, :validatable

  has_many :gears
  has_many :sent_messages, class_name: "Message", foreign_key: "sender_id" #as a sender
  has_many :received_messages, class_name: "Message", foreign_key: "recipient_id" #as a recipient

end
