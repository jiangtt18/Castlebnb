class DropStatus < ActiveRecord::Migration[5.1]
  def change
    remove_column :bookings, :status
  end
end
