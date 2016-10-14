module Api
  module V1
    class MessagesController < ApplicationController
      before_action :set_message, except: [:create, :index]

      def index
        @messages = Message.all.order(:id).reverse
        render json: @messages
      end

      def sent_messages
        @messages = @user.sent_messages.order(:id).reverse
        render json: @messages
      end

       def received_messages
        @messages = @user.received_messages.order(:id).reverse
        render json: @messages
      end

      def create
        @message = Message.new(message_params)
        @message.sender_id = @user.id
        if @message.sender_id != message_params[:recipient_id] && @message.save 
          render json: @message
        end
      end

      def show
        render json: @message
      end

      def edit
        render json: @message
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