/* eslint-disable prettier/prettier */
import { Controller, ParseFilePipe, Post, UploadedFile, UseInterceptors} from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';

@Controller('cms')
export class CmsController {
    @Post()
    @UseInterceptors(FileInterceptor('file'))
    UploadedFile(@UploadedFile(
        new ParseFilePipe({
            validators: [
                // new MaxFileSizeValidator({ maxSize: 100 }),
                // new FileTypeValidator({ fileType: 'image/jpeg' })
            ],
        })
    ) file: Express.Multer.File) {
        console.log(file);
    }
}

