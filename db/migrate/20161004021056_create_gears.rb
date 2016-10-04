class CreateGears < ActiveRecord::Migration
  def change
    create_table :gears do |t|

      t.timestamps null: false
      t.string :gear_type
      t.integer :quantity
      t.string :condition
      t.string :year
      t.integer :value
      t.string :rules
      t.string :notes
      t.belongs_to :user
      t.belongs_to :lease

    end
  end
end
