import { Body, Controller, Delete, Get, Param, Patch, Post, UseGuards } from "@nestjs/common";
import { SeriesService } from "./series.service";
import { CreateSerieDto } from "./dto/create-series.dto";
import { AuthGuard } from "../auth/auth.guard";
import { UpdateSeriesDto } from "./dto/update-series.dto";

@Controller('series')
export class SeriesController {
  constructor(private readonly service: SeriesService) { }

  @Get()
  findAll() {
    return this.service.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.service.findOne(+id);
  }

  @UseGuards(AuthGuard)
  @Post()
  create(@Body() dto: CreateSerieDto) {
    return this.service.create(dto);
  }

  @UseGuards(AuthGuard)
  @Patch(':id')
  update(@Param('id') id: string, @Body() dto: UpdateSeriesDto) {
    return this.service.update(+id, dto);
  }

  @UseGuards(AuthGuard)
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.service.remove(+id);
  }
}
