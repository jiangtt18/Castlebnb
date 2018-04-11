class ChangeCheckInCheckOutType < ActiveRecord::Migration[5.1]
  def change
    change_column :bookings, :check_in, :date, using: "check_in::date"
  end
end
