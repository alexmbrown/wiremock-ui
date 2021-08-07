import Vue from 'vue'
import WireMock from "~/api/wiremock"

export default ({$axios, store}, inject) => {
  inject('wiremock', new WireMock($axios, store))
}