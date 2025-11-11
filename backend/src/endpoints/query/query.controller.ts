import { Body, Controller, HttpCode, HttpStatus, Post } from '@nestjs/common';
import { QueryService } from './query.service';
import { QueryDto } from './dto/query.dto';
import * as findAuthDto from './dto/find-auth.dto';

@Controller('query')
export class QueryController {
  constructor(private readonly queryService: QueryService) {}

  @Post()
  @HttpCode(HttpStatus.OK)
  async handleQuery(@Body() dto: QueryDto) {
    // Ensure vectorStoreIds is always an array of strings
    const { messages, vectorStoreIds } = dto;
    const normalizedVectorStoreIds: string[] =
      typeof vectorStoreIds === 'string'
        ? [vectorStoreIds]
        : Array.isArray(vectorStoreIds)
        ? vectorStoreIds
        : [];

    return this.queryService.handleQuery({
      messages,
      vectorStoreIds: normalizedVectorStoreIds,
    });
  }

  @Post('get-indexed-db-data')
  getIndexedData(@Body() data: findAuthDto.FindIndexedDbAuthDto) {
    try {
      return this.queryService.getIndexedData(data);
    } catch (err) {
      throw err;
    }
  }
}