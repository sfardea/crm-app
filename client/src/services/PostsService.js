/* eslint-disable */
import Api from '@/services/Api'

export default {
  login () {
  	return Api().post()
  },
  fetchBuildings () {
    return Api().get('buildings')
  }
}