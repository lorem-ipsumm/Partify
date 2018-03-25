import React, { Component } from 'react';
import '../css/pages/party.css';


class Result extends Component {
    convertTime = (mills) => {
        var minutes = Math.floor((mills / 1000) / 60);
        var seconds = Math.floor((mills / 1000) % 60);

        if (seconds.toString().length < 2)
            seconds = "0" + seconds.toString();



        return (minutes + ":" + seconds);
    }

    resultClicked = () => {
        this.props.spot.addTracksToPlaylist(this.props.hostId,this.props.playlistId,[this.uri],{},function(err,data){
            if(err)
                console.log(err)
            else    
                console.log(data);
        });
    }

    componentWillMount(){
        var track = this.props.track;
        //console.log(track);
        this.trackName = track.name;
        this.trackArtist = track.artists[0].name;
        this.trackDuration = track.duration_ms;
        this.uri = track.uri;
    }
    
    render() {
        return (
            <div className="result" onClick={this.resultClicked}>
              <span className="track-name">{this.trackName}</span>
              <span className="track-artist">{this.trackArtist}</span>
              <span className="track-duration">{this.convertTime(this.trackDuration)}</span>
            </div>
        );
    }
}

export default Result;
