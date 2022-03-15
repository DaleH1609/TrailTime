import { assert } from "chai";
import { db } from "../../src/models/db.js";
import { testTraillists, testTrails, walking, hiking, trailing, testUsers} from "../fixtures.js";
import { assertSubset } from "../test-utils.js";

suite("trail Model tests", () => {

  let trailingList = null;

  setup(async () => {
    db.init("mongo");
    await db.traillistStore.deleteAllTraillists();
    await db.trailStore.deleteAllTrails();
    trailingList = await db.traillistStore.addTraillist(trailing);
    for (let i = 0; i < testTrails.length; i += 1) {
      // eslint-disable-next-line no-await-in-loop
      testTrails[i] = await db.trailStore.addTrail(trailingList._id, testTrails[i]);
    }
  });

  test("create single trail", async () => {
    const walkingList = await db.traillistStore.addTraillist(walking);
    const trail = await db.trailStore.addTrail(walkingList._id, hiking)
    assert.isNotNull(trail._id);
    assertSubset (hiking, trail);
  });

  test("get multiple trails", async () => {
    const trails = await db.trailStore.getTrailsByTraillistId(trailingList._id);
    assert.equal(testTrails.length, testTrails.length)
  });

  test("delete all trails", async () => {
    const trails = await db.trailStore.getAllTrails();
    assert.equal(testTrails.length, trails.length);
    await db.trailStore.deleteAllTrails();
    const newTrails = await db.trailStore.getAllTrails();
    assert.equal(0, newTrails.length);
  });

  test("get a trail - success", async () => {
    const walkingList = await db.traillistStore.addTraillist(walking);
    const trail = await db.trailStore.addTrail(walkingList._id, hiking)
    const newtrail = await db.trailStore.getTrailById(trail._id);
    assertSubset (hiking, newtrail);
  });

  test("delete One trail - success", async () => {
    await db.trailStore.deleteTrail(testTrails[0]._id);
    const trails = await db.trailStore.getAllTrails();
    assert.equal(trails.length, testTraillists.length - 1);
    const deletedtrail = await db.trailStore.getTrailById(testTrails[0]._id);
    assert.isNull(deletedtrail);
  });

  test("get a trail - bad params", async () => {
    assert.isNull(await db.trailStore.getTrailById(""));
    assert.isNull(await db.trailStore.getTrailById());
  });

  test("delete one trail - fail", async () => {
    await db.trailStore.deleteTrail("bad-id");
    const trails = await db.trailStore.getAllTrails();
    assert.equal(trails.length, testTraillists.length);
  });
});