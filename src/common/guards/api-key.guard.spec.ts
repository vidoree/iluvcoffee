import { ApiKeyGuard } from './api-key.guard';
import { Reflector } from '@nestjs/core';
import { ConfigService } from '@nestjs/config';

describe('ApiKeyGuard', () => {
  it('should be defined', () => {
    expect(new ApiKeyGuard({} as Reflector, {} as ConfigService)).toBeDefined();
  });
});
