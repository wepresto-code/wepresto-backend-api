import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { IsEnum, IsNumber, IsOptional, IsString } from 'class-validator';

import { LoanTerm } from '../loan.entity';

export class SimulateLoanInput {
  @ApiProperty({
    example: 1000,
  })
  @IsNumber()
  readonly amount: number;

  @ApiProperty({
    enum: Object.values(LoanTerm)
      .map((term) => parseInt(term as string, 10))
      .filter((term) => !!term),
  })
  @IsEnum(LoanTerm, {
    message: `term must be one of ${Object.values(LoanTerm)
      .map((term) => parseInt(term as string, 10))
      .filter((term) => !!term)
      .join(', ')}`,
  })
  readonly term: number;

  @ApiPropertyOptional({
    example: '5f9f1c1b0e1c0c0c0c0c0c0c',
  })
  @IsOptional()
  @IsString()
  readonly alias?: string;
}
