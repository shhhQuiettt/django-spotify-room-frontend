import React, { useState } from "react";
import "./index.css";
import { FaPlay, FaPause } from "react-icons/fa";
import { BsFillSkipEndFill, BsFillSkipStartFill } from "react-icons/bs";

const Player = () => {
  let testData = {
    title: "Piosenka",
    duration_s: 194,
    progress_s: 23,
    album_cover_url:
      "https://freepsdflyer.com/wp-content/uploads/2021/06/Free-Spotify-Album-Cover-PSD-Template.jpg",
    is_playing: false,
    song_id: "123445",
  };
  const [currentTrack, setCurrentTrack] = useState(testData);
  const [currentSecond, setCurrentSecond] = useState(50);

  // TODO: Make buttons :active state work on mobile
  return (
    <div className="player">
      <img src={currentTrack["album_cover_url"]} alt="" />
      <div className="wrapper">
        <div className="song-title">{currentTrack["title"]}</div>
        <div className="progress-panel">
          <div className="current-s">
            {Math.floor(currentSecond / 60)}:{currentSecond % 60}
          </div>
          <div className="status-bar">
            <div
              className="status-bar-progress"
              style={{
                width: (100 * currentSecond) / currentTrack["duration_s"] + "%",
              }}
            ></div>
          </div>
          <div className="song-length">
            {Math.floor(currentTrack["duration_s"] / 60)}:
            {currentTrack["duration_s"] % 60}
          </div>
        </div>
        <div className="control-panel">
          <button className="previous">
            <BsFillSkipStartFill />
          </button>
          <button className="play-pause">
            {currentTrack["is_playing"] ? <FaPlay /> : <FaPause />}
          </button>
          <button className="skip">
            <BsFillSkipEndFill />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Player;
