import {IsString,IsNumber,MinLength,IsNotEmpty, minLength,IsPositive} from 'class-validator';


export class CreateArticleDTO{
    @IsString()
    @IsNotEmpty({message: 'el nombre del articulo no puede estar vacio'})
    @MinLength(3,{message:'el nombre debe de tener minimo 3 letras'})
    name:string;
    @IsNumber()
    @IsNotEmpty({message: 'el precio del articulo no puede estar vacio'})
    @IsPositive({message:'el precio debe de ser positivc'})
    price:number;
    
    @IsNumber()
    @IsNotEmpty({message: 'el stock del articulo no puede estar vacio'})
    @IsPositive({message:'el stock debe de ser positivc'})
    stock:number;

}

