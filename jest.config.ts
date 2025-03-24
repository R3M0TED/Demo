import type { Config } from '@jest/types';

const config: Config.InitialOptions = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  testTimeout: 60000, 
  maxWorkers: '50%',
  globalSetup: './runtime/global-setup.ts',
  globalTeardown: './runtime/global-teardown.ts',
};

export default config;
