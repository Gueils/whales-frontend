require 'rails_helper'

describe Downloader do
  before {
    allow(SecureRandom).to receive(:hex).and_return("fake")
    @good_cloning = double("good_cloning")
    @bad_cloning = double("bad_cloning")

    allow(@good_cloning).to receive(:clone).and_return(true)
    allow(@bad_cloning).to receive(:clone).and_return(false)
  }

  subject { Downloader.new("https://fake.git")}

  it "clones a repo" do
    expect(@good_cloning.clone).to be(true)
  end

  it "fails to clone a repo" do
    expect(@bad_cloning.clone).to be(false)
  end

  it "gets the repository path" do
    expect(subject.repository_directory).to eq(Rails.root.join("tmp", "fake"))
  end

  it "gets the repository directory name" do
    expect(subject.hashed_directory).to eq("fake")
  end
end
