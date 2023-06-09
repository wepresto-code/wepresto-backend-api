import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';

import appConfig from '../../../config/app.config';

import { Borrower } from './borrower.entity';

import { BorrowerReadService } from './services/borrower.read.service';
import { BorrowerService } from './services/borrower.service';
import { BorrowerController } from './borrower.controller';

@Module({
  imports: [
    ConfigModule.forFeature(appConfig),
    TypeOrmModule.forFeature([Borrower]),
  ],
  providers: [BorrowerReadService, BorrowerService],
  controllers: [BorrowerController],
  exports: [BorrowerService],
})
export class BorrowerModule {}
