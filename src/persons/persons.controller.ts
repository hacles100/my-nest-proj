import { Body, Controller, Delete, Get, Param, Post, Put, Query } from "@nestjs/common";
import { Cat } from "./cat.entity";
import { Person } from "./person.entity";
import { PersonsService } from "./persons.service";


@Controller('persons')
export class PersonsController {

    constructor(private readonly personsService: PersonsService) { }


    @Get()
    getAll(@Query('name') searchName: string): Array<Person> {
        return this.personsService.getAll();
    }

    @Post()
    create(@Body() newPerson: Person): Person {
        console.log(newPerson);
        return this.personsService.add(newPerson);
    }

    @Put(':id')
    update(@Param('id') id: number, @Body() updatedData: Person) {
        return this.personsService.update(id, updatedData)
    }

    @Get(':id')
    getOne(@Param('id') id: number) {
        return this.personsService.getId(id)
    }

    @Delete(':id')
    delete(@Param('id') id: number) {
        return this.personsService.delete(id)
    }
}