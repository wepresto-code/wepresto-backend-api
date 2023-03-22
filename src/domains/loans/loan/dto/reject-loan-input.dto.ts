import { IsUUID, IsOptional, IsString } from 'class-validator';

export class RejectLoanInput {
  @IsUUID()
  readonly uid: string;

  @IsOptional()
  @IsString()
  readonly comment?: string;
}