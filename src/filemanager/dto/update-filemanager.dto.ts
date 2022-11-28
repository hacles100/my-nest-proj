import { PartialType } from '@nestjs/mapped-types';
import { CreateFilemanagerDto } from './create-filemanager.dto';
import { IsString } from "class-validator";

export class UpdateFilemanagerDto extends PartialType(CreateFilemanagerDto) {

    @IsString()
    content: string
}
