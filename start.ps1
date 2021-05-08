$TEMINGO_VERSION="0.0.1"
$SERVE_VERSION="0.0.1"

# checking if temingo-binary exists
if (-not (Test-Path temingo_$TEMINGO_VERSION.exe)) {
  wget https://github.com/tillhoff/temingo/releases/download/v$TEMINGO_VERSION/temingo_windows_amd64.exe -OutFile temingo_$TEMINGO_VERSION.exe # download temingo
}
echo "temingo - check!"

# checking if serve-binary exists
if (-not (Test-Path serve_$SERVE_VERSION.exe)) {
  wget https://github.com/tillhoff/serve/releases/download/v$SERVE_VERSION/serve_windows_amd64.exe -OutFile serve_$SERVE_VERSION.exe # download serve
}
echo "serve - check!"

code . # start vscode
echo "vscode - check!"