import { apiHelper } from './../utils/helpers'
const getToken = () => localStorage.getItem('adminToken')

export default {
  getAdmin(page) {
    return apiHelper.get(`/admin/${page}`, {
      headers: { Authorization: `Bearer ${getToken()}` }
    })
  }
}