import { UrlLogin } from '../protocols/protocols-http'

describe('Protocols Http and Queries', () => {
  test('URL login', () => {
    const parseUrl = UrlLogin.parseUrl('http://localhost:3000/login')

    expect(parseUrl.href).toBe('http://localhost:3000/login')
    expect(parseUrl.port).toBe('3000')
  })
  test('Response query', () => {
    const parseUrl = UrlLogin.parseUrl('http://localhost:3000/login?user=user&password=password')
    const expectAuth = {
      user: 'user',
      password: 'password'
    }
    expect(parseUrl.query).toEqual(expectAuth)
  })
})
