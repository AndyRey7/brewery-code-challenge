class Api::V1::BreweryController < ApplicationController
    def index
      @breweries = Brewery.all
      render json: @breweries, status: :ok
    end

    def show
      @brewery = Brewery.find(params[:id])
      render json: @brewery, status: :ok
    end
end
