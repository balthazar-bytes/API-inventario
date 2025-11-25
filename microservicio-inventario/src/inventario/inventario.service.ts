import { Injectable } from '@nestjs/common';


export interface Inventario {
    id:number,
    name:string,
    price:number,
    stock:number
}


@Injectable()
export class InventarioService {
    private inventario: Inventario[] = [];


    findAll(){
        return this.inventario;
    }

    findOne(id:number){
        return this.inventario.find(i => i.id === id);
    }


    updateStock(id:number,stock:number){
        const index = this.inventario.findIndex(i  => i.id === id);
        if(index !== -1){
            console.log('Stock cambiando');
            this.inventario[index].stock = stock;
            return this.inventario
        }
        else{
            console.log('no se encontro el articulo');
        }
    }

    updatePrice(id:number,price:number){
        const index = this.inventario.findIndex(i  => i.id === id);
        if(index !== -1){
            console.log('Precio cambiando');
            this.inventario[index].price = price;
            return this.inventario
        }
        else{
            console.log('no se encontro el articulo');
            return null
        }
    }


    deleteArt(id:number){
        const index = this.inventario.findIndex(i => i.id === id);
        if(index !== -1){
            this.inventario.splice(index,1);
            return this.inventario;
        }
        else{
            return null
        }

    }


    createArt(name:string,stock:number,price:number){
        const cantidad = this.inventario.length + 1;
        const arcticulo: Inventario ={
            id:cantidad,
            name:name,
            stock:stock,
            price:price

        };
        this.inventario.push(arcticulo);
        return this.inventario;
    }

}
