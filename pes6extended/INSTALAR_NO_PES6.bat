@echo off
setlocal
set "GAME=D:\PES 6"
set "BACKUP=%GAME%\d3d9_before_PES6Extended.dll"

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

if exist "%GAME%\d3d9.dll" (
  if not exist "%BACKUP%" (
    echo Fazendo backup do d3d9.dll existente...
    copy /Y "%GAME%\d3d9.dll" "%BACKUP%" >nul
    if errorlevel 1 goto :erro
  ) else (
    echo Backup anterior de d3d9.dll ja existe. Mantendo o backup.
  )
)

copy /Y "%~dp0PES6Extended.asi" "%GAME%\PES6Extended.asi" >nul
if errorlevel 1 goto :erro
copy /Y "%~dp0PES6Extended.ini" "%GAME%\PES6Extended.ini" >nul
if errorlevel 1 goto :erro
copy /Y "%~dp0d3d9.dll" "%GAME%\d3d9.dll" >nul
if errorlevel 1 goto :erro

echo.
echo [OK] PES6Extended v0.1 instalado em %GAME%
echo.
echo AGORA:
echo 1. Abra D:\PES 6\PES6.exe normalmente.
echo 2. Espere chegar ao menu principal.
echo 3. Feche o jogo.
echo 4. Procure D:\PES 6\PES6Extended.log

echo.
echo Se o log contiver "Plugin loaded successfully.", o teste funcionou.
echo.
pause
exit /b 0

:erro
echo.
echo [ERRO] Falha ao copiar os arquivos.
echo Tente executar este BAT como administrador.
echo Nenhum PES6.exe foi modificado.
echo.
pause
exit /b 1
