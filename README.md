# WhatsApp Chat Bot with OpenAI Integration (NestJS)

A server-side chatbot application built with [NestJS](https://nestjs.com/) that integrates WhatsApp messaging and OpenAI (GPT) for intelligent conversational responses.

## Features

- **WhatsApp Webhook Integration**: Receives and sends WhatsApp messages using the WhatsApp Cloud API.
- **OpenAI GPT Integration**: Uses OpenAI's GPT models to generate intelligent responses to user messages.
- **Modular NestJS Structure**: Clean, maintainable codebase using NestJS best practices.
- **Environment-based Configuration**: Securely manages API keys and configuration via environment variables.
- **Extensible Service Layer**: Easily add more AI providers or business logic.

## Project Structure

```
chat-bot/
├── config/
│   └── AppConfig.ts           # Loads environment variables and config
├── src/
│   ├── controller/
│   │   └── whatapp.controller.ts  # WhatsApp webhook endpoints
│   ├── openai/
│   │   └── openai.service.ts      # OpenAI GPT integration
│   ├── service/
│   │   └── service.service.ts     # Business logic and WhatsApp API calls
│   ├── app.module.ts
│   └── main.ts
├── .env                     # Environment variables (not committed)
├── package.json
└── README.md
```

## Setup Instructions

### 1. Clone the Repository

```bash
$ git clone <your-repo-url>
$ cd chat-bot
```

### 2. Install Dependencies

```bash
$ npm install
```

### 3. Configure Environment Variables

Create a `.env` file in the root directory with the following variables:

```
WHATSAPP_API_VERSION=your_whatsapp_api_version
WHATSAPP_PHONE_NUMBER_ID=your_phone_number_id
WHATSAPP_API_KEY=your_whatsapp_api_key
OPENAI_API_KEY=your_openai_api_key
PORT=3000
```

- Get WhatsApp API credentials from [Meta for Developers](https://developers.facebook.com/docs/whatsapp/cloud-api/get-started).
- Get your OpenAI API key from [OpenAI](https://platform.openai.com/account/api-keys).

### 4. Run the Application

#### Development
```bash
$ npm run start:dev
```

#### Production
```bash
$ npm run start:prod
```

The server will start on the port specified in your `.env` file (default: 3000).

### 5. Expose Your Server (for Webhooks)
If running locally, use [ngrok](https://ngrok.com/) or similar to expose your server to the internet for WhatsApp webhook verification.

## API Endpoints

- `GET /whatapp/test` — Health check endpoint.
- `GET /whatapp/webhook` — WhatsApp webhook verification.
- `POST /whatapp/webhook` — Receives WhatsApp messages and responds using OpenAI.

## How It Works

1. WhatsApp sends a message to your webhook endpoint.
2. The controller extracts the message and sender info.
3. The service sends the message to OpenAI and gets a response.
4. The service sends the AI-generated response back to the user via WhatsApp API.

## Testing

- **Unit tests:**
  ```bash
  $ npm run test
  ```
- **E2E tests:**
  ```bash
  $ npm run test:e2e
  ```
- **Test coverage:**
  ```bash
  $ npm run test:cov
  ```

## Deployment

See [NestJS deployment docs](https://docs.nestjs.com/deployment) for best practices. You can use [Mau](https://mau.nestjs.com) for cloud deployment.

## Resources
- [NestJS Documentation](https://docs.nestjs.com)
- [WhatsApp Cloud API Docs](https://developers.facebook.com/docs/whatsapp/cloud-api)
- [OpenAI API Docs](https://platform.openai.com/docs/api-reference)

## License

MIT
