class CreateTchats < ActiveRecord::Migration[7.0]
  def change
    create_table :tchats do |t|
      t.integer :requester_id
      t.integer :volontier_id
      t.string :contents

      t.timestamps
    end
  end
end
