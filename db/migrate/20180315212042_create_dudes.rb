class CreateDudes < ActiveRecord::Migration[5.1]
  def change
    create_table :dudes do |t|
      t.string :name
      t.float :age
      t.text :job
      t.text :city
      t.text :pic
      t.timestamps
    end
  end
end
