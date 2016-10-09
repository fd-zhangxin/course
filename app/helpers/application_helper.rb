module ApplicationHelper
	
  # add  submit param for will_paginate, so will_paginate submit a form
  # javascript mothed form_submit_will_paginate in application.js
  #【返値】titles  :hash
  def form_submit_will_paginate(paginator, options={})
  	options = options.merge({:next_label => "下一页", :previous_label => "前一页"})
    submit = options[:submit]
    if options[:action].present?
      action = url_for(:action => options[:action])
    end
    options = options.symbolize_keys.reverse_merge({:previous_label => t("btn.previous_label"), :next_label => t("btn.next_label")})
    str = will_paginate(paginator, options)
    return str if submit.blank?
    if str != nil
     str.gsub(/href="[^"]*?page=(\d*)"/) do |temp|
        temp = temp.split("?").last
        temp = temp.split("=").last
        if action.present?
          "href=\"#\" onclick='form_submit_will_paginate(\"#{submit}\",\"#{temp.to_i}\",\"#{action.to_s}')'"
        else
          "href=\"#\" onclick=\"form_submit_will_paginate('#{submit}','#{temp.to_i}')\""
        end
      end.html_safe
    end

  end

  def process_params(para = params)
    return para unless para.is_a?(Hash)
    new_para = {}
    para.each do |k, v|
      next if ["controller", "action"].include?(k.to_s) || v.blank?
      new_para[k] = process_params(v)
    end
    new_para
  end

end
