## SpatiaLite Binaries

This package contains shared libraries of SpatiaLite for macOS, Linux, and Windows.
The libraries have no dependencies other than things available by default by the
operating systems. These are shipped as mod_spatialite libraries that can be loaded
using the SQL `load_extension()` function.

## Windows x64

Currently the Windows x64 binaries you can download the spatialite website will crash
when loaded under Windows 10. This has to do with the version of the CRT and MinGW it
was compiled with. The .dll files in this repo are patched with a new version of the
C++ runtime. The files came from `x86_64-6.2.0-release-win32-seh-rt_v5-rev1.7z`.

[More Info](http://blog.jrg.com.br/2016/04/25/Fixing-spatialite-loading-problem/)
[MinGW Download](https://sourceforge.net/projects/mingw-w64/files/Toolchains%20targetting%20Win64/Personal%20Builds/mingw-builds/6.2.0/threads-win32/seh/x86_64-6.2.0-release-win32-seh-rt_v5-rev1.7z/download)
