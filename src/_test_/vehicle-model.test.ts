import { VehicleModel } from '../models/vehicle-model'

describe('Clases', () => {
  it('Class vehicle', () => {
    const vehicleModel = new VehicleModel('Nissan', 'DTX', 2020)

    expect(vehicleModel.getName()).toEqual('Nissan')
    expect(vehicleModel.getModel()).toEqual('DTX')
    expect(vehicleModel.getYear()).toBe(2020)
  })
})
