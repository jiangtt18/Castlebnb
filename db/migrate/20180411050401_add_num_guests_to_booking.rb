class AddNumGuestsToBooking < ActiveRecord::Migration[5.1]
  def change
    add_column :bookings, :host, :integer
  end
end
