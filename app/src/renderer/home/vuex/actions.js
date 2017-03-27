import * as types from './mutation-types'
import {default as $http} from '@tools/FetchData'

export const loadSongListWithId = ({ commit }, { id }) => {
  $http.getPlayList([id], (err, res) => {
    if (err) console.log(err);
    let data = JSON.parse(res.body).result
    commit(types.REPLACE_LIST_SONGS, {
      data
    });
  })
}
export const addListSongs = ({ commit }) => {
  commit(types.ADD_LIST_SONGS)
}
export const rmListSongs = ({ commit }, payload) => {
  commit(types.RM_LIST_SONGS, payload)
}
