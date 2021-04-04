
import React, { Component, useEffect, useState } from 'react'

import { Search as SearchIcon } from 'grommet-icons';
import { Box, TextInput, Button, Grid } from 'grommet';
import api from '@/api/api'
import './search.css'


export default function Search(props) {
  const [musicData, setMusicData] = useState({
    songs: null,
  })

  function handlePlayMusic(e) {
    const li_song = e.target.closest('.li-song')
    const id = li_song.dataset.id

    api.getSongUrl(id, (songUrl) => {
      const audio = document.querySelector('audio')
      audio.setAttribute('src', songUrl)

      audio.play()
    })

  }

  useEffect(() => {
    const params = { keywords: props.match.params.keyword }
    const url = new URL('http://localhost:3003/search')
    url.search = new URLSearchParams(params).toString()

    fetch(url)
      .then(response => {
        return response.json()
      })
      .then(songs => {
        setMusicData({ 
          songs: songs.result.songs 
        })
        console.log(musicData.songs);
      })

  }, [props.match.params.keyword])


  // console.log(this.musicData.data.length);
  return (
    <div className="gua-container">
      <ul className="ul-cell">
        {musicData.songs ?
          musicData.songs.map((song) => {
            return (
              <li className="li-song" data-id={song.id}>
                <div onClick={handlePlayMusic}
                 href="" className="span-song-name">
                  <span className="song-name">
                    {song.name}
                  </span>
                </div>
                <div className="span-song-artist">
                  {song.artists[0].name}
                </div>
                <div className="span-song-album">
                  {song.album.name}
                </div>
                <div className="span-song-duration">
                </div>
              </li>
            )
          })
          : "wait ..."
        }
      </ul>
      <div className="music-control">
        <audio src="" controls>
        </audio>
      </div>
    </div>

  );
}
