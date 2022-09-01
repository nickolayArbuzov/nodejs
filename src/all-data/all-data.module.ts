import { Module, forwardRef } from '@nestjs/common';
import { VideoService } from '../videos/videos.service';
import { DatabaseModule } from '../database/database.module';
import { AllDataController } from './all-data.controller';
import { AllDataService } from './all-data.service';
import { VideoModule } from '../videos/videos.module';

@Module({
  controllers: [AllDataController],
  imports: [VideoModule],
  providers: [
    AllDataService,
  ],
})
export class AllDataModule {}