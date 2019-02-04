const {app, BrowserWindow, Menu} = require('electron');
const url = require('url');
const path = require('path');


let login;
// let mainWindow;
let resetPasswordWindow;

//listen for app to be ready
app.on('ready', function() {
  //create new window
  login = new BrowserWindow({});
  //load html into window
  login.loadURL(url.format({
    pathname: path.join(__dirname, 'src/login.html'),
    protocol: 'file:',
    slashes: true
  }));
  login.on('closed', function(){
    app.quit();
});

//Listen for app to be ready
// app.on('ready', function() {
  //create new window
  // mainWindow = new BrowserWindow({});
  //Load html into window
  // mainWindow.loadURL(url.format({
  //   pathname: path.join(__dirname, 'mainWindow.html'),
  //   protocol:'file:',
  //   slashes: true
  // }));
// Quit app when closed
// mainWindow.on('closed', function(){
//   app.quit();
// });

//Build menu from template
const mainMenu = Menu.buildFromTemplate(mainMenuTemplate);
//Insert Menu
Menu.setApplicationMenu(mainMenu);
});

// Handle create reset password window
 function createResetPasswordWindow(){
   //create new window
   resetPasswordWindow = new BrowserWindow({
     nodeIntegration: true,
     width:300,
     height:300,
     title:'Reset Your Password'
   });
   //Load html into window
   resetPasswordWindow.loadURL(url.format({
     pathname: path.join(__dirname, 'src/resetPasswordWindow.html'),
     protocol:'file:',
     slashes: true
   }));
   // Garbage collection handle
   resetPasswordWindow.on('close', function(){
     resetPasswordWindow = null;
   });
 }

//Create menu template
const mainMenuTemplate = [
  {
    label: 'File',
    submenu:[
      {
        label: 'Reset Password',
        click(){
          createResetPasswordWindow();
        }
      },
      {type: 'separator'},
      {
        label: 'Quit',
        accelerator: process.platform == 'darwin' ? 'Command+Q' : 'Ctrl+Q',
        click(){
          app.quit();
        }
      }
    ]
  }
];

// If mac, add empty object to menu to change the default electron menu item
if(process.platform == 'darwin'){
  mainMenuTemplate.unshift({});
}

//Add developer tools item to menu if not in production mode
if(process.env.NODE_ENV !== 'production'){
  mainMenuTemplate.push({
    label: 'Developer tools',
    submenu:[
      {
        label: 'Toggle DevTools',
        accelerator: process.platform == 'darwin' ? command+I : 'Ctrl+I',
        click(item, focusedWindow){
          focusedWindow.toggleDevTools();
        }
      },
      {type: 'separator'},
      {
        role: 'reload'
      }
    ]
  });
}
