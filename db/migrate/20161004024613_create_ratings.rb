class CreateRatings < ActiveRecord::Migration
  def change
    create_table :ratings do |t|

      t.timestamps null: false
      t.integer :rating
      t.string :notes
    end
  end
end
