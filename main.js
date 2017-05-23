const electron = require('electron')
// Module to control application life.
const app = electron.app
const globalShortcut = electron.globalShortcut

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.on('ready', function () {
  // NOTE: Add keys that you want to make unresponsive
  // TODO: Add more key codes
  var keyCodes = [
    '0',
    '1',
    '2',
    '3',
    '4',
    '5',
    '6',
    '7',
    '8',
    '9',
    'A',
    'B',
    'C',
    'D',
    'E',
    'F',
    'G',
    'H',
    'I',
    'J',
    'K',
    'L',
    'M',
    'N',
    'O',
    'P',
    'Q',
    'R',
    'S',
    'T',
    'U',
    'V',
    'W',
    'X',
    'Y',
    'Z',
    'F1',
    'F2',
    'F3',
    'F4',
    'F5',
    'F6',
    'F7',
    'F8',
    'F9',
    'F10',
    'F11',
    'F12',
    'F13',
    'F14',
    'F15',
    'F16',
    'F17',
    'F18',
    'F19',
    'F20',
    'F21',
    'F22',
    'F23',
    'F24',
    'Plus',
    'Space',
    'Tab',
    'Backspace',
    'Delete',
    'Insert',
    'Return',
    'Up',
    'Down',
    'Left',
    'Right',
    'Home',
    'End',
    'PageUp',
    'PageDown',
    'Escape',
    'VolumeUp',
    'VolumeDown',
    'VolumeMute',
    'MediaNextTrack',
    'MediaPreviousTrack',
    'MediaStop',
    'MediaPlayPause',
    'PrintScreen'
  ];

  keyCodes.forEach(function(element) {
    // Register shortcut listener
    const ret = globalShortcut.register(element, () => {
      console.log(element)
    })

    // When the accelerator is already taken by other applications, 
    // this call will silently fail. This behavior is intended by operating systems, 
    // since they don't want applications to fight for global shortcuts
    if (!ret) {
      console.log('Failed to register key code: ' + element);
    }
  })

  // Unregisters all of the global shortcuts making the keys clickable again
  //globalShortcut.unregisterAll()
})