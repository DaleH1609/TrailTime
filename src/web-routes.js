import { accountsController } from "./controllers/accounts-controller.js";
import { dashboardController } from "./controllers/dashboard-controller.js";
import { aboutController } from "./controllers/about-controller.js";
import { trailListController } from "./controllers/trail-list-controller.js";
import { adminController } from "./controllers/admin-controller.js";
import { reviewController } from "./controllers/review-controller.js"
import { noticeController } from "./controllers/notice-controller.js"
import { publicTrailController } from "./controllers/public-trail-controller.js"

export const webRoutes = [
  { method: "GET", path: "/", config: accountsController.index },
  { method: "GET", path: "/signup", config: accountsController.showSignup },
  { method: "GET", path: "/login", config: accountsController.showLogin },
  { method: "GET", path: "/logout", config: accountsController.logout },
  { method: "POST", path: "/register", config: accountsController.signup },
  { method: "POST", path: "/authenticate", config: accountsController.login },

  { method: "GET", path: "/review", config: reviewController.index },
  { method: "POST", path: "/review/addReview", config: reviewController.addReview },

  { method: "GET", path: "/notice", config: noticeController.index },
  { method: "POST", path: "/notice/addNotice", config: noticeController.addNotice },

  { method: "GET", path: "/public", config: publicTrailController.index },
  { method: "POST", path: "/public/addPublicTrail", config: publicTrailController.addPublicTrail },

  { method: "GET", path: "/user", config: accountsController.userUpdate },
  { method: "POST", path: "/update", config: accountsController.updateUser },

  { method: "GET", path: "/about", config: aboutController.index },

  { method: "GET", path: "/admin", config: adminController.index },
  { method: "GET", path: "/admin/deleteusers/{id}", config: adminController.deleteUser },

  { method: "GET", path: "/dashboard", config: dashboardController.index },
  { method: "POST", path: "/dashboard/addtraillist", config: dashboardController.addTraillist },
  { method: "GET", path: "/dashboard/deletetraillist/{id}", config: dashboardController.deleteTraillist },

  { method: "GET", path: "/traillist/{id}", config: trailListController.index },
  { method: "POST", path: "/traillist/{id}/addtrail", config: trailListController.addTrail },
  { method: "GET", path: "/traillist/{id}/deletetrail/{trailid}", config: trailListController.deleteTrail },
  { method: "POST", path: "/traillist/{id}/uploadimage", config: trailListController.uploadImage },
  { method: "GET", path: "/traillist/{id}/deleteimage/{imageid}", config: trailListController.deleteImage },

  { method: "GET", path: "/{param*}", handler: { directory: { path: "./public" } }, options: { auth: false } }
];