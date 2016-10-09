# encoding: utf-8
class ChooseCoursesController < BaseController
  layout :get_layout
  
  # GET /ChooseCourse
  # GET /ChooseCourse.json
  def index
    @choose_courses = ChooseCourse.joins(:course).joins(:student)
    if request.post?
      if params[:choose_course].present? && params[:choose_course][:coucode].present?
        @choose_courses = @choose_courses.where("courses.code like '%#{params[:choose_course][:coucode]}%'").paginate(:page => params[:page],:per_page => 10)
      end
      if params[:choose_course].present? && params[:choose_course][:couname].present?
        @choose_courses = @choose_courses.where("courses.name like '%#{params[:choose_course][:couname]}%'").paginate(:page => params[:page],:per_page => 10)
      end
      if params[:choose_course].present? && params[:choose_course][:stucode].present?
        @choose_courses = @choose_courses.where("students.code like '%#{params[:choose_course][:stucode]}%'").paginate(:page => params[:page],:per_page => 10)
      end
      if params[:choose_course].present? && params[:choose_course][:stuname].present?
        @choose_courses = @choose_courses.where("students.name like '%#{params[:choose_course][:stuname]}%'").paginate(:page => params[:page],:per_page => 10)
      end
    else
      @choose_courses = @choose_courses.paginate(:page => params[:page],:per_page => 10)
    end
  end

  private

    # Never trust parameters from the scary internet, only allow the white list through.
    def choose_course_params
      params.require(:choose_course).permit(:student_id, :course_id, :code, :course_open_date, :deleted_at)
    end

    def get_layout
      return 'admin/admin'
    end
end
