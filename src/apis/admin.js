import { apiHelper } from './../utils/helpers'

export default {
  getAdmin (page) {
    return apiHelper.get(`/admin/${page}`, {
    })
  },
  removeAdminPost (postId) {
    return apiHelper.get(`/admin/tweets/${postId}`, {
    })
  }
}