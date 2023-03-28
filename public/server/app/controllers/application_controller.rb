class ApplicationController < ActionController::Base

    skip_before_action :verify_authenticity_token
    
    after_action :devise_add_params, if: :devise_controller?
    before_action :test, on: :create

    
    def test
        puts "\n\n\n\n=============="
        puts self.methods
        puts "==\n\n\n\n"
        puts "\n\n\n\n"
        puts "\n\n\n\n"

        respond_to do |format|
            format.json { render json: :show }
        end
    end

    def devise_add_params
        devise_parameter_sanitizer.permit(:sign_up) { |u| u.permit(:firstname, :lastname, :phone_number, :email, :password, :confirmation_password) }
        # devise_parameter_sanitizer.permit(:sign_up) { |u| u.permit(:firstname, :lastname, :img_profil, :phone_number, :email, :password, :confirmation_password) }
    end
    
end
