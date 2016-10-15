module Api
  module V1
    class UserController < ApplicationController
      before_action :set_message, except: [:create, :index]

      def profile
        render json: @user
      end

      def update
        if @message.update(message_params)
          render json: @message
        end
      end

      def destroy
        @message.destroy
        render json: message
      end

      ## PRIVATE METHODS

      private

      def message_params
        params.require(:message).permit(:content, :sender_id, :recipient_id)
      end

      def set_message
        @message = Message.find_by(id: params[:id])
      end

    end
  end
end