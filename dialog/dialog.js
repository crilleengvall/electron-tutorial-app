const { ipcMain, dialog } = require('electron')

ipcMain.on('show-open-dialog', (event, arg)=> {

  const options = {
      //title: 'Open a file or folder',
      //defaultPath: '/path/to/something/',
      //buttonLabel: 'Do it',
      /*filters: [
        { name: 'xml', extensions: ['xml'] }
      ],*/
      //properties: ['showHiddenFiles'],
      //message: 'This message will only be shown on macOS'
    };

    dialog.showOpenDialog(null, options, (filePaths) => {
      event.sender.send('open-dialog-paths-selected', filePaths)
    });
})

ipcMain.on('show-error-box', (event, arg) => {
  dialog.showErrorBox('Oops! Something went wrong!', 'Help us improve your experience by sending an error report')
});
