class ChangeCheckOutType < ActiveRecord::Migration[5.1]
  def change
    change_column :bookings, :check_out, :date, using: "check_out::date"
  end
end
