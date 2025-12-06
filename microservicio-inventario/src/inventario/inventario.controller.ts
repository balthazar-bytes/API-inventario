import { CreateArticleDTO } from './create-inventario.dto';
import { InventarioService, Inventario } from './inventario.service';
import { Controller,Get,Patch,Param,Body,Post,Delete } from '@nestjs/common';

@Controller('inventario')
export class InventarioController {
  constructor(private readonly inventarioService: InventarioService) {}


  @Get()
  getall(){
    return this.inventarioService.findAll();
  }

  @Get(":id")
  getOne(@Param('id') id:string){
    return this.inventarioService.findOne(+id);
  }

 @Patch(":id")
  updateArticulo(
    @Param("id") id: string, 
    @Body() body: { stock?: number; price?: number } // Aceptamos ambos opcionalmente
  ) {
    // Aquí puedes llamar a un método genérico en tu servicio
    // O llamar a los dos si vienen los datos:
    
    if (body.stock) {
      this.inventarioService.updateStock(+id, +body.stock);
    }
    if (body.price) {
      // Necesitarás crear este método en tu servicio si no existe
      // o usar un método genérico update(id, data)
      this.inventarioService.updatePrice(+id, +body.price); 
    }
    
    return this.inventarioService.findOne(+id); // Devolvemos el producto actualizado
  }

  @Delete(":id")
  deleteArt(@Param('id') id:string){
    const Borrado = this.inventarioService.deleteArt(+id);
    // if(Borrado){
    //   return{message: 'Articulo eliminado'};

    // }
    // else{
    //   return {message: 'Articulo no encontrado'};
    // }
  }


  @Post()
  createArt(@Body() body:CreateArticleDTO){
    console.log('el articulo que se creo es: ');
    return this.inventarioService.createArt(body.name,body.stock,body.price);
  }

  @Post(':id')
  Venta(@Param('id') id:string,@Body() Body:{cantidad:number}){
    return this.inventarioService.Vender(+id,Body.cantidad);
  }
}
