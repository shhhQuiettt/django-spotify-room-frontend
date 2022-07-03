import React from "react";
import { useForm } from "react-hook-form";
import "./index.css";
import { joinRoom } from "../../service";

const JoinRoomForm = () => {
  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => {
    console.log("f");
    joinRoom(data);
  };

  // TODO: Create error message
  return (
    <form className="join-room-form" onSubmit={handleSubmit(onSubmit)}>
      <h2 className="form-title">Join a room</h2>
      <label htmlFor="room-code">Room code:</label>
      <input
        type="text"
        id="room-code"
        {...register("code", { maxLength: 6, minLength: 6 })}
        maxLength={6}
      />
      <button type="submit">Join!</button>
    </form>
  );
};

export default JoinRoomForm;
