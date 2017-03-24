const path = require('path')
// const notifier = require('node-notifier')
const NotificationCenter = require('node-notifier/notifiers/notificationcenter');
const appIcns = path.resolve(__dirname, '../icons/icons.icns')

let notifier = new NotificationCenter({
  withFallback: false,
  customPath: path.resolve(__dirname, '../node_modules/node-notifier/vendor/terminal-notifier.app/Contents/MacOS/terminal-notifier')
})

function notify(option, callback) {
  notifier.notify(Object.assign({}, {
    title: 'Bravo!',
    message: 'Notification from TinyMusic',
    sound: false
  }, option), callback)
}

module.exports = {
  notify
}
