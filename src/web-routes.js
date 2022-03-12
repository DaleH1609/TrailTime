import { accountsController } from "./controllers/accounts-controller.js";
import { dashboardController } from "./controllers/dashboard-controller.js";
import { aboutController } from "./controllers/about-controller.js";
import { trailListController } from "./controllers/trail-list-controller.js";

export const webRoutes = [
  { method: "GET", path: "/", config: accountsController.index },
  { method: "GET", path: "/signup", config: accountsController.showSignup },
  { method: "GET", path: "/login", config: accountsController.showLogin },
  { method: "GET", path: "/logout", config: accountsController.logout },
  { method: "POST", path: "/register", config: accountsController.signup },
  { method: "POST", path: "/authenticate", config: accountsController.login },

  { method: "GET", path: "/about", config: aboutController.index },

  { method: "GET", path: "/dashboard", config: dashboardController.index },
  { method: "POST", path: "/dashboard/addtraillist", config: dashboardController.addTraillist },
  { method: "GET", path: "/dashboard/deletetraillist/{id}", config: dashboardController.deleteTraillist },

  { method: "GET", path: "/traillist/{id}", config: trailListController.index },
  { method: "POST", path: "/traillist/{id}/addtrail", config: trailListController.addTrail },
  { method: "GET", path: "/traillist/{id}/deletetrail/{trailid}", config: trailListController.deleteTrail },
];