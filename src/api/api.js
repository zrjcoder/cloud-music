import Server from './server'
import axios from 'axios';

const base = 'http://localhost:3003'

class API {
  getSongUrl(id, callback) {
    const path = base + '/song/url'
    axios.get(path, {
      params: {
        id: id,
      }
    })
      .then(response => {
        const song = response.data.data[0]
        const songUrl = song.url

        if (songUrl) {
          callback(songUrl)
        } else {
          alert('暂无此资源')
        }
      })
      .catch(error => {
        console.log('--- 获取歌曲失败')
        console.log('ERROR: ', error)
      })
  }

  searchSongs(keywords, callback) {
    let path = base + '/search'
    axios.get(path, {
      params: {
        keywords
      }
    })
      .then(response => {
        const songs = response.data.result.songs
        callback(songs)
      })
      .catch(error => {
        console.log('error: ', error)
      })
  }

  // async searchSongs(keywords) {
  //   let path = base + '/search'

  //   const result = await new Promise((resolve, reject) => {
  //     axios.get(path, {
  //       params: {
  //         keywords
  //       }
  //     })
  //       .then(response => {
  //         const songs = response.data.result.songs
  //         resolve(songs)
  //       })
  //       .catch(error => {
  //         console.log('error: ', error)
  //         reject(error)
  //       })
  //   })
  //   console.log('result', result);
  //   return result
  // }
}


export default new API()