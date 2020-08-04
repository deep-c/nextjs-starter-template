module.exports = {
    collectCoverageFrom: ['src/**/*.{js,jsx,ts,tsx}', '!**/*.d.ts', '!**/node_modules/**'],
    coverageDirectory: '.coverage',
    moduleFileExtensions: ['ts', 'tsx', 'js'],
    modulePathIgnorePatterns: ['/migrations/'],
    testPathIgnorePatterns: ['/node_modules/', '/.next/'],
    transform: {
        '^.+\\.(js|jsx|ts|tsx)$': 'ts-jest',
        '^.+\\.css$': '<rootDir>config/jest/cssTransform.ts',
    },
    transformIgnorePatterns: ['/node_modules/', '^.+\\.module\\.(css|sass|scss)$'],
    moduleNameMapper: {
        '^@/(.*)$': '<rootDir>/src/$1',
        '^.+\\.module\\.(css|sass|scss)$': 'identity-obj-proxy',
    },
    setupFilesAfterEnv: ['<rootDir>config/jest/setupTests.ts'],
    snapshotSerializers: ['enzyme-to-json'],
    globals: {
        'ts-jest': {
            babelConfig: true,
            tsConfig: '<rootDir>tsconfig.jest.json',
        },
    },
    preset: 'ts-jest/presets/js-with-ts',
    rootDir: '../..',
};
