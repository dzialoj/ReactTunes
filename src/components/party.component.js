import React from 'react'
import Header from './header.component'
import Footer from './footer.component'
import QueueAnim from 'rc-queue-anim'
import uuid from 'uuid'
import { Link } from 'react-router-dom'

import SpotifyWebApi from 'spotify-web-api-js';
const spotifyApi = new SpotifyWebApi();

var allTracks = []
class Party extends React.Component {

  constructor() {
    super();
    const params = this.getHashParams();
    const token = params.access_token;
    if (token) {
      spotifyApi.setAccessToken(token);
    }
    this.state = {
      loggedIn: token ? true : false,
      nowPlaying: { name: 'Not Checked', albumArt: '', id: '' },
      tracklist: []
    }

  }
  getHashParams() {
    var hashParams = {};
    var e, r = /([^&;=]+)=?([^&;]*)/g,
      q = window.location.hash.substring(1);
    e = r.exec(q)
    while (e) {
      hashParams[e[1]] = decodeURIComponent(e[2]);
      e = r.exec(q);
    }
    return hashParams;
  }
  getNowPlaying() {
    this.setState({
      nowPlaying: {
        name: this.state.tracklist[0].name,
        albumArt: this.state.tracklist[0].albumArt,
        id: this.state.tracklist[0].id
      }
    })
  }
  update() {
    if (this.state.tracklist.length > 0) {
      this.state.tracklist.shift()
      allTracks.shift()
      this.setState({
        nowPlaying: {
          name: this.state.tracklist[0].name,
          id: this.state.tracklist[0].id,
          albumArt: this.state.tracklist[0].albumArt
        }
      })
    } else if (this.state.tracklist.length === 0) {
      alert('Queue is already empty!')
    } else {
      alert('error')
    }
  }
  queueSong() {
    spotifyApi.getMyCurrentPlaybackState()
      .then((response) => {
        var newTrack = {
          name: response.item.name,
          albumArt: response.item.album.images[0].url,
          id: response.item.id
        }
        allTracks.push(newTrack)
        this.setState({
          tracklist: allTracks
        })
      })
    console.log(allTracks)
    console.log(this.state.tracklist)
  }
  getTrackNames() {
    return this.state.tracklist.map(function (track, i) {
      return (
        <div key={i} id="queue-anim1">
          <label>{track.name}</label>
        </div>
      )
    })
  }

  getTrackArt() {
    return this.state.tracklist.map(function (track) {
      return (
        <div key={uuid.v4()} id="queue-anim2">
          <img src={track.albumArt} style={{ height: 50 }} alt="ART" />
        </div>)
    })
  }

  render() {
    return (
      <div>
        <Header></Header>
        <div className="music-queue">
          {!this.state.loggedIn &&
            <a href='http://localhost:8888' > Login to Spotify </a>
          }
          {this.state.loggedIn &&
            <button className="btn btn-primary" style={{marginRight: 5}} onClick={() => this.queueSong()}>
              Queue Song
          </button>
          }
          {this.state.loggedIn &&
            <button className="btn btn-primary" onClick={() => this.update()}>
              Skip
          </button>
          }
        </div>
        <div id="queue-anims">
          <QueueAnim component="ul" type={['left', 'right']} leaveReverse>
            {this.getTrackNames()}
          </QueueAnim>
          <QueueAnim component="ul" type={['left', 'right']} leaveReverse>
            {this.getTrackArt()}
          </QueueAnim>
        </div>
        <Footer></Footer>
      </div>
    );
  }
} export default Party