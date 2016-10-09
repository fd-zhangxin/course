class CreateStudents < ActiveRecord::Migration
  def change
    create_table :students,:options => 'ENGINE=InnoDB DEFAULT CHARSET=utf8' do |t|
      t.string :code
      t.string :name
      t.string :email
      t.column :tel, :string
      t.string :address
      t.datetime :deleted_at

      t.timestamps
    end
  end
end
