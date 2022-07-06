import Player from "./components/Player";
import CreateRoomForm from "./components/CreateRoomForm";
import "./index.css";
import RoomCode from "./components/RoomCode";
import JoinRoomForm from "./components/JoinRoomForm";

function App() {
  return (
    <div className="App">
      <JoinRoomForm />
      {/* <RoomCode code="123456" />
      <Player /> */}
      {/* <CreateRoomForm /> */}
    </div>
  );
}

export default App;
