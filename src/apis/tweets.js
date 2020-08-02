import { apiHelper } from "./../utils/helpers";

export default {
  editLikes(postId, like) {
    return apiHelper.post(`/tweets/${postId}/${like}`, {});
  },
  getMainContent(page) {
    return apiHelper.get(`/tweets/${page}`, {});
  },
  getTarget(postId) {
    return apiHelper.get(`/tweets/${postId}`, {});
  },
  addLikes(postId) {
    return apiHelper.get(`/tweets/${postId}/like`, {});
  },
  removeLikes(postId) {
    return apiHelper.get(`/tweets/${postId}/unlike`, {});
  },
  createTweets({ userId, description }) {
    return apiHelper.post("/tweets", {
      userId,
      description,
    });
  },
  // 使用者相關路由
  getTweets(userId, page) {
    return apiHelper.get(`/users/${userId}/${page}`, {});
  },
  updateUser({
    userId,
    account,
    name,
    email,
    password,
    passwordConfirm,
    introduction,
    avatar,
    cover,
  }) {
    return apiHelper.put(`/users/${userId}`, {
      userId,
      account,
      name,
      email,
      password,
      passwordConfirm,
      introduction,
      avatar,
      cover,
    });
  },
};
