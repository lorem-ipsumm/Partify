import React, { Component } from 'react';
import '../css/pages/home.css';
import Spotify from 'spotify-web-api-js';
//import Playlist from '../components/Playlist.js';
import { ChevronRight } from 'react-feather';
import { NavLink } from 'react-router-dom';
import cookie from 'react-cookies';


class Home extends Component {

    buttonClicked = () => {
        let playlistName = document.getElementsByClassName("playlist_name")[0];
        cookie.save("playlistName",playlistName.value);
    }

    render() {
        return (
            <div className="home-wrapper">
                <span className="title">Partify</span>
                <span className="tag">Take control of the party</span>
                <div className="create-wrapper">
                    <input className="playlist_name" placeholder="New Playlist Name"></input>
                    <a href="https://accounts.spotify.com/authorize?client_id=6d01548fd5d7494caebb7e05ff3a9d5a&redirect_uri=http://localhost:3000/party&scope=user-read-private%20user-read-email&response_type=token&state=123"><button onClick={this.buttonClicked}><ChevronRight/></button></a>
                </div>
                
                <span className="or">-OR-</span>
                <input placeholder="Party Code"></input>
            </div>
        );
    }
}

export default Home;
