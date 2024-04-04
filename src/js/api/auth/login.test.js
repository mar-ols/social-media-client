import { login } from "./login";
import * as storage from "../../storage/index";

jest.mock("../../storage/index");

const token = "12345";

global.fetch = jest.fn(() =>
  Promise.resolve({
    ok: true,
    json: () => Promise.resolve({ accessToken: token }),
  }),
);

describe("login function", () => {
  beforeEach(() => {
    storage.remove();
  });

  it("should successfully store the access token in localStorage", async () => {
    await login("test@fake-email.com", "password");

    expect(storage.save).toHaveBeenCalledWith("token", token);
  });
});
