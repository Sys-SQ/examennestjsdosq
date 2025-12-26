import { Body, Controller, Delete, Get, Param, Patch, Post, UseGuards } from "@nestjs/common";
import { EpisodiosService } from "./episodios.service";
import { AuthGuard } from "../auth/auth.guard";
import { UpdateEpisodioDto } from "./dto/update-episodio.dto";
import { CreateEpisodioDto } from "./dto/create-episodio.dto";


@Controller('episodios')
export class EpisodiosController {
  constructor(private readonly service: EpisodiosService) { }

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
  create(@Body() dto: CreateEpisodioDto) {
    return this.service.create(dto);
  }

  @UseGuards(AuthGuard)
  @Patch(':id')
  update(@Param('id') id: string, @Body() dto: UpdateEpisodioDto) {
    return this.service.update(+id, dto);
  }

  @UseGuards(AuthGuard)
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.service.remove(+id);
  }
}
