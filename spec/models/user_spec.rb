require "rails_helper"

DatabaseCleaner.strategy = :truncation

RSpec.describe "User", :type => :model do
  
  before :each do
    DatabaseCleaner.clean
    @user = User.create!(name: "john Smith", email: "john@john.com", password: "hello123")
  end

  it "has a name" do
    expect(@user.name).to eq("john Smith")
  end

  it "has an email" do
    expect(@user.email).to eq("john@john.com")
  end
end