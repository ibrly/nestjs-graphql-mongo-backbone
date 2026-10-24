export interface AppEnv {
  port: number;
}

const DEFAULT_PORT = 3000;

/**
 * Reads and checks the environment once at startup, so a bad value fails
 * with a clear message instead of somewhere inside `app.listen`.
 */
export function validateEnv(env: NodeJS.ProcessEnv): AppEnv {
  const errors: string[] = [];

  let port = DEFAULT_PORT;
  const rawPort = env.PORT?.trim();
  if (rawPort) {
    port = Number(rawPort);
    if (!/^\d+$/.test(rawPort) || port < 1 || port > 65535) {
      errors.push(
        `PORT must be an integer between 1 and 65535, got "${env.PORT}"`,
      );
    }
  }

  if (errors.length > 0) {
    throw new Error(`Invalid environment:\n- ${errors.join('\n- ')}`);
  }

  return { port };
}
