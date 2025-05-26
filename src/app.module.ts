import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { WhatappController } from './controller/whatapp.controller';
import { ServiceService } from './service/service.service';
import { ConfigModule } from '@nestjs/config';
import { OpenaiService } from './openai/openai.service';

@Module({
  imports: [ConfigModule.forRoot()],
  controllers: [AppController, WhatappController],
  providers: [AppService, ServiceService, OpenaiService],
})
export class AppModule {}
