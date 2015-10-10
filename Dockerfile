FROM ubuntu
MAINTAINER Mori KEITA 

RUN apt-get install wget
RUN echo 'Installation wget' 

RUN apt-get install curl 

RUN echo '------------------------' 
RUN echo 'Installation curl' 
RUN echo '------------------------' 

RUN echo '------------------------' 
RUN echo 'Installation nodejs npm mongodb nginx' 
RUN apt-get -qqy install nodejs npm mongodb nginx
RUN echo '------------------------' 

RUN curl https://install.meteor.com/ | sh

EXPOSE 3000
