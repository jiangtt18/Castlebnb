class AddBackColumnsids < ActiveRecord::Migration[5.1]
  def change
    add_column :bookings, :castle_id, :integer
    add_column :bookings, :guest_id, :integer
  end
end
