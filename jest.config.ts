
export default {
  roots: ['<rootDir>/src'],
  collectCoverageFrom: ['<rootDir>/src/***/*.ts'],
  coverageDirectory: 'coverage',
  coverageProvider: 'v8',
  testEnvitoment: 'node',
  transform: {
    '.+\\.ts$': 'ts-jest'
  }
}
