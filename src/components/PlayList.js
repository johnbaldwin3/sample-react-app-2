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
    })
  }
  render() {
    //NEED TO IMPORT PLAYLISTITEM COMPONENT AND PASS PROPS FROM THIS COMPONENT TO IT FOR RENDER.
    let songs = this.state.songs.map(song => {
      return (
        <li className="list-group-item" key={song._id}>
          <ul>
            <li><span className="row-title">User:</span> {song.userName}</li>
            <li><span className="row-title">Artist/Band:</span> {song.songArtist}</li>
            <li><span className="row-title">Title:</span> {song.songTitle}</li>
            <li><span className="row-title">Notes:</span> {song.songNotes}</li>

          </ul>
        </li>
      )
    })

    return (

        <div className="col-md-6 d-inline-block right-side">
          <button className="btn btn-success update-button" onClick={this.fetchData}>Update List
          </button>
          <ul className="list-group">
            {songs}
          </ul>
        </div>


    )
  }
}
