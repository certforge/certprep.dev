#!/usr/bin/env sh
# shellcheck shell=sh

if [ -z "$husky_skip_init" ]; then
  husky_skip_init=1

  export PATH="${PATH}:./node_modules/.bin"
fi
