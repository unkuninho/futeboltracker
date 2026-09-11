#define WIN32_LEAN_AND_MEAN
#include <windows.h>
#include <fstream>
#include <iomanip>
#include <sstream>
#include <string>
#include <ctime>

static std::string GetExePath(){ char path[MAX_PATH] = {}; GetModuleFileNameA(nullptr, path, MAX_PATH); return path; }
static std::string GetGameDirectory(){ std::string path=GetExePath(); size_t p=path.find_last_of("\\/"); if(p!=std::string::npos) path.resize(p); return path; }
static std::string GetProcessName(){ std::string path=GetExePath(); size_t p=path.find_last_of("\\/"); return p!=std::string::npos ? path.substr(p+1) : path; }
static std::string GetDateTime(){ std::time_t now=std::time(nullptr); std::tm tm{}; localtime_s(&tm,&now); std::ostringstream ss; ss<<std::put_time(&tm,"%Y-%m-%d %H:%M:%S"); return ss.str(); }
static void Log(const std::string& text){ std::ofstream f(GetGameDirectory()+"\\PES6Extended.log",std::ios::app); if(f) f<<"["<<GetDateTime()<<"] "<<text<<std::endl; }

DWORD WINAPI PES6ExtendedInit(LPVOID){
    Log("========================================");
    Log("PES6Extended v0.1");
    Log("Plugin loaded successfully.");
    Log("Process: "+GetProcessName());
    Log("Game directory: "+GetGameDirectory());
    std::ostringstream base; base<<"PES6.exe module base: 0x"<<std::hex<<std::uppercase<<reinterpret_cast<uintptr_t>(GetModuleHandleA(nullptr)); Log(base.str());
    if(_stricmp(GetProcessName().c_str(),"PES6.exe")!=0) Log("WARNING: process is not named PES6.exe.");
    Log("Safe test mode enabled.");
    Log("No hooks installed.");
    Log("No PES6 memory modified.");
    Log("Next target: executable compatibility detection.");
    Log("========================================");
    return 0;
}

BOOL APIENTRY DllMain(HMODULE module,DWORD reason,LPVOID){
    if(reason==DLL_PROCESS_ATTACH){
        DisableThreadLibraryCalls(module);
        HANDLE thread=CreateThread(nullptr,0,PES6ExtendedInit,nullptr,0,nullptr);
        if(thread) CloseHandle(thread);
    }
    return TRUE;
}
