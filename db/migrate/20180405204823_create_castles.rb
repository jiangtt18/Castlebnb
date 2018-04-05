class CreateCastles < ActiveRecord::Migration[5.1]
  def change
    create_table :castles do |t|
      t.integer :host_id, null: false
      t.string :title, null: false
      t.string :discription, null: false
      t.boolean :is_AV_Equipment
      t.boolean :is_ampleParking
      t.boolean :is_carriage
      t.boolean :is_wifi
      t.boolean :is_oceanView
      t.boolean :is_gardenView
      t.integer :price, null: false
      t.integer :bed_room, null: false
      t.integer :bath_room, null: false
      t.integer :num_guests, null: false
      t.integer :bath, null: false
      t.float :lng, null: false
      t.float :lat, null: false
      t.string :street_address, null: false
      t.string :city, null: false
      t.string :zip_code, null: false
      t.string :state, null: false
      t.string :country, null: false

      t.timestamps
    end
    add_index :castles, :street_address, unique: true
    add_index :castles, :city
    add_index :castles, :zip_code
    add_index :castles, :state
    add_index :castles, :country
  end
end
