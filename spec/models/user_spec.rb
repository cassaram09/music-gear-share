require "rails_helper"

DatabaseCleaner.strategy = :truncation

RSpec.describe "User", :type => :model do
  
  DatabaseCleaner.clean

  user = User.create!(name: "john Smith", email: "john@john.com", password: "hello123")

  it "has a name" do
    expect(user.name).to eq("john Smith")
  end

  it "has an email" do
    expect(user.email).to eq("john@john.com")
  end
end


describe User do
  describe '#summary' do
    context 'when there is a summary' do
      it 'returns the summary' do
        # ...a
      end
    end
  end
end