const { app, BrowserWindow } = require('electron')
const EventEmitter = require('events')

const loadingEvents = new EventEmitter()
 

const createMainWindow = () => new BrowserWindow(
    {
        width: 1300,
        height: 800,
        show: true,
        icon: __dirname + '/mailtrap.ico',
    }
    
)


app.on('ready', () => {
    const window = createMainWindow()
    window.setMenu(null)
    window.setTitle('Mailtrap.io - Desktop Application - by (himelrana.com)')
    window.loadFile('loading.html')

    // Our loadingEvents object listens for 'finished'
    loadingEvents.on('finished', () => {
    // window.setBackgroundColor('#')
    window.loadURL('https://mailtrap.io/inboxes')
    window.webContents.on('did-finish-load', () => {
        window.show();
        window.setTitle('Mailtrap.io - Desktop Application - by (himelrana.com)');
      });
 
 })

    setTimeout(() => loadingEvents.emit('finished'), 4000)
})