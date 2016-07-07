webeditor一个开源的web开发IDE.其设计思想是简单,易用
# 特性
* 项目树显示
* 文件操作(创建,删除,重命名)
* 支持 js,php,go,c,java,json,lua,ruby,py等等语言的高亮显示和代码提示
* 代码编辑和保存
* 支持terminal控制台

#Install
## unix类系统
git clone https://github.com/suxiaoxin/webeditor.git   
cd webeditor   
npm install   
npm start   
## windows系统
下载 https://github.com/suxiaoxin/webeditor.git  压缩包解压到webeditor目或者git clone   
因为pty.js依赖node-gyp,所以需要安装下面的依赖，https://github.com/nodejs/node-gyp   
  *  [Visual C++ Build Tools](http://landinghub.visualstudio.com/visual-cpp-build-tools) using the **Default Install** option.
  *  [Visual Studio 2015](https://www.visualstudio.com/products/visual-studio-community-vs) 
  * bulb: [Windows Vista / 7 only] requires [.NET Framework 4.5.1](http://www.microsoft.com/en-us/download/details.aspx?id=40773)
  * Install [Python 2.7](https://www.python.org/downloads/) (`v3.x.x` is not supported), and run `npm config set python python2.7` 
  * Launch cmd, `npm config set msvs_version 2015`   
如果觉得上面的依赖安装太麻烦，可以去package.json文件里面去掉pty.js,然后在app/index.js文件注释掉var pty = require('pty.js')，不安装pty.js只会导致terminal功能无法使用，不影响其他功能   
cd webeditor   
npm install   
npm start   
#Useage
http://ip:8888

![Alt text](webeditor.png)
#未来计划推出的功能： 
1. 项目搜索功能
2. 允许多用户同步编辑。
3. 代码比较功能


