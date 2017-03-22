require "rails_helper"

RSpec.describe AnalizerController, type: :routing do
  describe "routing" do
    it "routes to #analize" do
      expect(:post => "/analize").to route_to("analizer#analize")
    end
  end
end
