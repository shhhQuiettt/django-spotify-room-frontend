import React from "react";
import "./index.css";
import { useForm } from "react-hook-form";
import { createRoom } from "../../service";

const CreateRoomForm = () => {
  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => {
    console.log("aaonsubmit");
    createRoom(data);
  };
  console.log("cosnowy");

  return (
    <form className="create-room-form" onSubmit={handleSubmit(onSubmit)}>
      <h2 className="form-title">Create room</h2>
      <div className="input-wrapper">
        <label htmlFor="votes-to-skip">
          Votes to skip:
          <input
            type="number"
            id="votes-to-skip"
            className="narrow-input"
            defaultValue={3}
            {...register("votes_to_skip", { required: true, min: 1 })}
          />
        </label>
      </div>

      <h3 className="main-label">Guests:</h3>
      <div className="input-wrapper">
        <label htmlFor="can-pause" className="radio-container">
          Can pause
          <input
            type="radio"
            id="can-pause"
            value={true}
            {...register("user_can_pause", { required: true })}
            defaultChecked
          />
          <span className="checkmark"></span>
        </label>
        <label htmlFor="no-control" className="radio-container">
          No control
          <input
            type="radio"
            id="no-control"
            value={false}
            {...register("user_can_pause", { required: true })}
          />
          <span className="checkmark"></span>
        </label>
      </div>
      <button type="submit" data-testid="create-button">
        Create
      </button>
    </form>
  );
};

export default CreateRoomForm;
