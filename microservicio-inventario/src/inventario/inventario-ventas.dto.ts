import { IsPositive,Min,IsNumber } from "class-validator";


export class ventaDto{
    @IsNumber()
    @IsPositive()
    @Min(1)
    cantidad:number;
}