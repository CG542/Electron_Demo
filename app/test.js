const electron = require('electron');
const ipc = electron.ipcRenderer;


function copyText()
{
    document.getElementById("field2").value=document.getElementById("field1").value;
    console.log('abc');
    ipc.send('window-all-closed');
}