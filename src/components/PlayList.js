import React, { Component } from 'react';

export default class PlayList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      songs: [],
    }
  }
  componentDidMount() {
    fetch('https://tiny-lasagna-server.herokuapp.com/collections/playlisting').then(results => {
      return results.json();
    }).then(data => {
      this.setState({songs: data});
      console.log("state", this.state.songs);
    })
  }
  fetchData = (e) => {
    e.preventDefault();
    fetch('https://tiny-lasagna-server.herokuapp.com/collections/playlisting').then(results => {
      return results.json();
    }).then(data => {
      this.setState({songs: data});
      console.log("state", this.state.songs);
    })
  }
  render() {
    //NEED TO IMPORT PLAYLISTITEM COMPONENT AND PASS PROPS FROM THIS COMPONENT TO IT FOR RENDER.
    console.log(this.state, "here");
    let songs = this.state.songs.map(song => {
      return (
        <li className="list-group-item" key={song._id}>
          <ul>
            <li>Artist/Band: {song.songArtist}</li>
            <li>Title: {song.songTitle}</li>
            <li>Notes: {song.songNotes}</li>
          </ul>
        </li>
      )
    })

    return (
      <div className="col-md-6 d-inline-block">
        <button className="btn btn-success" onClick={this.fetchData}>Click for Updates
        </button>
        <ul className="list-group">
          {songs}
        </ul>
      </div>
    )
  }
}
