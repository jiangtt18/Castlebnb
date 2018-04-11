class ChangeTypoGuest < ActiveRecord::Migration[5.1]
  def change
    rename_column :bookings, :guiest_id, :guest_id
  end
end
