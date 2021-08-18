import { VehicleModel } from '../models/vehicle-model'

describe('Clases', () => {
  it('Class vehicle', () => {
    const vehicleModel = new VehicleModel({
      name: 'Nissan',
      model: 'DTX',
      year: 2020,
      price: 25,
      inventory: true
    })

    expect(vehicleModel.getName()).toEqual('Nissan')
    expect(vehicleModel.getModel()).toEqual('DTX')
    expect(vehicleModel.getYear()).toBe(2020)
    expect(vehicleModel.getPrice()).toBe(25)
    expect(vehicleModel.getInventory()).toBe(true)
  })
})
