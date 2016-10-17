# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

@user1 = User.create(username: "mattycranekicks", email: "matt@matt.com", password: "hello123")
@user2 = User.create(username: "djeffy", email: "jeff@jeff.com", password: "hello123")

@gear1 = Gear.create(name: "ibanez guitar", description: "it's a guitar", rental_fee: 0, user_id: 2)
@gear2 = Gear.create(name: "Tama Swingstar", description: "2007 drum kit", rental_fee: 0, user_id: 1)
@gear1 = Gear.create(name: "Behringer Amp", description: "2005 Behringer Amp, peak 150 watts", rental_fee: 0, user_id: 2)
