#!/bin/bash

if [[ ! -f /workspace/serve/serve ]]; then
  git clone https://github.com/tillhoff/serve /workspace/serve && cd /workspace/serve && task build
fi

if [[ ! -f /workspace/temingo/temingo ]]; then
  git clone https://github.com/tillhoff/temingo.. /workspace/temingo && cd /workspace/temingo && task build
fi
