import React, { useState } from "react";
import { FaPlay, FaPause } from "react-icons/fa";
import { BsFillSkipEndFill, BsFillSkipStartFill } from "react-icons/bs";

const Player = () => {
  let testData = {
    title: "Piosenka",
    duration_s: 3.43,
    progress_s: 1.1,
    album_cover_url:
      "https://freepsdflyer.com/wp-content/uploads/2021/06/Free-Spotify-Album-Cover-PSD-Template.jpg",
    is_playing: false,
    song_id: "123445",
  };
  const [currentTrack, setCurrentTrack] = useState(testData);

  return (
    <div className="player">
      <img src={currentTrack["album_cover_url"]} alt="" />
      <div className="song-title">{currentTrack["title"]}</div>
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
      <div className="status-bar"></div>
    </div>
  );
};

export default Player;
