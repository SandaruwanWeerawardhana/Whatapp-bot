import { Injectable, Logger } from '@nestjs/common';
import axios from 'axios';
import { AppConfig } from '../../config/AppConfig';

@Injectable()
export class ServiceService {
    private readonly logger = new Logger(ServiceService.name);

  async sendMessage(to: string, message: string) {
    let data = JSON.stringify({
      messaging_product: 'whatsapp',
      recipient_type: 'individual',
      to: to,
      type: 'text',
      text: {
        preview_url: false,
        body: message,
      },
    });

    let config = {
      method: 'post',
      maxBodyLength: Infinity,
      url: `https://graph.facebook.com/${AppConfig.WHATSAPP_API_VERSION}/${AppConfig.WHATSAPP_PHONE_NUMBER_ID}/messages`,
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${AppConfig.WHATSAPP_API_KEY}`,
      },
      data: data,
    };

    axios
      .request(config)
      .then((response) => {
        console.log(JSON.stringify(response.data));
      })
      .catch((error) => {
        console.log(error);
      });
  }
}
