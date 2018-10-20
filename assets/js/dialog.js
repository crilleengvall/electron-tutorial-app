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

      init: function() {
        $('#showOpendialog').click( function () {
          dialog.handler.showOpenDialog();
        })
      }
    };

    n(function() {
        dialog.handler.init();
    })
}(jQuery);
