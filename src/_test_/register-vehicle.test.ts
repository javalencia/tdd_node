import { RegisterVehicle } from '../controllers/register-vehicle'

describe('RegisterVehicle ', () => {
  test('is the name not exist return 400 ', () => {
    const sut = new RegisterVehicle()
    const httpRequest = {
      body: {
        // name: 'Nisan',
        model: 'Dtx',
        year: 2020,
        color: 'color'
      }
    }
    const httpResponse = sut.handle(httpRequest)
    expect(httpResponse?.statusCode).toBe(400)
    expect(httpResponse?.body).toEqual(new Error('Error in the: name'))
  })

  test('is the model not exist return 400 ', () => {
    const sut = new RegisterVehicle()
    const httpRequest = {
      body: {
        name: 'Nisan',
        // model: 'Dtx',
        year: 2020,
        color: 'color'
      }
    }
    const httpResponse = sut.handle(httpRequest)
    expect(httpResponse?.statusCode).toBe(400)
    expect(httpResponse?.body).toEqual(new Error('Error in the: model'))
  })

  test('is the year not exist return 400 ', () => {
    const sut = new RegisterVehicle()
    const httpRequest = {
      body: {
        name: 'Nisan',
        model: 'Dtx',
        color: 'color'
        // year: 2020
      }
    }
    const httpResponse = sut.handle(httpRequest)
    expect(httpResponse?.statusCode).toBe(400)
    expect(httpResponse?.body).toEqual(new Error('Error in the: year'))
  })

  test('is the color not exist return 400 ', () => {
    const sut = new RegisterVehicle()
    const httpRequest = {
      body: {
        name: 'Nisan',
        model: 'Dtx',
        year: 2020
        // color: 'color'
      }
    }
    const httpResponse = sut.handle(httpRequest)
    expect(httpResponse?.statusCode).toBe(400)
    expect(httpResponse?.body).toEqual(new Error('Error in the: color'))
  })
})
