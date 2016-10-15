class CreateGears < ActiveRecord::Migration
  def change
    create_table :gears do |t|

      t.timestamps null: false
      t.string :name
      t.string :description
      t.integer :rental_fee
      t.integer :gear_type
      t.belongs_to :user

    end
  end
end
