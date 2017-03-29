FROM theclowder/ruby_node:2.4-7.x
MAINTAINER Icalia Labs <weare@icalialabs.com>

RUN set -ex \
  && export DOCKER_BUCKET=get.docker.com \
  && export DOCKER_VERSION=1.12.5 \
  && export DOCKER_SHA256=0058867ac46a1eba283e2441b1bb5455df846144f9d9ba079e97655399d4a2c6 \
  && curl -fSL "https://${DOCKER_BUCKET}/builds/Linux/x86_64/docker-${DOCKER_VERSION}.tgz" -o docker.tgz \
	&& echo "${DOCKER_SHA256} *docker.tgz" | sha256sum -c - \
	&& tar -xzvf docker.tgz \
	&& mv docker/* /usr/local/bin/ \
	&& rmdir docker \
	&& rm docker.tgz

RUN apt-get -y install unzip
RUN mkdir -p /code

ENV PATH=/usr/src/app/bin:$PATH RAILS_ENV=production RACK_ENV=production LANG=C.UTF-8

WORKDIR /usr/src/app

ADD ./Gemfile* /usr/src/app/

RUN bundle install

ADD . /usr/src/app/

RUN cd /usr/src/app/client && npm install --save

RUN cd /usr/src/app/client && npm run build:production:server

RUN cd /usr/src/app && rails assets:precompile

EXPOSE 5000 3500
