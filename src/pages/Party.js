import React, { Component } from 'react';
import '../css/pages/party.css';
import Spotify from 'spotify-web-api-js';
import cookie from 'react-cookies';
import { Search } from 'react-feather';
class Party extends Component {
    constructor() {
        super();
        this.spot = new Spotify();
        if (window.location.toString().includes("access_token")) {
            let access = window.location.toString().substring(window.location.toString().indexOf("=") + 1, window.location.toString().indexOf("&"));
            let instance = this;
            this.spot.setAccessToken(access);
            this.loggedIn = true;
            this.spot.getMe()
                .then(function (data) {
                    instance.user = data.id;
                    cookie.save("user",data.id);
                }, function (err) {
                    console.log(err);
            });

        }
        this.state = {
            "playlistName": ""
        }
    }

    componentWillMount = () => {
        this.setState({ "playlistName": cookie.load("playlistName")});
    }

    render() {
        return (
            <div className="party-wrapper">
                <div className="info-wrapper">
                    <span className="playlist-name">{this.state.playlistName}</span>
                </div>
                <div className="search-wrapper">        
                    <input placeholder="Search For A Song"></input>
                </div>
                <div className="songs-wrapper">

                </div>
            </div>
        );
    }
}

export default Party;
