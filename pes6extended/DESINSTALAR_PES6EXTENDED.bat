@echo off
setlocal
set "GAME=D:\PES 6"
set "BACKUP=%GAME%\d3d9_before_PES6Extended.dll"

echo ==========================================
echo       PES6Extended v0.1 Uninstaller
echo ==========================================
echo.

if exist "%GAME%\PES6Extended.asi" del /Q "%GAME%\PES6Extended.asi"
if exist "%GAME%\PES6Extended.ini" del /Q "%GAME%\PES6Extended.ini"
if exist "%GAME%\PES6Extended.log" del /Q "%GAME%\PES6Extended.log"
if exist "%GAME%\d3d9.dll" del /Q "%GAME%\d3d9.dll"

if exist "%BACKUP%" (
  echo Restaurando d3d9.dll que ja existia antes...
  move /Y "%BACKUP%" "%GAME%\d3d9.dll" >nul
)

echo.
echo [OK] PES6Extended removido.
echo O PES6.exe nunca foi modificado.
echo.
pause
