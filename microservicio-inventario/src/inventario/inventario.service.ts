import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { InventarioDB } from './inventario.entity';

export interface Inventario {
    id:number,
    name:string,
    price:number,
    stock:number
}


@Injectable()
export class InventarioService {
    // private inventario: Inventario[] = [
    //     {id:1,name:"papel", price:10, stock:11}
    // ];
    constructor(
        @InjectRepository(InventarioDB)
        private inventario: Repository<InventarioDB>, // aca inyectamos el repositorio
    ){}

    //GET
    findAll(){
        //SIN BASE DE DATOS
        //return this.inventario;

        
        
        //CON BASE DE DATOS
        
        return this.inventario.find();
    }

    findOne(id:number){
        //sin base de datos
        // return this.inventario.find(i => i.id === id);
        //CON BASE DE DATOS
        return this.inventario.findOneBy({id});
    }

    //UPDATE
    async updateStock(id:number,stock:number){ // el async es un indicador de asincronico, de que esta funcion tarda en hacer las cosas
        //CON BASE DE DATOS
        const articulo = await this.inventario.findOneBy({id}); // await, es deicr "wait" = esperar, hace que la funcion no pase de esta linia de codigo hasta que me den el dato de la DB
        if (articulo)
        {
            articulo.stock = stock;
            return this.inventario.save(articulo); 
        }
        else{
            return null;
        }




        //SIN BASE DE DATOS



        // const index = this.inventario.findIndex(i  => i.id === id);
        // if(index !== -1){
        //     console.log('Stock cambiando');
        //     this.inventario[index].stock = stock;
        //     return this.inventario
        // }
        // else{
        //     console.log('no se encontro el articulo');
        // }
    }

    async updatePrice(id:number,price:number){
        const articulo = await this.inventario.findOneBy({id});
        if(articulo){
            articulo.price = price;
            return this.inventario.save(articulo);
        }
        else{
            return null;
        }
    }











    //     const index = this.inventario.findIndex(i  => i.id === id);
    //     if(index !== -1){
    //         console.log('Precio cambiando');
    //         this.inventario[index].price = price;
    //         return this.inventario
    //     }
    //     else{
    //         console.log('no se encontro el articulo');
    //         return null
    //     }
    // }


    
    //DELETE

    async deleteArt(id:number){
        const resultado = await this.inventario.delete(id);
        return resultado




        // const index = this.inventario.findIndex(i => i.id === id);
        // if(index !== -1){
        //     this.inventario.splice(index,1);
        //     return this.inventario;
        // }
        // else{
        //     return null
        // }

    }

    //CREATE
    createArt(name:string,stock:number,price:number){

        const nuevoArticulo = this.inventario.create({name,stock,price});
        return this.inventario.save(nuevoArticulo);



        // const cantidad = this.inventario.length + 1;
        // const arcticulo: Inventario ={
        //     id:cantidad,
        //     name:name,
        //     stock:stock,
        //     price:price

        // };
        // this.inventario.push(arcticulo);
        // return this.inventario;
    }

}
