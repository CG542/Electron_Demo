const electron = require('electron');
const ipc = electron.ipcRenderer;


function login()
{
    var name = document.getElementById("name").value
    var psw =document.getElementById("password").value;
    console.log(name+" "+psw);

    if(name=="1" && psw=="1"){
        ipc.send('login-success');
    }
    //ipc.send('window-all-closed');
}