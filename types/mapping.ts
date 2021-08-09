export interface StubMapping {
  id: string
  uuid: string
  request: StubRequest
  response: StubResponse
  name?: string
  persistent?: boolean
  priority?: number
  scenarioName?: string
  requiredScenarioState?: string
  newScenarioState?: string
  postServeActions?: object
  metadata?: object
}

export interface MappingMetadata {
  notes: string
  favorite: boolean
  hidden: boolean
}

export type Method = 'GET' | 'POST' | 'PATCH' | 'PUT' | 'DELETE' | 'HEAD' | 'OPTIONS'
export type QueryParams = {[key: string]: string}
export type Headers = {[key: string]: string}
export type Cookies = {[key: string]: string}
export type bodyPatterns = {[key: string]: string}

export interface BasicAuthCredentials {
  user: string
  password: string
}

export interface StubRequest {
  method: Method
  url?: string
  urlPath?: string
  urlPattern?: string
  urlPathPattern?: string
  queryParameters: QueryParams
  headers: Headers
  cookies: Cookies
  basicAuthCredentials: BasicAuthCredentials
  bodyPatterns: bodyPatterns
}

export interface StubResponse {
  status: number
  statusMessage?: string
  headers?: Headers
  body?: string
  base64Body?: string
  jsonBody?: string

}