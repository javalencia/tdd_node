import { HttpRequest, HttpResponse } from '../interfaces/http-interface'

/* eslint-disable @typescript-eslint/strict-boolean-expressions */
export class RegisterVehicle {
  handle (httpRequest: HttpRequest): HttpResponse | undefined {
    const requiredProperties = ['name', 'model', 'year', 'color']

    for (const props of requiredProperties) {
      if (!httpRequest.body[props]) {
        return {
          statusCode: 400,
          body: new Error(`Error in the: ${props}`)
        }
      }
    }
  }
}
