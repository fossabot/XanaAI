// rag.module.ts
import { Module } from '@nestjs/common';
import { HttpModule } from '@nestjs/axios';
import { RagIngestService } from './rag-ingest.service';
import { MilvusRagService } from './milvus.service';
import { IonosService } from './ionos.service';

@Module({
  imports: [HttpModule],
  providers: [RagIngestService, MilvusRagService, IonosService],
  exports: [RagIngestService, IonosService], // export if others need it
})
export class RagModule {}