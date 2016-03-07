class PubsController < ApplicationController
  before_action :set_pub, only: [:show, :update, :destroy]

  # GET /pubs
  # GET /pubs.json
  def index
    @pubs = Pub.all

    render json: @pubs
  end

  # GET /pubs/1
  # GET /pubs/1.json
  def show
    render json: @pub
  end

  # POST /pubs
  # POST /pubs.json
  def create
    # console.log('params', params)
    # console.log('pub_params', pub_params)
    puts "pub params #{pub_params}"
    @pub = Pub.new(pub_params)
    
    if @pub.save
      render json: @pub, status: :created, location: @pub
    else
      render json: @pub.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /pubs/1
  # PATCH/PUT /pubs/1.json
  def update
    @pub = Pub.find(params[:id])


    if @pub.update(pub_params)
      head :no_content
    else
      render json: @pub.errors, status: :unprocessable_entity
    end
  end

  # DELETE /pubs/1
  # DELETE /pubs/1.json
  def destroy
    @pub.destroy

    head :no_content
  end

  private

    def set_pub
      @pub = Pub.find(params[:id])
    end

    def pub_params
      params.require(:pub).permit!#(:name, :location => Hash, :details => Hash)
    end
end
