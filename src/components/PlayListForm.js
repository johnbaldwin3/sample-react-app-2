import React, { Component } from 'react';

import PlayList from './PlayList';

export default class PlayListForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      songTitle: '',
      songArtist: '',
      songNotes: '',
      userName: '',
    }
  }
  handleSongArtist = (e) => {
    e.preventDefault();
    this.setState({songArtist: e.target.value});
  }
  handleSongTitle = (e) => {
    e.preventDefault();
    this.setState({songTitle: e.target.value});
  }
  handleSongNotes = (e) => {
    e.preventDefault();
    this.setState({songNotes: e.target.value});
  }
  handleUserName = (e) => {
    e.preventDefault();
    this.setState({userName: e.target.value})
  }
  storeSong = (e) => {
    e.preventDefault();
    this.setState({userName: e.target.value, songTitle: e.target.value, songArtist: e.target.value, songNotes: e.target.value});
    let listItem = JSON.stringify(this.state);

    fetch("https://tiny-lasagna-server.herokuapp.com/collections/playlisting", {
      method: "POST",
      body: listItem,
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
    }
  }
).then(response => {
  console.log(response, "yay");

}).catch(err => {
  console.log(err, "boo!");
})
  this.setState({userName: '', songNotes: '', songArtist: '', songTitle:''});
  }
  render() {
    return (
      <div className="row">
        <div className="col-md-6 d-inline-block left-side">
          <form onSubmit={this.storeSong}>
            <div className="form-group">
              <label htmlFor="user"> User Name: </label>
              <input  onChange={this.handleUserName}
                type="text"
                className="form-control"
                id="user"
                placeholder="Name or User Name"
                value={this.state.userName}/>
            </div>
            <div className="form-group">
              <label htmlFor="artist"> Artist/Band: </label>
              <input  onChange={this.handleSongArtist}
                type="text"
                className="form-control"
                id="artist"
                placeholder="Artist or Band Name"
                value={this.state.songArtist}/>
            </div>
            <div className="form-group">
              <label htmlFor="song">Song Title:</label>
              <input
                onChange={this.handleSongTitle}
                type="text"
                className="form-control"
                id="song"
                placeholder="Song Title"
                value={this.state.songTitle}/>
            </div>
            <div className="form-group">
              <label htmlFor="notes">Notes about Song:</label>
              <textarea onChange={this.handleSongNotes}
                className="form-control"
                id="notes"
                rows="3" value={this.state.songNotes}/>
            </div>
            <button type="submit" className="btn btn-primary ">Submit</button>
          </form>
        </div>
        <PlayList />
      </div>

    );
  }
}
