import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { QueryController } from './endpoints/query/query.controller';
import { QueryService } from './endpoints/query/query.service';
import { VectorMappingController } from './endpoints/vector_mapping/vector-mapping.controller';
import { VectorMappingService } from './endpoints/vector_mapping/vector-mapping.service';
import { IonosController } from './endpoints/ionos-rest/ionos.controller';
import { IonosService } from './endpoints/ionos-rest/ionos.service';
import { HttpModule } from '@nestjs/axios';
import { RagIngestService } from './endpoints/ionos-rest/rag-ingest.service';
import { MilvusRagService } from './endpoints/ionos-rest/milvus.service';
import { RagModule } from './endpoints/ionos-rest/rag.module';

@Module({
  imports: [HttpModule.register({ timeout: 30000 }), RagModule],
  controllers: [AppController, QueryController, VectorMappingController, IonosController],
  providers: [AppService, QueryService, VectorMappingService, IonosService, MilvusRagService],
})
export class AppModule {}
