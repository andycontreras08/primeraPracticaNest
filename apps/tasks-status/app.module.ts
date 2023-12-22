import { Module } from '@nestjs/common';
import { ConexionModule } from '../../libs/modules/database/conexion/conexion.module';
import { TodoModule } from './todo/todo.module';

@Module({
    imports: [
        ConexionModule,
        TodoModule
    ]
})
export class AppModule {}
