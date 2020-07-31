import { apiHelper } from './../utils/helpers'
const getToken = () => localStorage.getItem('token')

export default {
  getCurrentUser (userId) {
    return apiHelper.get(`/users/${userId}`, {
    })
  },
  get (userId) {
    return apiHelper.get(`/users/${userId}`, {
    })
  },
  getFollowings (userId) {
    return apiHelper.get(`/users/${userId}/followings`, {
    })
  },
  getFollowers (userId) {
    return apiHelper.get(`/users/${userId}/followers`, {
      headers: { Authorization: `Bearer ${getToken()}` }
    })
  },
  addFollowings () {
    return apiHelper.get('/followships', {
      headers: { Authorization: `Bearer ${getToken()}` }
    })
  },
  removeFollowings (followingId) {
    return apiHelper.get(`followships/${followingId}`, {
    })
  },
}