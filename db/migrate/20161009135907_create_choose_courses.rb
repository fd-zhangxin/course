class CreateChooseCourses < ActiveRecord::Migration
  def change
    create_table :choose_courses, :options => 'ENGINE=InnoDB DEFAULT CHARSET=utf8' do |t|
      t.column :student_id, :integer
      t.column :course_id, :integer
      t.column :code, :string
      t.column :course_open_date, :date
      t.datetime :deleted_at

      t.timestamps
    end
  end
end
