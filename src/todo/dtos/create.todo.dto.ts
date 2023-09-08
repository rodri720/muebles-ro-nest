import { IsNotEmpty, IsString, IsEnum,IsOptional } from "class-validator";
import { TodoStatus } from "../schemas/todo.schema";

export class CreateTodoDto {
    @IsString()
    @IsNotEmpty()
    title: string;

    @IsString()
    description?: string;


    @IsOptional()
    @IsEnum(TodoStatus)
    status?: TodoStatus;
}