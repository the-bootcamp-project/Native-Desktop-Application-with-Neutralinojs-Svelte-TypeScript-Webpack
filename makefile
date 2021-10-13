#!/bin/bash
SHELL := /bin/bash

init:
	@git submodule add -b main --name documentation https://gitlab.com/the-bootcamp-project/frameworks/docs.git docs
	@git submodule add -b main --name components https://gitlab.com/the-bootcamp-project/libraries/svelte-components.git src/components

update:
	@git submodule update --init
	@git submodule update --recursive --remote --merge

clean:
	@find . -name "node_modules" -type d -print0 | xargs -0 /bin/rm -rf
	@find . -name "bundle" -type d -print0 | xargs -0 /bin/rm -rf
	@find . -name "dist" -type d -print0 | xargs -0 /bin/rm -rf
	@find . -name "artifacts" -type d -print0 | xargs -0 /bin/rm -rf
	@find . -name "yarn.lock" -type f -print0 | xargs -0 /bin/rm -rf
	@find . -name "yarn-error.log" -type f -print0 | xargs -0 /bin/rm -rf
	@find . -name "stats.json" -type f -print0 | xargs -0 /bin/rm -rf

install: | clean
	@yarn install

bundle:
	@yarn run bundle

build: | bundle
	@concurrently "yarn:build-*"
