
const base = 'http://localhost:3003'

function getHtmlSong(song) {
  let songName = song.name
  let artist = song.artists[0]
  let album = song.album
  let duration = song.duration

  let id = song.id

  let t = `
        <li class="li-song" data-id=${id}>
            <div href="" class="span-song-name">
                <span class=song-name>
                    ${songName}
                </span>
            </div>
            <div class="span-song-artist">
                ${artist.name}
            </div>
            <div class="span-song-album">
                《${album.name}》
            </div>
            <div class="span-song-duration">
            </div>
        </li>
    `
  return t
}

function appendSong(song) {
  const ul = document.querySelector('.li-song-nav')
  let s = getHtmlSong(song)

  ul.insertAdjacentHTML('beforebegin', s)
}

function clearUI() {
  let songs = document.querySelectorAll('.li-song')
  for (var song of songs) {
    song.remove()
  }
}

function appendSongsToUI(songs) {
  clearUI()
  for (var song of songs) {
    appendSong(song)
  }
}

function playMusic(url) {
  const audio = document.querySelector('audio')
  audio.setAttribute('src', url)

  audio.play()
}

function getSongUrl(id, callback) {
  let path = base + '/song/url'

  axios.get(path, {
    params: {
      id: id,
    }
  })
    .then(response => {
      let song = response.data.data[0]
      let songUrl = song.url

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

// ==========================================

function bindSearchEvent() {
  const btnSearch = document.querySelector('#button-search')
  const songText = document.querySelector('#input-song')

  btnSearch.addEventListener('click', () => {
    let songName = songText.value
    let url = base + '/search'

    axios.get(url, {
      params: {
        keywords: songName,
      }
    })
      .then(response => {
        const songs = response.data.result.songs
        appendSongsToUI(songs)
      })
      .catch(error => {
        console.log('error: ', error)
      })
  })
}

function bindPlayMusicEvent() {
  const songCell = document.querySelector('.ul-cell')

  songCell.addEventListener('click', (e) => {
    let target = e.target
    const li_song = target.closest('.li-song')

    if (target.classList.contains('song-name')) {
      let id = li_song.dataset.id

      getSongUrl(id, (songUrl) => {
        playMusic(songUrl)
      })
    }
  })
}

// 程序主入口
function __main() {
  bindSearchEvent()
  bindPlayMusicEvent()
}

__main()
