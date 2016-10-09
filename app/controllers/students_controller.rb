# encoding: utf-8
class StudentsController < BaseController
  layout :get_layout

  # GET /students
  # GET /students.json
  def index
    if request.post?
      if student_params[:code].blank? && student_params[:name].blank?
        @students = Student.paginate(:page => params[:page],:per_page => 10)
      elsif student_params[:code].present? && student_params[:name].present?
        @students = Student.where("code like '%#{student_params[:code].strip}%'").
        where("name like '%#{student_params[:name].strip}%'").paginate(:page => params[:page],:per_page => 10)
      elsif student_params[:code].present?
        @students = Student.where("code like '%#{student_params[:code].strip}%'").paginate(:page => params[:page],:per_page => 10)
      elsif student_params[:name].present?
        @students = Student.where("name like '%#{student_params[:name].strip}%'").paginate(:page => params[:page],:per_page => 10)
      end

    else
      @students = Student.paginate(:page => params[:page],:per_page => 10)
    end
  end

  def select_course
    if params[:course_id].present?
      choose_course = ChooseCourse.new({:course_id => params[:course_id],:student_id => params[:student_id]})
      choose_course.code = params[:course_id]+"_"+params[:student_id]
      choose_course.code = DateTime.now
      choose_course.save
      flash[:notice] = t('choose_success')
    else
      flash[:notice] = t('choose_course')
    end
    redirect_to :action => "add_course", :controller => "courses"
  end

  private
    # Never trust parameters from the scary internet, only allow the white list through.
    def student_params
      params.require(:student).permit(:code, :name, :email, :tel, :address, :delete_at)
    end

    def get_layout
      if params[:action] == "select_course"
      return 'admin/admin_shadow'
    end
    return 'admin/admin'
  end
end
