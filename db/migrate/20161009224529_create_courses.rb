class CreateCourses < ActiveRecord::Migration
  def change
    create_table :courses,:options => 'ENGINE=InnoDB DEFAULT CHARSET=utf8' do |t|
      t.string :code
      t.string :name
      t.string :description
      t.datetime :deleted_at
      t.timestamps
    end
  end
end
