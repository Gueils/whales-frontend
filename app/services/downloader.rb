class Downloader
  def self.get_path(path)
    downloader = new(path)

    downloader.clone
    downloader.hashed_directory
  end

  def initialize(path)
    @repo = path
  end

  def clone
    `git clone "#{@repo}" "#{repository_directory}"`
    raise "Couldn't download the repo" unless $?.success?
  end

  def repository_directory
    Rails.root.join('tmp', hashed_directory)
  end

  def hashed_directory
    @hashed_directory ||= "#{SecureRandom.hex}"
  end
end
