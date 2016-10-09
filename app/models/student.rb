# encoding: utf-8
class Student < ActiveRecord::Base
	acts_as_paranoid column: :deleted_at
	belongs_to :company, ->{ where "courses.deleted_at is NULL"}
	belongs_to :ivent

	attr_accessor :password, :password_confirmation,:change_flag

	validates_presence_of     :name,:message=>I18n.t("activerecord.errors.message.blank")
	validates_length_of       :name, :in=>1..255, :message=>I18n.t("activerecord.errors.message.name_length_wrong")
    validates_presence_of     :code,:message=>I18n.t("activerecord.errors.message.blank")
	validates_uniqueness_of   :code, :case_sensitive => false,:message=>I18n.t("activerecord.errors.message.uniqueness"),:scope =>[:company_id]
	validates_uniqueness_of   :login_id, :case_sensitive => true,:message=>I18n.t("activerecord.errors.message.uniqueness")
	  
	CAMPAIGN_CATEGORY = [["店頭ユーザ",1],["店外ユーザ",2]]

	before_save :encrypt_password
    
    validate :validate_data

    def get_category
	  if self.campaign_category == CAMPAIGN_CATEGORY[0][1]
	    "店頭ユーザ" 
	  else
	    "店外ユーザ"
	  end
    end

	def validate_data
	  if code.present? 
	    if !(/^[a-zA-Z0-9]+$/ =~ code) || code.size != 3
	      self.errors.add("学生コード",I18n.t("activerecord.errors.message.invalid")+"(英数字３桁文字)")
	    end
	  end
	  if parent_code.present? 
	    if !(/^[a-zA-Z0-9]+$/ =~ parent_code) || parent_code.size != 3
	      self.errors.add("親学生コード",I18n.t("activerecord.errors.message.invalid")+"(英数字３桁文字)")
	    end
	  end
	end

	def self.authenticate(login_id, password)
	   store = where("binary login_id ='#{login_id}'").first
	   store && store.authenticated?(password) ? store : nil
	end

	# Encrypts some data with the salt.
    def self.encrypt(password, salt)
      Digest::SHA1.hexdigest("--#{salt}--#{password}--")
    end

    # Encrypts the password with the user salt
    def encrypt(password)
      self.class.encrypt(password, "lottery-app")
    end

    def authenticated?(password)
      self.cryped_password == encrypt(password)
    end

    def initial_password
	  return password
	end

	protected
	# before filter
	def encrypt_password
	  return if password.blank?
	  self.cryped_password = encrypt(password)
	end

end
