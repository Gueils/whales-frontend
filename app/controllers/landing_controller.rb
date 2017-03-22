class LandingController < ApplicationController
  def index
    @state = {
      repository: '',
      repositories: [],
      dockerfile: '',
      dockercompose: ''
    }
  end
end
