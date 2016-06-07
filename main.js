require("source-map-support").install();
!function(e){function l(o){if(r[o])return r[o].exports;var t=r[o]={exports:{},id:o,loaded:!1};return e[o].call(t.exports,t,t.exports,l),t.loaded=!0,t.exports}var r={};return l.m=e,l.c=r,l.p="",l(0)}([function(e,l,r){"use strict";var o=r(1);o.crashReporter.start({productName:"Blockstack",companyName:"Blockstack Labs",submitURL:"http://127.0.0.1:3000",autoSubmit:!1}),o.app.on("window-all-closed",function(){"darwin"!==process.platform&&o.app.quit()}),o.app.once("ready",function(){var e=(o.screen.getPrimaryDisplay().workAreaSize,new o.BrowserWindow({width:1200,height:900,minWidth:900,minHeight:450,frame:!1,titleBarStyle:"hidden"}));({NODE_ENV:"production"}).HOT?e.loadURL("file://"+__dirname+"/app/dev-app.html"):e.loadURL("file://"+__dirname+"/app/app.html"),e.webContents.on("did-finish-load",function(){e.show(),e.focus()}),e.on("closed",function(){e=null});var l=[{label:"Edit",submenu:[{label:"Undo",accelerator:"CmdOrCtrl+Z",role:"undo"},{label:"Redo",accelerator:"Shift+CmdOrCtrl+Z",role:"redo"},{type:"separator"},{label:"Cut",accelerator:"CmdOrCtrl+X",role:"cut"},{label:"Copy",accelerator:"CmdOrCtrl+C",role:"copy"},{label:"Paste",accelerator:"CmdOrCtrl+V",role:"paste"},{label:"Select All",accelerator:"CmdOrCtrl+A",role:"selectall"}]},{label:"View",submenu:[{label:"Reload",accelerator:"CmdOrCtrl+R",click:function(e,l){l&&l.reload()}},{label:"Toggle Full Screen",accelerator:function(){return"darwin"===process.platform?"Ctrl+Command+F":"F11"}(),click:function(e,l){l&&l.setFullScreen(!l.isFullScreen())}},{label:"Toggle Developer Tools",accelerator:function(){return"darwin"===process.platform?"Alt+Command+I":"Ctrl+Shift+I"}(),click:function(e,l){l&&l.toggleDevTools()}}]},{label:"Window",role:"window",submenu:[{label:"Minimize",accelerator:"CmdOrCtrl+M",role:"minimize"},{label:"Close",accelerator:"CmdOrCtrl+W",role:"close"}]},{label:"Help",role:"help",submenu:[{label:"Learn More",click:function(){o.shell.openExternal("http://blockstack.org")}},{label:"Documentation",click:function(){o.shell.openExternal("http://blockstack.org/docs")}},{label:"Community Discussions",click:function(){o.shell.openExternal("http://chat.blockstack.org")}},{label:"Search Issues",click:function(){o.shell.openExternal("https://github.com/blockstack/blockstack-desktop-app")}}]}];"darwin"===process.platform&&(l.unshift({label:"Blockstack",submenu:[{label:"About Blockstack",role:"about"},{type:"separator"},{label:"Services",role:"services",submenu:[]},{type:"separator"},{label:"Hide Blockstack",accelerator:"Command+H",role:"hide"},{label:"Hide Others",accelerator:"Command+Alt+H",role:"hideothers"},{label:"Show All",role:"unhide"},{type:"separator"},{label:"Quit",accelerator:"Command+Q",click:function(){o.app.quit()}}]}),l[3].submenu.push({type:"separator"},{label:"Bring All to Front",role:"front"}));var r=o.Menu.buildFromTemplate(l);o.Menu.setApplicationMenu(r)})},function(e,l){e.exports=require("electron")}]);
//# sourceMappingURL=main.js.map