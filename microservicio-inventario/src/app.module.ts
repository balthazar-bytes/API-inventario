import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { InventarioModule } from './inventario/inventario.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { InventarioDB } from './inventario/inventario.entity';


@Module({
  imports: [
    //configuracion de la DB
    TypeOrmModule.forRoot({
      type: 'sqlite',
      database: 'inventario.db',
      entities:[InventarioDB], // esta es la tabla que vamos a usar
      synchronize: true
    }),
    InventarioModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
