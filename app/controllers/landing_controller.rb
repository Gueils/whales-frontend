require 'httparty'

class LandingController < ApplicationController
  def index
    @state = {
      repository: '',
      repositories: [],
      dockerfile: '',
      dockercompose: ''
    }
  end

  def callback
    @state = {
      repository: '',
      repositories: repositories,
      dockerfile: '',
      dockercompose: ''
    }
  end

  private

  def repositories
    repos = HTTParty.get('https://api.github.com/user/repos', headers: { 'Authorization': "token #{token}", 'User-Agent': 'WhalesIL' })

    repos.map do |repo|
      key = "#{repo["html_url"]}.git"
      array_repo = repo["html_url"].split("https://")
      value = "https://#{token}@#{array_repo.last}.git"

      {
        key: key,
        value: value
      }
    end
  end

  def omniauth
    request.env['omniauth.auth']
  end

  def token
    omniauth['credentials']['token']
  end
end
