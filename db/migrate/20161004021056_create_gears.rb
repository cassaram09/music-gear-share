class CreateGears < ActiveRecord::Migration
  def change
    create_table :gears do |t|

      t.timestamps null: false
      t.string :name
      t.string :description
      t.integer :rental_fee
      t.belongs_to :user
      t.belongs_to :lease

    end
  end
end
