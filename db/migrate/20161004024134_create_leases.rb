class CreateLeases < ActiveRecord::Migration
  def change
    create_table :leases do |t|

      t.timestamps null: false
      t.date :checkout
      t.date :checkin
      t.boolean :returned
      t.string :notes
      t.integer "owner_id"
      t.integer "renter_id"

    end
  end
end
