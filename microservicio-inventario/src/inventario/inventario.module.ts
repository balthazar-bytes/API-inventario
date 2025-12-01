import { Module } from '@nestjs/common';
import { InventarioService } from './inventario.service';
import { InventarioController } from './inventario.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { InventarioDB } from './inventario.entity';




@Module({
  imports:[TypeOrmModule.forFeature([InventarioDB])], // registramos la tabla
  controllers: [InventarioController],
  providers: [InventarioService],
})
export class InventarioModule {}
