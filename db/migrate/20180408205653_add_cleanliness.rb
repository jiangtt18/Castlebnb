class AddCleanliness < ActiveRecord::Migration[5.1]
  def change
    add_column :reviews, :cleanliness, :integer, null:false
  end
end
