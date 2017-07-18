import React, { Component } from 'react';

export default class PlayListItem extends Component {
  constructor(props){
    super(props);

  }
  render() {
    return (
      <li className="list-group-item" key={song._id}>
        <ul>
          <li>Artist/Band: {song.songArtist}</li>
          <li>Title: {song.songTitle}</li>
          <li>Notes: {song.songNotes}</li>
        </ul>
      </li>
    );
  }
}
