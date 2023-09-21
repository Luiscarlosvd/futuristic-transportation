class CreateVehicles < ActiveRecord::Migration[7.0]
  def change
    create_table :vehicles do |t|
      t.string :name
      t.text :description
      t.decimal :price
      t.text :photo
      t.text :photo_back
      t.text :photo_left
      t.text :photo_right

      t.timestamps
    end
  end
end
