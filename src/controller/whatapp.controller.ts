import { Controller, Get, Logger, Post, Req, Res } from '@nestjs/common';
import { ServiceService } from '../service/service.service';

@Controller('whatsapp')
export class WhatappController {
  private readonly logger = new Logger(WhatappController.name);
  constructor(private whatsappService: ServiceService) {}

  @Get('test')
  test() {
    return 'test whatapp';
  }

  @Get('webhook')
  challengeWebhook(@Req() req, @Res() res) {
    let mode = req.query['hub.mode'];
    let token = req.query['hub.verify_token'];
    let challenge = req.query['hub.challenge'];

    if (mode && token) {
      if (mode === 'subscribe' && token === process.env.WHATSAPP_CHALLANGE_KEY) {
        console.log('WEBHOOK_VERIFIED');
        res.status(200).send(challenge);
      } else {
        res.sendStatus(403);
      }
    }
  }

  @Post('webhook')
  async handleWebhook(@Req() req, @Res() res) {
    const payload = req.body.entry;
        try {
          const change = payload[0].changes[0].value;
          const senderNumber = change.contacts[0].wa_id;
          const messageText = change.messages[0].text.body;
          const senderName = change.contacts[0].profile.name;

          this.logger.log(`Sender Number: ${senderNumber}`);
          this.logger.log(`Message: ${messageText}`);
          this.logger.log(`Sender Name: ${senderName}`);

         
          await this.whatsappService.handleUserMessage(senderNumber, messageText);

          res.sendStatus(200);
        } catch (e) {
          res.sendStatus(500);
        }
  }
}
