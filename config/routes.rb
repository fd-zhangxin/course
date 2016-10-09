Rails.application.routes.draw do

  match  'choose_courses/index',    :controller => 'choose_courses', :action => 'index', via: [:get, :post]
  match  'courses/index', :controller => 'courses', :action => 'index', via: [:get, :post]
  match  'courses/show',  :controller => 'courses', :action => 'show', via: [:get, :post]
  match  'courses/edit/:id',              to: 'courses#edit', id: :id, via: [:get, :post]
  match  'courses/update/:id',              to: 'courses#update', id: :id, via: [:get, :post]
  match  'courses/destroy/:id',              to: 'courses#destroy', id: :id, via: [:get, :post]
  match  'courses/create',                           via: [:get, :post]
  match  'courses/add_course',                           via: [:get, :post]
  get    'courses/new',                                               via: [:get, :post] 
  match  'students/index', :controller => 'students', :action => 'index', via: [:get, :post]
  match  'students/select_course', :controller => 'students', :action => 'select_course', via: [:get, :post]

  get ':controller/:action/:id'
  get ':controller/:action/:id.:format'

  root 'courses#index'

end
