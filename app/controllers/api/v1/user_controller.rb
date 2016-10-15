module Api
  module V1
    class UserController < ApplicationController

      def profile
        render json: @user
      end

    end
  end
end