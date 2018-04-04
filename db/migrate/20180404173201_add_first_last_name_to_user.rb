class AddFirstLastNameToUser < ActiveRecord::Migration[5.1]
  def change
    add_column :users, :firstname, :string, null:false, default: ''
    add_column :users, :lastname, :string, null:false, default: ''   
  end
end
