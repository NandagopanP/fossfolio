import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { EventsService } from './events.service';
import { PrismaModule } from '../prisma/prisma.module';
import { CloudModule } from '../cloud/cloud.module';
import { EventsController } from './events.controller';
import { UploadMiddleWare } from './upload.middleware';

@Module({
    providers: [EventsService],
    imports: [PrismaModule, CloudModule],
    controllers: [EventsController],
})
export class EventsModule implements NestModule {
    configure(consumer: MiddlewareConsumer) {
        consumer.apply(UploadMiddleWare).forRoutes(EventsController);
    }
}
