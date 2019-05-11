import React from 'react'
import Header from './header.component'
import Footer from './footer.component'
import { Link } from 'react-router-dom'

import SpotifyWebApi from 'spotify-web-api-js';
const spotifyApi = new SpotifyWebApi();

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
      nowPlaying: { name: 'Not Checked', albumArt: '' },
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
    spotifyApi.getMyCurrentPlaybackState()
      .then((response) => {
        this.setState({
          nowPlaying: {
            name: response.item.name,
            albumArt: response.item.album.images[0].url
          }
        });
      })
  }
  queueSong(){
    spotifyApi.getMyCurrentPlaybackState()
    .then((response) => {
      var newTrack = {
        name: response.item.name,
        albumArt: response.item.album.images[0].url
      }
      var allTracks = []
      allTracks.push(newTrack)

      this.setState({
        tracklist: allTracks
      })
    })
    console.log(this.state.tracklist)
  }
  componentDidMount() {
    if (this.state.loggedIn) {
      this.getNowPlaying()
    } else {
      alert("login dude")
    }
  }
  render() {
    return (
      <div>
        <Header></Header>
        <div className="music-queue">
          <a href='http://localhost:8888' > Login to Spotify </a>
          <div>
            <label>Track: {this.state.nowPlaying.name} </label>
          </div>
          <div>
            <img src={this.state.nowPlaying.albumArt} style={{ height: 150 }} alt="art" />
          </div>
          { this.state.loggedIn &&
          <button onClick={() => this.queueSong()}>
            Queue Song
          </button>
          }
          { this.state.loggedIn &&
          <button onClick={() => this.getNowPlaying()}>
            update
          </button>
          }
        </div>
        <Footer></Footer>
      </div>
    );
  }
} export default Party