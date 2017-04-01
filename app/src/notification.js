import path from 'path';
import extend from 'extend';
import {NotificationCenter} from 'node-notifier';
const appIcns = path.resolve(__dirname, '../icons/icon.icns');

let notifier = new NotificationCenter({
  withFallback: false,
  customPath: path.resolve(__dirname, '../node_modules/node-notifier/vendor/terminal-notifier.app/Contents/MacOS/terminal-notifier')
});

function notify(option, callback) {
  notifier.notify(extend({}, {
    title: 'Bravo!',
    message: 'Notification from TinyMusic',
    sound: false
  }, option), callback);
}

export default {
  notify
}
