import { DynamicModule, Module } from '@nestjs/common';
import { getDataSourceToken, TypeOrmModule } from '@nestjs/typeorm';
import { EntityClassOrSchema } from '@nestjs/typeorm/dist/interfaces/entity-class-or-schema.type';
import { DataSource } from 'typeorm';
import { getActivityController } from './activity.controller';
import { ActivityService, ACTIVITY_REPOSITORY_TOKEN } from './activity.service';

@Module({})
export class ActivityModule {
  static forFeature(entity: EntityClassOrSchema, baseUrl: string): DynamicModule {
    const controller = getActivityController(baseUrl);

    return {
      module: ActivityModule,
      imports: [TypeOrmModule.forFeature([entity])],
      controllers: [controller],
      providers: [
        {
          provide: ACTIVITY_REPOSITORY_TOKEN,
          useFactory: (dataSource: DataSource) => {
            return dataSource.getRepository(entity);
          },
          inject: [getDataSourceToken()],
        },
        ActivityService,
      ],
    };
  }
}
