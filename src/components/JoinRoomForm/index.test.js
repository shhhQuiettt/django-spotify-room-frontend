import { render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import { joinRoom } from "../../service";
import JoinRoomForm from ".";

jest.mock("../../service");
describe("Form does not submited when invalid data", () => {
  test("when code is to short", async () => {
    const user = userEvent.setup();
    const { getByLabelText, getByText } = render(<JoinRoomForm />);

    await user.click(getByLabelText("Room code:"));
    await user.keyboard("1234");
    console.log("value: " + getByLabelText("Room code:").value);
    await user.click(getByText("Join!"));

    expect(joinRoom).not.toBeCalled();
  });
});

describe("Form submited if valid data", () => {
  test("case 1", async () => {
    const user = userEvent.setup();
    const { getByLabelText, getByText } = render(<JoinRoomForm />);

    await user.click(getByLabelText("Room code:"));
    await user.keyboard("123456");
    console.log("value: " + getByLabelText("Room code:").value);
    await user.click(getByText("Join!"));

    expect(joinRoom).toBeCalled();
    expect(joinRoom).toBeCalledWith({ code: "123456" });
  });
  test("case 2", async () => {
    const user = userEvent.setup();
    const { getByLabelText, getByText } = render(<JoinRoomForm />);

    await user.click(getByLabelText("Room code:"));
    await user.keyboard("020202");
    console.log("value: " + getByLabelText("Room code:").value);
    await user.click(getByText("Join!"));

    expect(joinRoom).toBeCalled();
    expect(joinRoom).toBeCalledWith({ code: "020202" });
  });
});
