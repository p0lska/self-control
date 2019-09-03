class ApplicationController < ActionController::Base
  protect_from_forgery with: :exception
  #respond_to :json
  def angularjs
    render 'layouts/application'
  end
end
