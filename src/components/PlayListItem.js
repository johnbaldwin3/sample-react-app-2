import React, { Component } from 'react';

export default class PlayListItem extends Component {
  constructor(props){
    super(props);

  }
  render() {

    let songs = this.props.songs.map(song => {
      return (
        <li className="list-group-item" key={song._id}>
          <ul>
            <li><span className="row-title">User:</span> {song.userName}</li>
            <li><span className="row-title">Artist/Band:</span> {song.songArtist}</li>
            <li><span className="row-title">Title:</span> {song.songTitle}</li>
            <li><span className="row-title">Notes:</span> {song.songNotes}</li>
          </ul>
        </li>
      );
    })
    return (
      <ul className="list-group">
        {songs}
      </ul>
    );
  }
}
