class AddImageUrlColumn < ActiveRecord::Migration[5.1]
  def change
    add_column :castles, :image_url, :string
  end
end
