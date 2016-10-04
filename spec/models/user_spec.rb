require "rails_helper"

RSpec.describe User, :type => :model do
  user = User.create!(name: "john Smith", email: "john@john.com", password: "hello123")

  it "has a name" do
    expect(user.name).to eq("john Smith")
  end

  it "has an email" do
    expect(user.email).to eq("john@john.com")
  end
end