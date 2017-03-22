Rails.application.routes.draw do
  get '/', to: 'landing#index'
  post '/analize', to: 'analizer#analize'
end
