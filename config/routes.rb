Rails.application.routes.draw do
  resources :users
  get '*unmatched_route', :to => 'application#angularjs'
end
