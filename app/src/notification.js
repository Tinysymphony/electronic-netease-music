import path from 'path'
import extend from 'extend'
// const notifier = require('node-notifier')
const NotificationCenter = require('node-notifier/notifiers/notificationcenter')
const appIcns = path.resolve(__dirname, '../../../music.icns')

let notifier = new NotificationCenter({
  withFallback: false,
  customPath: path.resolve(__dirname, '../../node_modules/node-notifier/vendor/terminal-notifier.app/Contents/MacOS/terminal-notifier')
})

function notify(option, callback) {
  notifier.notify(extend({}, {
    title: 'Bravo!',
    message: 'Notification from TinyMusic',
    sound: false
  }, option), callback)
}

export default {
  notify
}
