class Cli
  def self.run(path)
    cli = new(path)
    result = cli.analize
    result.split("\r\n--------------------------------------------------\r\n")
  end

  def initialize(path)
    @path = path
  end

  def analize
    response = `docker run --interactive --tty --rm --env API_BASE_URI="#{ENV['API_BASE_URI']}" --env BELUGAS_CODE="#{global_directory}" --volume /var/run/docker.sock:/var/run/docker.sock --volume "#{global_directory}":/code icalialabs/whales`

    raise "Couldn't process this repo" unless $?.success?

    response
  end

  def downloaded_file_path
    @downloaded_file_path ||= Downloader.get_path(@path)
  end

  def global_directory
    "/tmp/#{downloaded_file_path}"
  end
end
