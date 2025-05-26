import { Test, TestingModule } from '@nestjs/testing';
import { WhatappController } from './whatapp.controller';

describe('WhatappController', () => {
  let controller: WhatappController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [WhatappController],
    }).compile();

    controller = module.get<WhatappController>(WhatappController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
