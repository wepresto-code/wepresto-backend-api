import {
  Controller,
  Get,
  Query,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';

import { BorrowerService } from './services/borrower.service';

import { GetOneBorrowerInput } from './dto/get-one-borrower-input.dto';
import { PermissionName } from 'nestjs-basic-acl-sdk';

@UsePipes(new ValidationPipe({ whitelist: true, forbidNonWhitelisted: true }))
@Controller('borrowers')
export class BorrowerController {
  constructor(private readonly borrowerService: BorrowerService) {}

  /* READ RELATED ENDPOINTS */

  @PermissionName('borrowers:getLoans')
  @Get('loans')
  getLoans(@Query() input: GetOneBorrowerInput) {
    return this.borrowerService.readService.getLoans(input);
  }

  /* READ RELATED ENDPOINTS */
}
