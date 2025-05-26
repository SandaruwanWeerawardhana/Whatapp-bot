import { Injectable } from '@nestjs/common';
import { AppConfig } from 'config/AppConfig';
import OpenAI from 'openai';

@Injectable()
export class OpenaiService {
  private openai: OpenAI;

  constructor() {
    this.openai = new OpenAI({
      apiKey: AppConfig.OPENAI_API_KEY,
    });
  }

  async generateOpenAIResponse(prompt: string): Promise<string> {
    try {
      const completion = await this.openai.chat.completions.create({
        model: 'gpt-3.5-turbo',
        messages: [{ role: 'user', content: prompt }],
      });
      return completion.choices[0].message?.content || 'No response';
    } catch (error) {
      console.error('OpenAI error:', error);
      return 'Sorry, I could not process your request.';
    }
  }
}
