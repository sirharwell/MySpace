class Api::DudesController < DudelicationController
  before_action :set_dude, only: [:show, :update, :destroy]

  def index
    render json: Dude.all.order(created_at: :desc)
  end

  def show
    render json: @dude
  end

  def create
    dude = Dude.create(dude_params)
    if dude.save
      render json: dude
    else
      render json: { errors: dude.errors.full_messages.join(',') }, status: 422
    end
  end

  def update
    if @dude.update(dude_params)
      render json: @dude
    else
      render json: { errors: @dude.errors.full_messages.join(',') }, status: 422
    end
  end

  def destroy
    @dude.destroy
  end

  private
    def set_dude
      @dude = Dude.find(params[:id])
    end

    def dude_params
      params.require(:dude).permit(:name, :age, :job, :city)
    end
end
