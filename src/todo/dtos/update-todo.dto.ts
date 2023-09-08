import { IsNotEmpty, IsString, IsEnum,IsOptional } from "class-validator";
import { TodoStatus } from "../schemas/todo.schema";

export class UpdateTodoDto {
    @IsString()
    @IsNotEmpty()
    @IsOptional()
    title?: string;

    @IsString()
    description?: string;


    @IsOptional()
    @IsEnum(TodoStatus)
    status?: TodoStatus;
}