import { Entity,Column,PrimaryGeneratedColumn } from "typeorm";


@Entity() // esto es lo que genera la tabla de inventario en el DB
export class InventarioDB{
    @PrimaryGeneratedColumn() // esto genera la autoincrementacion de de ID
    id:number;
    @Column()
    name:string;
    @Column()
    price:number;
    @Column()
    stock:number;

}

