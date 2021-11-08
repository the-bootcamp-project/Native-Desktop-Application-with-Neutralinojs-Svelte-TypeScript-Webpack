FROM tbcp/nodejs:debian

USER bootcamp

WORKDIR /home/bootcamp/

RUN sudo yarn global add webpack webpack-cli webpack-bundle-analyzer typescript cross-env concurrently --prefix /usr/local

RUN sudo yarn global add electron docsify-cli@latest --prefix /usr/local

COPY ./package.json /home/bootcamp/

RUN yarn install
