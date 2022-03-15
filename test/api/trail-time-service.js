import axios from "axios";

import { serviceUrl } from "../fixtures.js";

export const trailtimeService = {
  trailtimeUrl: serviceUrl,

  async createUser(user) {
    const res = await axios.post(`${this.trailtimeUrl}/api/users`, user);
    return res.data;
  },

  async getUser(id) {
    const res = await axios.get(`${this.trailtimeUrl}/api/users/${id}`);
    return res.data;
  },

  async getAllUsers() {
    const res = await axios.get(`${this.trailtimeUrl}/api/users`);
    return res.data;
  },

  async deleteAllUsers() {
    const res = await axios.delete(`${this.trailtimeUrl}/api/users`);
    return res.data;
  },
};