class CreateReviews < ActiveRecord::Migration[5.1]
  def change
    create_table :reviews do |t|
      t.integer :castle_id, null: false
      t.integer :reviewer_id, null: false
      t.string :comment, default: "", null:false
      t.integer :accuracy, null: false
      t.integer :communication, null: false
      t.integer :location,null: false
      t.integer :value, null: false
      t.integer :checkin, null: false
      t.integer :num_reviewers

      t.timestamps

    end
    add_index :reviews, :castle_id
  end
end
