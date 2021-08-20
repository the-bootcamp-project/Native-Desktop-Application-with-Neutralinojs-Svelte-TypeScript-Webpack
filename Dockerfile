FROM tbcp/nodejs:debian

USER bootcamp

WORKDIR /home/bootcamp/

RUN sudo yarn global add webpack webpack-cli webpack-bundle-analyzer typescript --prefix /usr/local

RUN sudo yarn global add  @neutralinojs/neu --prefix /usr/local

COPY ./package.json /home/bootcamp/

RUN yarn install

COPY . /home/bootcamp/
