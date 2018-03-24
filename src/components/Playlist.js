import React, { Component } from 'react';
import '../css/pages/home.css';
import Spotify from 'spotify-web-api-js';

class Playlist extends Component {
    constructor(){
        super();
    
    }
    

    componentDidMount(){
        console.log(this.props);
    }
    render() {
        return (
            <div className="playlist">
                <span className="playlist-name">{this.props.playlist_title}</span>
            </div>
        );
    }
}

export default Playlist;
