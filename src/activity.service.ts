import { Logger, Injectable, Inject } from '@nestjs/common';
import { Repository } from 'typeorm';
import { Activity } from './activity.entity';

export const ACTIVITY_REPOSITORY_TOKEN = Symbol('ACTIVITY_REPOSITORY_TOKEN');

@Injectable()
export class ActivityService {
  private logger = new Logger(ActivityService.name);

  constructor(@Inject(ACTIVITY_REPOSITORY_TOKEN) private activityRepository: Repository<Activity>) {}

  async add(description: string, sourceObjectId: string, authorId?: string) {
    this.logger.debug({ sourceObjectId, authorId }, 'Adding activity');

    return await this.activityRepository.save({ authorId, description, sourceObjectId });
  }

  async find(sourceObjectId: string) {
    return this.activityRepository.find({ where: { sourceObjectId } });
  }
}
