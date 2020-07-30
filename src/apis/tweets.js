import { apiHelper } from './../utils/helpers'
const getToken = () => localStorage.getItem('token')

export default {
  getTweets(userId, page) {
    return apiHelper.get(`/users/${userId}/${page}`, {
      headers: { Authorization: `Bearer ${getToken()}` }
    })
  },
  getMainContent() {
    return apiHelper.get('/tweets', {
      headers: { Authorization: `Bearer ${getToken()}` }
    })
  }
}