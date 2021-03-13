import * as axios from "axios";

const instanseAxios = axios.create({
  baseURL: "https://social-network.samuraijs.com/api/1.0/",
  withCredentials:true,
  headers: {
    "API-KEY": "71513ff5-39ac-404d-b52e-979922fe7f48"
  }
});

export const usersAPI = {
  getUsers(page=1, count=10) {
    return instanseAxios.get(`users?page=${page}&count=${count}`)
        .then(response => response.data);
  },

  follow(userId) {
    return instanseAxios.post(`follow/${userId}`, {})
        .then(response => response.data);
  },

  unfollow(userId) {
    return instanseAxios.delete(`follow/${userId}`)
        .then(response => response.data);
  }
}

export const profileAPI = {
  getProfile(userID) {
    return instanseAxios.get(`profile/${userID}`).then(response => response.data);
  },

  getUserStatus(userId) {
    return instanseAxios.get(`/profile/status/${userId}`).then(response => response.data);
  },

  updateUserStatus(status) {
    return instanseAxios.put(`profile/status/`, {status}).then(response => response.data);
  }
}

export const authAPI = {
  authorization() {
    return instanseAxios.get(`auth/me`).then(response => response.data);
  }
}