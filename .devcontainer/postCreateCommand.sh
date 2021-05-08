#/bin/bash

git clone https://github.com/tillhoff/temingo /workspaces/temingo
cd /workspaces/temingo && task build

git clone https://github.com/tillhoff/serve /workspaces/serve
cd /workspaces/serve && task build
