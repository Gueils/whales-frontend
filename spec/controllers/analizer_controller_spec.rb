require 'rails_helper'

describe AnalizerController, type: :controller do
  let(:valid_attributes) {
    {
      repository: {
        url: "https://github.com/awesome/awesome.git"
      }
    }
  }

  describe "POST #analize" do
    context "with valid params" do
      it "analizes a new repository" do
        allow_any_instance_of(AnalizerController).to receive(:cli_response).and_return(["text for dockerfile", "text for dockercompose"])
post :analize, params: valid_attributes

expect(response).to have_http_status(200)
      end
    end

    context "with invalid params" do
      it "analizes a invalid url" do
        allow_any_instance_of(AnalizerController).to receive(:cli_response).and_raise

        post :analize, params: valid_attributes

        expect(response).to have_http_status(500)
      end
    end
  end
end
