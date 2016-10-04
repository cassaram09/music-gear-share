class CreateRatings < ActiveRecord::Migration
  def change
    create_table :ratings do |t|

      t.timestamps null: false
      t.integer :rating
      t.string :notes
      t.integer "reviewer_id"
      t.integer "reviewee_id"
    end
  end
end
