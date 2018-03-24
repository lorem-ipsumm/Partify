import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Spotify from 'spotify-web-api-js';

class App extends Component {
  constructor(){
    super();
    this.spot = new Spotify();

    if(window.location.toString().includes("access_token")){
      console.log("logged in");
      this.spot.setAccessToken("BQCEI5ioGTCqJwgg2GwoM3nzHN9KjmF0Wn2XVn5CKyyRudZGjYHxHaqJtaKs313Ph3fuZFzi-yXywgUXf8TI0ot0cFU2IwLFhkP15DUOqbeC7tmMpVCDv966Hj4NET1KZqOVNRcR69yWJ8V1g2xywBPsxqCCW4NBCHN7c1egM_hg9q4uarHgAOF6KkJ4tvZA7M_NfU3p9UY4GUEpGPDSsQF-z4lV_VEGeCUU");
      this.getStuff();

    }else{ 
      console.log("logged out");
    }
    
  }


  getStuff = () =>{
    this.spot.getUserPlaylists()
    .then(function(data){
      let playlists = data.items;
      for(var i = 0; i < playlists.length; i++){
        console.log(playlists[i].name)
      }
    }, function(err){
      console.log(err)
    });
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <a href="https://accounts.spotify.com/authorize?client_id=6d01548fd5d7494caebb7e05ff3a9d5a&redirect_uri=http://localhost:3000/callback&scope=user-read-private%20user-read-email&response_type=token&state=123">Login</a>
        
      </div>
    );
  }
}

export default App;
