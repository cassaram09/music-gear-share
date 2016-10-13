module Api
  module V1
    class MessagesController < ApplicationController
      before_action :set_message, except: [:create, :index]

      def index
        @messages = Message.all.order(:id).reverse
        render json: @messages
      end

      def my_gear
        @messages = @user.gears.order(:id)
        render json: @messages
      end

      def create
        message = Message.new(message_params)
        message.user_id = @user.id
        if message.save
          render json: message
        end
      end

      def show
        render json: message
      end

      def edit
        render json: message
      end

      def update
        if message.update(gear_params)
          render json: message
        end
      end

      def destroy
        message.destroy
        render json: message
      end

      ## PRIVATE METHODS

      private

      def message_params
        params.require(:message).permit(:content, :sender_id, :recipient_id)
      end

      def set_message
        message = Message.find_by(id: params[:id])
      end

    end
  end
end