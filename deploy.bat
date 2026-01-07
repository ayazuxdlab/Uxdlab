@echo off
echo === DEPLOY STARTED ===

@REM set PATH="C:\Program Files\nodejs"; "C:\Program Files\Git\cmd";%PATH%

cd /d C:\Uxdlab_App
IF ERRORLEVEL 1 (
    echo FAILED to change directory
    exit /b 1
)

"C:\Program Files\Git\cmd\git.exe" fetch origin
"C:\Program Files\Git\cmd\git.exe" reset --hard origin/main

"C:\Program Files\nodejs\npm.cmd" install --production

C:\nssm-2.24\win64\nssm.exe restart uxdlab-app

echo === DEPLOY FINISHED ===