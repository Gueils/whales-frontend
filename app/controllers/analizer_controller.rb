class AnalizerController < ApplicationController
  def analize
    dockerfile, dockercompose = cli_response
    render json: {
             dockerfile: dockerfile, dockercompose: dockercompose
           }, status: :ok
  rescue => e
    render json: {error: "#{e}" }, status: :internal_server_error
  end

  private

  def cli_response
    @cli_response ||= Cli.run(analizer_params[:url])
  end

  def analizer_params
    params.fetch(:repository, {})
  end
end
