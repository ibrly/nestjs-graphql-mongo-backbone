import { validateEnv } from './env.validation';

describe('validateEnv', () => {
  it('defaults the port to 3000', () => {
    expect(validateEnv({})).toEqual({ port: 3000 });
  });

  it('reads PORT', () => {
    expect(validateEnv({ PORT: '8080' })).toEqual({ port: 8080 });
  });

  it.each(['abc', '0', '65536', '3000.5', '-1'])('rejects PORT=%s', (value) => {
    expect(() => validateEnv({ PORT: value })).toThrow(
      `PORT must be an integer between 1 and 65535, got "${value}"`,
    );
  });
});
