# encoding: utf-8
class Course < ActiveRecord::Base
  acts_as_paranoid column: :deleted_at

  validates_presence_of     :name,:message=>I18n.t("activerecord.errors.message.blank")
  validates_length_of       :name, :in=>1..30, :message=>I18n.t("activerecord.errors.message.name_length_wrong")
  validates_presence_of     :code,:message=>I18n.t("activerecord.errors.message.blank") 
  validate :validate_data

  def validate_data
    if code.present?
      if !(/^[a-zA-Z0-9]+$/ =~ code) || code.size != 10
        self.errors.add("课程编号","请输入10位的英数字！")
      end
    end
  end
end
