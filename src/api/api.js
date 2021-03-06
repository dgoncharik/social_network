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
  getProfile(userId) {
    return instanseAxios.get(`profile/${userId}`).then(response => response.data);
  },

  getUserStatus(userId) {
    return instanseAxios.get(`/profile/status/${userId}`).then(response => response.data);
  },

  updateUserStatus(status) {
    return instanseAxios.put(`profile/status/`, {status}).then(response => response.data);
  },

  saveAvatar(imgFile) {
    const formdData = new FormData();
    formdData.append("image", imgFile)
    return instanseAxios.put(`profile/photo/`, formdData, {
      'Content-Type': 'multipart/form-data'
    }).then(response => response.data);
  },

  saveProfile(profileObj) {
    return instanseAxios.put(`profile`, profileObj).then(response => response.data);
  }
}

export const authAPI = {
  authorizeMe() {
    return instanseAxios.get(`auth/me`).then(response => response.data);
  },

  signIn(email, password, rememberMe= false) {
    return instanseAxios.post(`auth/login`,
      { //body
        email,
        password,
        rememberMe
      }
    ).then(response => response.data);
  },

  signOut() {
    return instanseAxios.delete(`auth/login`).then(response => response.data)
  }
}