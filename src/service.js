import axios from "axios";

export const createRoom = async (roomData) => {
  try {
    let response = await axios.post("/api/room/create", roomData, {
      headers: {
        "Content-Type": "application/json",
      },
    });

    const authUrl = response.data.url;
    localStorage.setItem("roomCode", response.data.code);
    window.location.replace(authUrl);

    return null;
  } catch (error) {
    console.log(error);
    return error;
  }
};

export const joinRoom = async (roomData) => {
  try {
    const response = await axios.get("/api/room/" + roomData.code);
    localStorage.setItem("roomCode", response.data.code);
    return null;
  } catch (error) {
    return error;
  }
};

export const getTrack = async () => {
  try {
    const response = await axios.get("/spotify/track/current");
    return [response.data, null];
  } catch (error) {
    return [null, error];
  }
};
