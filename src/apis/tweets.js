import { apiHelper } from './../utils/helpers'

export default {
  getTweets (userId, page) {
    return apiHelper.get(`/users/${userId}/${page}`, {
    })
  },
  getMainContent (page) {
    return apiHelper.get(`/tweets/${page}`, {
    })
  },
  addLikes (postId) {
    return apiHelper.get(`/tweets/${postId}/like`, {
    })
  },
  removeLikes (postId) {
    return apiHelper.get(`/tweets/${postId}/unlike`, {
    })
  },
  createTweets ({ userId, description }) {
    return apiHelper.post('/tweets', {
      userId,
      description
    })
  },
  updateUser ({ userId, account, name, email, password, passwordConfirm, introduction, avatar, cover }) {
    return apiHelper.put(`/tweets/users/${userId}`, {
      userId,
      account,
      name,
      email,
      password,
      passwordConfirm,
      introduction,
      avatar,
      cover
    })
  },
}