FROM theclowder/ruby_node:2.4-7.x
MAINTAINER Icalia Labs <weare@icalialabs.com>

ENV PATH=/usr/src/app/bin:$PATH RAILS_ENV=development RACK_ENV=development LANG=C.UTF-8
WORKDIR /usr/src/app

ADD ./Gemfile* /usr/src/app/

RUN bundle install 

ADD . /usr/src/app
