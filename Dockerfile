FROM caddy:alpine

RUN apk update && apk add git
RUN git clone https://github.com/deSHELL/startpage.git --depth 1 /srv/startpage 
RUN cd /srv/startpage
ENTRYPOINT ["caddy", "file-server", "-r", "/srv/startpage"]
