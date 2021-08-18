/* eslint-disable @typescript-eslint/strict-boolean-expressions */
export class RegisterVehicle {
  handle (httpRequest: any): any {
    if (!httpRequest.body.name) {
      return {
        statusCode: 400,
        body: new Error('Error in the: name')
      }
    }
    if (!httpRequest.body.model) {
      return {
        statusCode: 400,
        body: new Error('Error in the: model')
      }
    }
  }
}
