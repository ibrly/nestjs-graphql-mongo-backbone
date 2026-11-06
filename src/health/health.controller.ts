import { Controller, Get } from '@nestjs/common';

// Liveness only: answers once Nest has bootstrapped. Add a Mongo ping here when the mongoose module lands.
@Controller('health')
export class HealthController {
  @Get()
  check(): { status: 'ok' } {
    return { status: 'ok' };
  }
}
