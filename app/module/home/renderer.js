// This file is required by the index.html file and will
// be executed in the renderer process for that window.
// All of the Node.js APIs are available in this process.
const notification = require('../notification')

document.getElementById('J-footer').addEventListener('click', function (e) {
  if(!e.target.classList.contains('ctrl-btn')) return
  notification.notify({
    title: 'Warning',
    message: '非常抱歉，功能尚未开发'
  })
}, false)
