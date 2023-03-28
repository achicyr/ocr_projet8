class Api::V1::TchatsController < ApplicationController
  before_action :set_tchat, only: %i[ show update destroy ]

  # GET /tchats
  def index
    @tchats = Tchat.all

    render json: @tchats
  end

  # GET /tchats/1
  def show
    render json: @tchat
  end

  # POST /tchats
  def create
    puts "\n\n\njdoidjoijfds"
    puts params
    puts tchat_params
    @tchat = Tchat.new(tchat_params)

    if @tchat.save
      puts @tchat
      puts @tchat.inspect
      # puts @tchat.api_v1_tchat_url
      # puts @tchat.tchat_url
      render json: @tchat.to_json, status: :created
    else
      render json: @tchat.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /tchats/1
  def update
    if @tchat.update(tchat_params)
      render json: @tchat
    else
      render json: @tchat.errors, status: :unprocessable_entity
    end
  end

  # DELETE /tchats/1
  def destroy
    @tchat.destroy
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_tchat
      @tchat = Tchat.find(params[:id])
    end

    # Only allow a list of trusted parameters through.
    def tchat_params
      params.require(:tchat).permit(:requester_id, :volontier_id, :contents)
    end
end
