import { Controller, Get, HttpCode, HttpStatus } from '@nestjs/common';
import { VectorMappingService } from './vector-mapping.service';


@Controller('vector-mappings')
export class VectorMappingController {
  constructor(private readonly svc: VectorMappingService) {}

  @Get()
  @HttpCode(HttpStatus.OK)
  async list() {
    const data = await this.svc.listMappings();
    return { data };
  }
}
