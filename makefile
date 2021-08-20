#!/bin/bash
SHELL := /bin/bash

package=desktop-app-neutralinojs

install:
	yarn install

lint:

sast:

unittests:

build:
	neu build

release:
	neu build --release

upload:
	sudo neu update
