import { db } from "../models/db.js";

export const noticeController = {
  index: {
    handler: async function (request, h) {
      const notices = await db.noticeStore.getAllNotices();
      const viewData = {
        title: "Add a public notice",
        notices: notices 
      };
      return h.view("notice-view", viewData);
    },
  },

  addNotice: {
    handler: async function (request, h) {
      const newNotice = {
        post: request.payload.post,
        urgency: request.payload.urgency,
      };
      await db.noticeStore.addNotice(newNotice);
      return h.redirect("/notice");
    },
  },
};