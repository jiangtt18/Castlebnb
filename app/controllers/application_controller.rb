class ApplicationController < ActionController::Base
  protect_from_forgery with: :exception

  helper_method :current_user, :logged_in?

 private

 def current_user
   return nil unless session[:session_token]
   @current_user ||= User.find_by(session_token: session[:session_token])
 end

 def logged_in?
   !!current_user
 end

 def login(user)
   user.reset_session_token!
   session[:session_token] = user.session_token
   @current_user = user
 end

 def logout
   current_user.reset_session_token!
   session[:session_token] = nil
   @current_user = nil
 end

 def require_logged_in
   unless current_user
     render json: ['invalid credentials'] , status: 401
   end
 end

end

# login/ logout : 
# 1 reset session token;
# 2 browser update value for key session (assign new session token / set to nil)
# 3 browswer update current user status
