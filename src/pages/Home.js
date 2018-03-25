import React, { Component } from 'react';
import '../css/pages/home.css';
import { ChevronRight } from 'react-feather';
import { NavLink } from 'react-router-dom';
import cookie from 'react-cookies';
import cookies from 'browser-cookies';


class Home extends Component {
    //https://trusting-goodall-a08679.netlify.com/
    constructor(){
        super();
        this.callback = "https://trusting-goodall-a08679.netlify.com/party";
        this.url = "https://accounts.spotify.com/authorize?client_id=6d01548fd5d7494caebb7e05ff3a9d5a&" + 
                    "redirect_uri=" + this.callback + "&" +
                    "scope=user-read-private%20user-read-email%20playlist-modify-public%20user-library-modify&response_type=token&state=123"; 
                    
    }


    createClicked = () => {
        let playlistName = document.getElementsByClassName("playlist_name")[0];
        cookie.save("playlistName",playlistName.value);
        cookie.save("host",true);
    }

    joinClicked = () => {
        let uuid = document.getElementsByClassName("join_code")[0];
        cookie.save("uuid",uuid.value);
        cookie.save("host", false);
    }

    render() {
        return (
            <div className="home-wrapper">
                <span className="title">Partify</span>
                <span className="tag">Take control of the party</span>
                <div className="input-wrapper">
                    <input className="playlist_name" placeholder="New Playlist Name"></input>
                    <a href={this.url}><button onClick={this.createClicked}><ChevronRight/></button></a>
                </div>
                <span className="or">-OR-</span>
                <div className="input-wrapper">
                    <input className="join_code" placeholder="Party Code"></input>
                    <a href={this.url}><button onClick={this.joinClicked}><ChevronRight /></button></a>
                </div>
            </div>
        );
    }
}

export default Home;
