Rails.application.routes.draw do
  get '/', to: 'landing#index'
  post '/analize', to: 'analizer#analize'
  get '/auth/github/callback', to: 'landing#callback'
end
