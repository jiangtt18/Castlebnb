class CreateBookings < ActiveRecord::Migration[5.1]
  def change
    create_table :bookings do |t|
      t.integer :guiest_id, null:false
      t.integer :castle_id, null:false
      t.string :check_in, null:false
      t.string :check_out, null:false
      t.integer :num_guests, null:false
      t.string :status, null:false
      t.timestamps
    end
      add_index :bookings, :guiest_id, unique: true
      add_index :bookings, :castle_id, unique: true
  end
end
