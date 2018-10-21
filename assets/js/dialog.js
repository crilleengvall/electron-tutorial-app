const { ipcRenderer } = require('electron')

ipcRenderer.on('open-dialog-paths-selected', (event, arg)=> {
  dialog.handler.outputSelectedPathsFromOpenDialog(arg);
})

window.dialog = window.dialog || {},
function(n) {

    dialog.handler = {

      showOpenDialog: function() {
        ipcRenderer.send('show-open-dialog');
      },

      outputSelectedPathsFromOpenDialog: function(paths) {
        alert('user selected: ' + paths);
      },

      showErrorBox: function() {
        ipcRenderer.send('show-error-box');
      },

      init: function() {
        $('#showOpendialog').click( function () {
          dialog.handler.showOpenDialog();
        })

        $('#showErrorBox').click( function () {
          dialog.handler.showErrorBox();
        })
      }
    };

    n(function() {
        dialog.handler.init();
    })
}(jQuery);
