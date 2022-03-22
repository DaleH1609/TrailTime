import { assert } from "chai";
import { trailtimeService } from "./trail-time-service.js";
import { decodeToken } from "../../src/api/jwt-utils.js";
import { maggie } from "../fixtures.js";

suite("Authentication API tests", async () => {
  setup(async () => {
    trailtimeService.clearAuth();
    await trailtimeService.createUser(maggie);
    await trailtimeService.authenticate(maggie);
    await trailtimeService.deleteAllUsers();
  });

  test("authenticate", async () => {
    const returnedUser = await trailtimeService.createUser(maggie);
    const response = await trailtimeService.authenticate(maggie);
    assert(response.success);
    assert.isDefined(response.token);
  });

  test("verify Token", async () => {
    const returnedUser = await trailtimeService.createUser(maggie);
    const response = await trailtimeService.authenticate(maggie);

    const userInfo = decodeToken(response.token);
    assert.equal(userInfo.email, returnedUser.email);
    assert.equal(userInfo.userId, returnedUser._id);
  });
});