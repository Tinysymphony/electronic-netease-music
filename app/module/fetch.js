/**
 * Created by TinySymphony on 2017-03-11.
 */

const request = require('request');

const origin = 'http://music.163.com';
const headers = {
  'Origin': origin,
  'Referer': origin,
  'Content-Type': 'application/json'
};

function _parseParams(params) {
  var keys = Object.keys(params);
  var list = [];
  for(let i = 0; i < keys.length; i++) {
    list.push(keys[i] + '=' + params[keys[i]]);
  }
  return list.length ? '?' + list.join('&') : '';
}

function getSongs(idList, callback) {
  request({
    method: 'GET',
    url: `${origin}/api/song/detail?ids=%5B${idList.join(',')}%5d`,
    headers
  }, callback);
}

function getLyric(options, callback) {
  request({
    method: 'GET',
    url: `${origin}/api/song/lyric?lv=${options.lv || -1}&id=${options.id}`,
    headers
  }, callback);
}

function getPlayList(id, callback) {
  request({
    method: 'GET',
    url: `${origin}/api/playlist/detail?id=${id}`,
    headers
  }, callback);
}

module.exports = {
  getSongs,
  getLyric,
  getPlayList
}
