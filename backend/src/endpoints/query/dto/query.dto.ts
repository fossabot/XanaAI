import { Type } from 'class-transformer';
import { IsArray, IsOptional, IsString, ValidateNested } from 'class-validator';

export class ChatMessageDto {
  @IsString() role!: 'system' | 'user' | 'assistant' | 'tool' | 'function';
  @IsString() content!: string;
}

export class AssetDto {
  @IsString() vector_store_id!: string;
  @IsOptional() @IsString() asset_name?: string;
}

export class QueryDto {
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => ChatMessageDto)
  messages!: ChatMessageDto[];

  @IsOptional()
  vectorStoreIds?: string | string[];

  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => AssetDto)
  assets?: AssetDto[];
}
