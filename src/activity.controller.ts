import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { ActivityService } from './activity.service';
import { AddActivityDto } from './add-activity.dto';

export const getActivityController = (baseUrl: string): any => {
  @Controller(`/activity/${baseUrl}/activity`)
  class ActivityController {
    constructor(private activityService: ActivityService) {}

    @Post('/:sourceObjectId')
    addComment(@Param('sourceObjectId') sourceObjectId: string, @Body() addActivityDto: AddActivityDto) {
      return this.activityService.add(addActivityDto.description, sourceObjectId, addActivityDto.authorId);
    }

    @Get('/:sourceObjectId')
    getActivities(@Param('sourceObjectId') sourceObjectId: string) {
      return this.activityService.find(sourceObjectId);
    }
  }

  return ActivityController;
};
