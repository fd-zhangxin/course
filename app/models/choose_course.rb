# encoding: utf-8
class ChooseCourse < ActiveRecord::Base

	acts_as_paranoid column: :deleted_at

	belongs_to :course, ->{ where "courses.deleted_at is NULL"}
	belongs_to :student, ->{ where "students.deleted_at is NULL"}

	def self.get_students(*args)
	  Student.joins("LEFT OUTER JOIN `choose_courses` ON (`students`.`id` = `choose_courses`.`student_id`) AND choose_courses.deleted_at is null").where("choose_courses.course_id = ? ", args[0]).order("choose_courses.created_at").all
	end
end
