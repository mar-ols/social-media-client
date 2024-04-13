import { logout } from "./logout";
import * as storage from "../../storage/index";

jest.mock("../../storage/index");

describe("logout function", () => {
  it("should successfully remove items in localStorage", () => {
    logout();
    expect(storage.remove).toHaveBeenCalledTimes(2);
    expect(storage.load("token")).toEqual(undefined);
  });
});
