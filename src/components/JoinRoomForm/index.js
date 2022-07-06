import React from "react";
import { useForm } from "react-hook-form";
import "./index.css";
import { joinRoom } from "../../service";

const JoinRoomForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ reValidateMode: "onSubmit" });

  const onSubmit = (data) => {
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
        autoComplete="off"
      />
      {errors.code?.type === "minLength" && (
        <div className="error-field">Code is too short</div>
      )}
      {errors.code?.type === "maxLength" && (
        <div className="error-field">Code is too long</div>
      )}
      <button type="submit">Join!</button>
    </form>
  );
};

export default JoinRoomForm;
