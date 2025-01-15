import { Body, Controller, Get, Param, Post } from '@nestjs/common';

@Controller('messages')
export class MessagesController {
  @Get()
  listMessages() {}

  @Get('/:id')
  getMessage(@Param('id') id: string) {
    console.log('id', id);
  }

  @Post()
  createMessage(@Body() body: any) {
    console.log('body', body);
  }
}
