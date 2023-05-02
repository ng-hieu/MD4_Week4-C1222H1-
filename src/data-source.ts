import "reflect-metadata"
import { DataSource } from "typeorm"

export const AppDataSource = new DataSource({
    type: "mysql",
    host: "127.0.0.1",
    port: 3306,
    username: "root",
    password: "123456",
    //ORM ko tự động tạo database mà phải tạo 1 database sẵn
    database: "dbTestORMCase1",
    //cho phép ánh xạ, tự động tạo bảng ghi
    synchronize: false,
    entities: ["dist/src/entity/*.js"],
})
