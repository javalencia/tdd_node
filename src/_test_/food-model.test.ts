import { Food } from '../models/food-model'

describe('Clases', () => {
  it('class food', () => {
    const food = new Food({
      name: 'hamburger',
      description: 'Delicios fast foot',
      price: 13000
    })

    expect(food.getName()).toEqual('hamburger')
    expect(food.getDescription()).toEqual('Delicios fast foot')
    expect(food.getPrice()).toBe(13000)
  })
})
