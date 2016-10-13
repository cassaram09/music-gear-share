# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

@user1 = User.create(email: "matt@matt.com", password: "hello123")
@user2 = User.create(email: "jeff@jeff.com", password: "hello123")
@lease = Lease.create(checkout: '10/10/16', checkin: '10/10/18', returned: false, notes: 'no notes here', owner_id: 1, renter_id: 2)
@gear = Gear.create(name: "Ibanez guitar", description: "2005 red Ibanez guitar with whammy bar, dual tone setting.", rental_fee: 0, user_id: 1)
@rating = Rating.create(reviewer_id: 2, reviewee_id: 1, notes: "Great rental")

@lease.gears << @gear