@echo off
set "PATH=C:\Users\morae\.cache\codex-runtimes\codex-primary-runtime\dependencies\node\bin;%PATH%"
cd /d "%~dp0"
echo Starting Vite at %DATE% %TIME% > dev-server.log
"C:\Users\morae\.cache\codex-runtimes\codex-primary-runtime\dependencies\node\bin\node.exe" ".\node_modules\vite\bin\vite.js" --configLoader native --host 127.0.0.1 --port 5173
echo Vite exited with %ERRORLEVEL% at %DATE% %TIME% >> dev-server.log
