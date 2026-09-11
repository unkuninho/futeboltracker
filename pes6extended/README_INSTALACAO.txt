PES6Extended v0.1
=================

SEU PES
-------
D:\PES 6\PES6.exe

O QUE ESTA VERSAO FAZ
---------------------
Esta v0.1 apenas prova que conseguimos executar nosso proprio codigo dentro do PES6.exe.
Ela NAO adiciona times/jogadores ainda, NAO aplica hooks e NAO modifica o PES6.exe em disco.

ARQUIVOS DO PACOTE
------------------
PES6Extended.asi   -> nosso plugin x86
PES6Extended.ini   -> configuracao inicial
d3d9.dll           -> Ultimate ASI Loader Win32 (ThirteenAG), usado para carregar .asi
INSTALAR_NO_PES6.bat -> instala automaticamente em D:\PES 6

INSTALACAO FACIL
----------------
1. Extraia o ZIP para qualquer pasta.
2. Execute INSTALAR_NO_PES6.bat.
3. Abra D:\PES 6\PES6.exe normalmente.
4. Espere chegar ao menu principal e feche o jogo.
5. Procure D:\PES 6\PES6Extended.log

TESTE APROVADO
--------------
Dentro do log deve aparecer:

PES6Extended v0.1
Plugin loaded successfully.
Process: PES6.exe
Safe test mode enabled.
No hooks installed.
No PES6 memory modified.

Se isso aparecer, nosso codigo foi carregado dentro do PES 6 com sucesso.

DESINSTALAR
-----------
Apague estes arquivos de D:\PES 6:
PES6Extended.asi
PES6Extended.ini
PES6Extended.log
d3d9.dll

ATENCAO
-------
Se voce JA TIVER um d3d9.dll personalizado na pasta D:\PES 6, faça backup antes de instalar.
O instalador deste pacote substitui D:\PES 6\d3d9.dll.

O d3d9.dll deste pacote vem do projeto open-source Ultimate ASI Loader, de ThirteenAG.
PES6Extended e o nosso plugin de teste.
