class AddColumnMaxGuests < ActiveRecord::Migration[5.1]
  def change
    add_column :castles, :max_guests, :integer
  end
end
