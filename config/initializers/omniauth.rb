class NonExplodingFailureEndpoint
  attr_reader :env

  def self.call(env)
    new(env).call
  end

  def initialize(env)
    @env = env
  end

  def call
    redirect_to_failure
  end

  def raise_out!
    raise env['omniauth.error'] || OmniAuth::Error.new(env['omniauth.error.type'])
  end

  def redirect_to_failure
    Rack::Response.new(["302 Moved"], 302, 'Location' => '/').finish
  end
end

OmniAuth.config.on_failure = NonExplodingFailureEndpoint

Rails.application.config.middleware.use OmniAuth::Builder do
  provider :github, ENV['GITHUB_KEY'], ENV['GITHUB_SECRET'], scope: "repo,public_repo"
end
