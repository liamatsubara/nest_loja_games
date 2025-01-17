import { Body, Controller, Delete, Get, HttpCode, HttpStatus, Param, ParseIntPipe, Post, Put } from "@nestjs/common";
import { CategoriaService } from "../services/categoria.service";
import { Categoria } from "../entities/categoria.entity";

@Controller("/categorias")
export class CategoriaController {

    constructor(
        private readonly categoriaService: CategoriaService
    ){};

    @Get()
    @HttpCode(HttpStatus.OK)
    findAll(): Promise<Categoria[]> {
        return this.categoriaService.findAll()
    };

    @Get('/:id')
    @HttpCode(HttpStatus.OK)
    findById(@Param('id', ParseIntPipe) id: number): Promise<Categoria> {
        return this.categoriaService.findById(id)
    };

    @Get('/titulo/:titulo')
    @HttpCode(HttpStatus.OK)
    findByTitulo(@Param('titulo') titulo: string): Promise<Categoria[]> {
        return this.categoriaService.findByTitulo(titulo);
    }

    @Get('/descricao/:descricao')
    @HttpCode(HttpStatus.OK)
    findByDescricao(@Param('descricao') descricao: string): Promise<Categoria[]> {
      return this.categoriaService.findByDescricao(descricao);
    };

    @Post()
    @HttpCode(HttpStatus.CREATED)
    create(@Body() categoria: Categoria) {
        return this.categoriaService.create(categoria)
    };

    @Put()
    @HttpCode(HttpStatus.OK)
    update(@Body() categoria: Categoria) {
        return this.categoriaService.update(categoria)
    };

    @Delete('/:id')
    @HttpCode(HttpStatus.NO_CONTENT)
    delete(@Param('id', ParseIntPipe) id: number) {
        return this.categoriaService.delete(id)
    }

}