import { Notice } from "./notice.js";

export const noticeMongoStore = {
  async getAllNotices() {
    const notice = await Notice.find().lean();
    return notice;
  },

  async addNotice(notice) {
    const newNotice = new Notice(notice);
    newNotice.save();
 },
};