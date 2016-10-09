# encoding: utf-8
class CoursesController < BaseController
  
  layout :get_layout

  def index
    if request.post?
      search
    else
      @courses = Course.paginate(:page => params[:page],:per_page => 10)
    end
  end

  def search
    if course_params[:code].blank? && course_params[:name].blank?
      @courses = Course.paginate(:page => params[:page],:per_page => 10)
    elsif course_params[:code].present? && course_params[:name].present?
      @courses = Course.where("code like '%#{course_params[:code].strip}%'").
      where("name like '%#{course_params[:name].strip}%'").paginate(:page => params[:page],:per_page => 10)
    elsif course_params[:code].present?
      @courses = Course.where("code like '%#{course_params[:code].strip}%'").paginate(:page => params[:page],:per_page => 10)
    elsif course_params[:name].present?
      @courses = Course.where("name like '%#{course_params[:name].strip}%'").paginate(:page => params[:page],:per_page => 10)
    end
  end

  def show
    @course = Course.find_by_id(params[:id])
  end
  
  def new
    @course = Course.new
  end
  
  def create
     @course = Course.new(course_params)
    if @course.save
      flash[:notice] = I18n.t("save_success")
      redirect_to "/courses/index"
    else
      render :new
    end

  end
    
  def edit
    @course = Course.find_by_id(params[:id])
  end 

  def update
      @course = Course.find_by_id(params[:id])
      temp_params = course_params
      if @course.update(temp_params)
        redirect_to "/courses/show?id=#{@course.id}"
      else
        render :edit 
      end
    # end
  end

  def destroy
    @course = Course.find_by_id(params[:id])
    @course.destroy
    flash[:notice] = t("delete_success")
    redirect_to "/courses/index"
  end

  def add_course
    if request.post?
      search
    else
      @courses = Course.paginate(:page => params[:page],:per_page => 10)
    end
  end

  private

  def course_params
      params.require(:course).permit(:code, :name, :description, :deleted)
    end

  def get_layout
    if params[:action] == "add_course"
      return 'admin/admin_shadow'
    end
    return 'admin/admin'
  end

end