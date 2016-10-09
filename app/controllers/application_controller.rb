# encoding: utf-8
require "erb"
class ApplicationController < ActionController::Base
  include ERB::Util
  # Prevent CSRF attacks by raising an exception.
  # For APIs, you may want to use :null_session instead.
  protect_from_forgery with: :exception

  # before_action :set_locale

  # def set_locale
  #   I18n.locale = params[:locale] || I18n.default_locale
  # end

  def error_messages_for(*params)
    options = params.last.is_a?(Hash) ? params.pop.symbolize_keys : {}
    objects = params.collect {|object_name| instance_variable_get("@#{object_name}") }.compact
    error_messages = objects.map do |object|
      sort_show_error_msg(object)
    end
    count = objects.inject(0) {|sum, object| sum + error_messages[objects.index(object)].size} #edit by gcb
    unless count.zero?
      html = {}
      [:id, :class].each do |key|
        if options.include?(key)
          value = options[key]
          html[key] = value unless value.blank?
        else
          html[key] = 'errorExplanation'
        end
      end
      error_messages.flatten!
      li_tags = error_messages.compact.join.html_safe
      "<div class='alert alert-danger'></p>#{I18n.t('activerecord.errors.message.mess')}<ul style='padding-left:16px;'>#{li_tags}</ul></p></div>"
    else
      ''
    end
  end

  def sort_show_error_msg(obj)
    msg_arr = obj.errors.sort
    #去除隐藏字段
    hidden_attr = obj.class::HIDDEN_ATTRIBUTES rescue []
    msg_arr.delete_if{|key,val|hidden_attr.include?(key)} unless hidden_attr.blank?
    #排序
    hash_field_orders = obj.class::HUMANIZED_ATTRIBUTES_ORDERS rescue []
    if obj.respond_to?(:error_sort) && obj.error_sort.present? && obj.error_sort.is_a?(Array)
      error_sort = obj.error_sort.map(&:to_s)
      msg_arr = msg_arr.sort do |key_a,key_b|
        a = error_sort.index(key_a[0]) || 100000
        b = error_sort.index(key_b[0]) || 100000
        a <=> b
      end
    elsif hash_field_orders.present?
      msg_arr = msg_arr.sort do |key_a,key_b|
        a = hash_field_orders[key_a[0].to_sym].present? ? hash_field_orders[key_a[0].to_sym] : 100000
        b = hash_field_orders[key_b[0].to_sym].present? ? hash_field_orders[key_b[0].to_sym] : 100000
        a <=> b
      end
    end
    full_messages = []
    msg_arr.each do|attr,msg|
      next if msg.nil?
      if attr == "base" || attr == :base
        full_messages << "<li>#{msg}</li>"
      else
        label = obj.class.human_attribute_name(attr)
        if msg.to_s.include?("activerecord.errors.models.#{obj.class.to_s.downcase}.attributes.#{attr}")
          msg = I18n.t("activerecord.errors.messages.#{msg.to_s.split(".").last}")
        end
        full_messages << "<li>#{label + msg}</li>"
      end
    end
    return full_messages
  end

end
