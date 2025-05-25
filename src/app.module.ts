import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { WhatappController } from './whatapp/whatapp.controller';
import { WhatsappService } from './whatsapp/whatsapp.service';

@Module({
  imports: [],
  controllers: [AppController, WhatappController],
  providers: [AppService, WhatsappService],
})
export class AppModule {}
