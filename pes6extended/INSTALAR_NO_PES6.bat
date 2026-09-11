@echo off
setlocal
set "GAME=D:\PES 6"

echo ==========================================
echo         PES6Extended v0.1 Installer
echo ==========================================
echo.

if not exist "%GAME%\PES6.exe" (
  echo [ERRO] Nao encontrei: %GAME%\PES6.exe
  echo Confirme se seu jogo realmente esta em D:\PES 6
  echo.
  pause
  exit /b 1
)

copy /Y "%~dp0PES6Extended.asi" "%GAME%\PES6Extended.asi" >nul
if errorlevel 1 goto :erro
copy /Y "%~dp0PES6Extended.ini" "%GAME%\PES6Extended.ini" >nul
if errorlevel 1 goto :erro
copy /Y "%~dp0d3d9.dll" "%GAME%\d3d9.dll" >nul
if errorlevel 1 goto :erro

echo [OK] Arquivos instalados em %GAME%
echo.
echo Abra o PES6.exe normalmente.
echo Depois feche o jogo e procure:
echo %GAME%\PES6Extended.log
echo.
echo Se o log contiver "Plugin loaded successfully.", o teste funcionou.
echo.
pause
exit /b 0

:erro
echo.
echo [ERRO] Falha ao copiar os arquivos. Tente executar este BAT como administrador.
echo.
pause
exit /b 1
