import WireMock from 'api/wiremock'

declare module 'vue/types/vue' {
  interface Vue {
    $wiremock: WireMock
  }
}