require "rails_helper"

DatabaseCleaner.strategy = :truncation

RSpec.describe "Gear", :type => :model do
  
  DatabaseCleaner.clean

  user1 = User.create(email: "matt@matt.com", password: "hello123")
  user2 = User.create(email: "jeff@jeff.com", password: "hello123")
  lease = Lease.create(checkout: '10/10/16', checkin: '10/10/18', returned: false, notes: 'no notes here', owner_id: 1, renter_id: 2)
  gear = Gear.create(gear_type: "guitar", condition: "good", value: 100, rules: "don't use the killswitch", notes: 
    'a great guitar!', user_id: 1, lease_id: 1)
  rating = Rating.create(reviewer_id: 2, reviewee_id: 1, notes: "Great rental")

  describe "Gear Attributes" do
    
    it "has a type" do
      expect(gear.gear_type).to eq("guitar")
    end

    it "has a condition" do
      expect(gear.condition).to eq("good")
    end

    it "has a value" do
      expect(gear.value).to eq(100)
    end

    it "has rental rules" do
      expect(gear.rules).to eq("don't use the killswitch")
    end

    it "has notes" do
      expect(gear.notes).to eq("a great guitar!")
    end

    it "has an owner" do
      expect(gear.user_id).to eq(1)
    end

  end 

  describe "Gear Behaviors" do

    lease.gears << gear

    it "can be added to a lease" do
      expect(lease.gears.first.gear_type).to eq("guitar")
    end

   end 

end