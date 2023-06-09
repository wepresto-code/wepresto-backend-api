import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';

import { GoogleStorageService } from './google-storage.service';

import appConfig from '../../config/app.config';

@Module({
  imports: [ConfigModule.forFeature(appConfig)],
  providers: [GoogleStorageService],
  exports: [GoogleStorageService],
})
export class GoogleStorageModule {}
