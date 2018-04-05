class CreateCastleImages < ActiveRecord::Migration[5.1]
  def change
    create_table :castle_images do |t|
      t.integer :castle_id, null: false
      t.string :image_url,null: false

      t.timestamps
    end
    add_index :castle_images, :castle_id
  end
end
