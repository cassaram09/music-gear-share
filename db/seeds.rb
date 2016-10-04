# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

User.create(email: "matt@matt.com", password: "hello123")
User.create(email: "jeff@jeff.com", password: "hello123")
Lease.create(checkout: '10/10/16', checkin: '10/10/18', returned: false, notes: 'no notes here')
Gear.create(type: "guitar", condition: "good", value: 100, rules: "don't use the killswitch", notes: 
  'a great guitar!', user_id: 1, lease_id: 1)

