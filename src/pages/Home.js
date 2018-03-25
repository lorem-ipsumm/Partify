import React, { Component } from 'react';
import '../css/pages/home.css';
import { ChevronRight } from 'react-feather';
import { NavLink } from 'react-router-dom';
import cookie from 'react-cookies';


class Home extends Component {

    createClicked = () => {
        let playlistName = document.getElementsByClassName("playlist_name")[0];
        cookie.save("playlistName",playlistName.value);
    }

    joinClicked = () => {
        let uuid = document.getElementsByClassName("join_code")[0];
        cookie.save("uuid",uuid.value);
    }

    render() {
        return (
            <div className="home-wrapper">
                <span className="title">Partify</span>
                <span className="tag">Take control of the party</span>
                <div className="input-wrapper">
                    <input className="playlist_name" placeholder="New Playlist Name"></input>
                    <a href="https://accounts.spotify.com/authorize?client_id=6d01548fd5d7494caebb7e05ff3a9d5a&redirect_uri=http://localhost:3000/party&scope=user-read-private%20user-read-email&response_type=token&state=123"><button onClick={this.createClicked}><ChevronRight/></button></a>
                </div>
                <span className="or">-OR-</span>
                <div className="input-wrapper">
                    <input className="join_code" placeholder="Party Code"></input>
                    <NavLink to="/party"><button onClick={this.joinClicked}><ChevronRight /></button></NavLink>
                </div>
            </div>
        );
    }
}

export default Home;
