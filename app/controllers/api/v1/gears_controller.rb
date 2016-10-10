module Api
  module V1
    class GearsController < ApplicationController
      before_action :set_gear, except: [:create, :new, :index]

      def index
        @gears = Gear.all
        render json: @gears
      end

      def new
        @gear = Gear.new(gear_params)
        if @gear.save
          render json: @gear
        end
      end

      def create
        @gear = Gear.create(gear_params)
      end

      def show
        render json: @gear
      end

      def edit
        render json: @gear
      end

      def update
        render json: @gear
      end

      def destroy
        @gear.destroy
        redirect_to gears_path
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