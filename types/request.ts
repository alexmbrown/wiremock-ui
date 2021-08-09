import { Method } from "./mapping";

export interface ResponseDefinition {
  status: number
  transformers: string[],
  transformerParameters: object
}

export interface Request {
  url: string
  absoluteUrl: string
  method: Method,
  clientIp: string
  headers: {[key: string]: string}
  cookies: {[key: string]: string}
  browserProxyRequest: boolean
  loggedDate: number
  bodyAsBase64: string
  body: string
  loggedDateString: string
}

export interface RequestWrapper {
  id: string
  request: Request
  responseDefinition: ResponseDefinition
}