import { userMemStore } from "./mem/user-mem-store.js";
import { traillistMemStore } from "./mem/trail-list-mem-store.js";
import { trailMemStore } from "./mem/trail-mem-store.js";
import { userJsonStore } from "./json/user-json-store.js";
import { traillistJsonStore } from "./json/trail-list-json-store.js";
import { trailJsonStore } from "./json/trail-json-store.js";
import { connectMongo } from "./mongo/connect.js";
import { userMongoStore } from "./mongo/user-mongo-store.js";
import { traillistMongoStore } from "./mongo/trail-list-mongo-store.js";
import { trailMongoStore } from "./mongo/trail-mongo-store.js";
import { reviewMongoStore } from "./mongo/review-mongo-store.js";
import { noticeMongoStore } from "./mongo/notice-mongo-store.js";
import { publicTrailMongoStore } from "./mongo/public-trail-mongo-store.js";


export const db = {
  userStore: null,
  traillistStore: null,
  trailStore: null,
  reviewStore: null,
  noticeStore: null,
  publicTrailStore: null,


init(storeType) {
  switch (storeType) {
    case "json":
      this.userStore = userJsonStore;
      this.traillistStore = traillistJsonStore;
      this.trailStore = trailJsonStore;
      break;
    case "mongo":
        this.userStore = userMongoStore;
        this.traillistStore = traillistMongoStore;
        this.trailStore = trailMongoStore;
        this.reviewStore = reviewMongoStore;
        this.noticeStore = noticeMongoStore;
        this.publicTrailStore = publicTrailMongoStore;
        connectMongo();
      break;
    default:
        this.userStore = userMemStore;
        this.traillistStore = traillistMemStore;
        this.trailStore = trailMemStore;
    }
  },
};