import Player from "./components/Player";
import CreateRoomForm from "./components/CreateRoomForm";
import "./index.css";
import RoomCode from "./components/RoomCode";

function App() {
  return (
    <div className="App">
      <RoomCode code="123456" />
      <Player />
      {/* <CreateRoomForm /> */}
    </div>
  );
}

export default App;
