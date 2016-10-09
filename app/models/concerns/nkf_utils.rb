# encoding: utf-8
require 'nkf'
module NKFUtils
  
  class << self
    #`nkf -g #{file_path}`
    # 【引数】文件绝对路径
    # 【返値】字符串like (UTF-8 (LF))
    # 【注意】
    # 【著作】xzh 2012-04-23    
    def guess_file_code(file_path)
      if File.exist?(file_path)
        str = File.read(file_path)
        NKF.guess(str).to_s
      end
    end
    
    # 【引数】文件绝对路径
    # 【返値】是否是utf8格式的文件
    # 【注意】
    # 【著作】xzh 2012-04-23    
    def utf8_file?(file_path)
      if File.exist?(file_path)
        str = File.read(file_path)
        guess_code = NKF.guess(str).to_s
        guess_code.to_s.upcase =~ /UTF-8/ || guess_code.to_s.upcase =~ /UTF8/
      end
    end
    
    # 【引数】需要转码的字符串
    # 【返値】是否是shift_jis格式的文件
    # 【注意】
    # 【著作】xzh 2012-04-23    
    def sjis_file?(file_path)
      if File.exist?(file_path)
        str = File.read(file_path)
        guess_code = NKF.guess(str).to_s
        guess_code.to_s.upcase =~ /SHIFT_JIS/
      end
    end
    
    # 【引数】需要转码的字符串
    # 【返値】UTF-8编号格式的字符串
    # 【注意】
    # 【著作】xzh 2012-04-23
    def toutf8(input_string)
      head = 'EF BB BF'.split(' ').map{|a|a.hex.chr}.join()
      return head = input_string
#      return NKF.nkf('-w', input_string)
    end
    
  end
  
  class FileCodeErrorException < Exception; end
  
end