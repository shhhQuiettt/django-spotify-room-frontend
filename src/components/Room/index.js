import React, { useEffect } from "react";
import PropTypes from "prop-types";
import RoomCode from "../RoomCode";
import Player from "../Player";
import { useNavigate } from "react-router-dom";

const Room = ({ code }) => {
  let navigate = useNavigate();
  useEffect(() => {
    console.log(code);
    if (localStorage.hasOwnProperty("roomCode")) {
      navigate("../room/join", { replace: false });
    } else {
      console.log(code);
    }
  }, [code]);

  return (
    <>
      dsd
      <RoomCode code={code} />
      <Player />
    </>
  );
};

// Room.propTypes = {
//   code: PropTypes.string.isRequired,
// };
export default Room;
