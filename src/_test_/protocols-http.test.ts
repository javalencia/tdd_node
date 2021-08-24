import { InvalidArgument } from '../errors/invalid-arg'
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

  test('URL users', () => {
    const parseUrl = UrlLogin.parseUrl('http://localhost:3000/user')

    expect(parseUrl.href).toBe('http://localhost:3000/user')
    expect(parseUrl.port).toBe('3000')
  })

  test('Response query user', () => {
    const parseUrl = UrlLogin.parseUrl('http://localhost:3000/user?user=user&password=password&lastname=lastname')
    const expectAuth = {
      user: 'user',
      password: 'password',
      lastname: 'lastname'
    }
    expect(parseUrl.query).toEqual(expectAuth)
  })

  test('Invalid url', () => {
    function expectError (): void {
      UrlLogin.parseUrl('')
    }
    expect(expectError).toThrowError(new InvalidArgument(''))
  })
})
