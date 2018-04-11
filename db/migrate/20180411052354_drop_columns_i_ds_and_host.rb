class DropColumnsIDsAndHost < ActiveRecord::Migration[5.1]
  def change
    remove_column :bookings, :castle_id
    remove_column :bookings, :guest_id
    remove_column :bookings, :host
  end
end
