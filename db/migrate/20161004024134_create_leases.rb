class CreateLeases < ActiveRecord::Migration
  def change
    create_table :leases do |t|

      t.timestamps null: false
      t.date :checkout
      t.date :checkin
      t.boolean :returned
      t.string :notes

    end
  end
end
