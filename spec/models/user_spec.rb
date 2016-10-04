require "rails_helper"

RSpec.describe User, :type => :model do
  it "has a name" do
    user = User.create(name: "john Smith", email: "john@john.com", password: "hello123")

    expect(User.name).to eq("john Smith")
  end
end