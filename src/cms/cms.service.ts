/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { S3Client } from '@aws-sdk/client-s3';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class CmsService {
  private readonly s3Client: S3Client;

  constructor(private readonly configService: ConfigService) {
    this.s3Client = new S3Client({
      region: this.configService.getOrThrow('AWS_S3_REGION'),
    });
  }
}