import WireMock from "~/api/wiremock";

export interface AsyncContext {
  $wiremock: WireMock,
  params: {[key: string]: string}
}
