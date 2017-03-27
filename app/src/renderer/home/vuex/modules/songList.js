import * as types from '../mutation-types'

const state = {
  songList: {}
}

const mutations = {
  [types.ADD_LIST_SONGS] (state, payload) {
    state.songList = state.songList.concate(payload.list)
  },
  [types.RM_LIST_SONGS] (state, payload) {
    const songs = payload.indices.sort((a, b) => a < b)
    songs.forEach(index => {
      state.songList.tracks.splice(index, 1)
    })
  },
  [types.REPLACE_LIST_SONGS] (state, payload) {
    state.songList = payload.data
  }
}

export default {
  state,
  mutations
}
