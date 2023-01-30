class CreateTchats < ActiveRecord::Migration[7.0]
  def change
    create_table :tchats do |t|
      t.integer :requester
      t.integer :vonlontier
      t.text :contents

      t.timestamps
    end
  end
end
