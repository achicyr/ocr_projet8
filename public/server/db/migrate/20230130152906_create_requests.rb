class CreateRequests < ActiveRecord::Migration[7.0]
  def change
    create_table :requests do |t|
      t.integer :requester
      t.boolean :type
      t.boolean :status
      t.integer :tchatID
      t.integer :volontiers
      t.string :location
      t.string :photo
      t.text :description
      t.integer :covered_distance

      t.timestamps
    end
  end
end
