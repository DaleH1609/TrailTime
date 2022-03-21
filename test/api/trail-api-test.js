import { assert } from "chai";
import { assertSubset } from "../test-utils.js";
import { trailtimeService } from "./trail-time-service.js";
import { maggie, walking, testTraillists, testTrails, hiking } from "../fixtures.js";

suite("trail API tests", () => {
  let user = null;
  let beethovenSonatas = null;

  setup(async () => {
    await trailtimeService.deleteAllTraillists();
    await trailtimeService.deleteAllUsers();
    await trailtimeService.deleteAllTrails();
    user = await trailtimeService.createUser(maggie);
    walking.userid = user._id;
    beethovenSonatas = await trailtimeService.createTraillist(walking);
  });

  teardown(async () => {});

  test("create trail", async () => {
    const returnedtrail = await trailtimeService.createTrail(beethovenSonatas._id, hiking);
    assertSubset(hiking, returnedtrail);
  });

  test("create Multiple trails", async () => {
    for (let i = 0; i < testTrails.length; i += 1) {
      // eslint-disable-next-line no-await-in-loop
      await trailtimeService.createTrail(beethovenSonatas._id, testTrails[i]);
    }
    const returnedtrails = await trailtimeService.getAllTrails();
    assert.equal(returnedtrails.length, testTrails.length);
    for (let i = 0; i < returnedtrails.length; i += 1) {
      // eslint-disable-next-line no-await-in-loop
      const trail = await trailtimeService.getTrail(returnedtrails[i]._id);
      assertSubset(trail, returnedtrails[i]);
    }
  });

  test("Delete trailApi", async () => {
    for (let i = 0; i < testTrails.length; i += 1) {
      // eslint-disable-next-line no-await-in-loop
      await trailtimeService.createTrail(beethovenSonatas._id, testTrails[i]);
    }
    let returnedtrails = await trailtimeService.getAllTrails();
    assert.equal(returnedtrails.length, testTrails.length);
    for (let i = 0; i < returnedtrails.length; i += 1) {
      // eslint-disable-next-line no-await-in-loop
      const trail = await trailtimeService.deleteTrail(returnedtrails[i]._id);
    }
    returnedtrails = await trailtimeService.getAllTrails();
    assert.equal(returnedtrails.length, 0);
  });

  test("denormalised trail list", async () => {
    for (let i = 0; i < testTrails.length; i += 1) {
      // eslint-disable-next-line no-await-in-loop
      await trailtimeService.createTrail(beethovenSonatas._id, testTrails[i]);
    }
    const returnedtraillist = await trailtimeService.getTraillist(beethovenSonatas._id);
    assert.equal(returnedtraillist.trails.length, testTrails.length);
    for (let i = 0; i < testTrails.length; i += 1) {
      assertSubset(testTrails[i], returnedtraillist.trails[i]);
    }
  });
});