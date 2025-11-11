// ionos-ai.controller.ts
import { Controller, Post, Body } from '@nestjs/common';
import { IonosService } from './ionos.service';

type ChatRole = 'system' | 'user' | 'assistant' | 'tool' | 'function';
interface ChatMessage { role: ChatRole; content: string; }

class ChatDto {
  messages!: ChatMessage[];
  temperature?: number;
  maxTokens?: number;
  extra?: Record<string, any>;
}

class EmbeddingsDto {
  input!: string | string[];
  encodingFormat?: 'float' | 'base64';
}

@Controller('ai')
export class IonosController {
  constructor(private readonly ionos: IonosService) {}

  @Post('chat')
  async chat(@Body() dto: ChatDto) {
    return this.ionos.chatCompletion(dto);
  }

  @Post('embeddings')
  async embeddings(@Body() dto: EmbeddingsDto) {
    return this.ionos.createEmbeddings(dto);
  }
}