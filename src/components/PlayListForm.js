import React, { Component } from 'react';

export default class PlayListForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      songTitle: '',
      songArtist: '',
      songNotes: '',
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
  storeSong = (e) => {
    e.preventDefault();
    this.setState({songTitle: e.target.value, songArtist: e.target.value, songNotes: e.target.value});
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
  this.setState({songNotes: '', songArtist: '', songTitle:''});
  }
  render() {
    return (
      <div className="col-md-6 d-inline-block">
        <form onSubmit={this.storeSong}>
          <div className="form-group">
            <label htmlFor="artist"> Artist/Band: </label>
            <input  onChange={this.handleSongArtist}
              type="text"
              className="form-control"
              id="artist"
              placeholder="Artist or Band Name"
              value={this.state.value}/>
          </div>
          <div className="form-group">
            <label htmlFor="song">Song Title:</label>
            <input
              onChange={this.handleSongTitle}
              type="text"
              className="form-control"
              id="song"
              placeholder="Song Title"
              value={this.state.value}/>
          </div>
          <div className="form-group">
            <label htmlFor="notes">Notes about Song:</label>
            <textarea onChange={this.handleSongNotes}
              className="form-control"
              id="notes"
              rows="3" value={this.state.value}/>
          </div>
          <button type="submit" className="btn btn-primary">Submit</button>
        </form>
      </div>
    );
  }
}
