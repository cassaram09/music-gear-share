module Api
  module V1
    class GearsController < ApplicationController
      before_action :set_gear, except: [:create, :index]

      def index
        @gears = Gear.all
        render json: @gears
      end

      def my_gear
        @gears = @user.gears.order(:id)
        render json: @gears
      end

      def create
        @gear = Gear.new(gear_params)
        @gear.user_id = @user.id
        if @gear.save
          render json: @gear
        end
      end

      def show
        render json: @gear
      end

      def edit
        render json: @gear
      end

      def update
        if @gear.update(gear_params)
          render json: @gear
        end
      end

      def destroy
        @gear.destroy
        render json: @gear
      end

      ## PRIVATE METHODS

      private

      def gear_params
        params.require(:gear).permit(:gear_type, :quantity, :condition, :year, :value, :rules, :notes, :user_id, :lease_id)
      end

      def set_gear
        @gear = Gear.find_by(id: params[:id])
      end

    end
  end
end