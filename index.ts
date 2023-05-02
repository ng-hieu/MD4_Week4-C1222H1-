import express from 'express';
import bodyParser from "body-parser";
import {AppDataSource} from "./src/data-source";
import cors from 'cors'
const app = express();
import router from "./src/router/router";
//thực hiện kết nối db trong TYPE ORM
AppDataSource.initialize().then(() => {
    console.log('Connect Database Success')
})

//Đọc các thông tin từ request body và giải mã dữ liệu đó thành đối tượng JSON
app.use(bodyParser.json());
//Đọc dữ liệu từ request body trong một định dạng nhất định (ở đây là URL-encoded) và lưu dữ liệu đó vào một đối tượng JavaScript.
app.use(bodyParser.urlencoded({extended: true}));
app.use(cors())
app.use('', router)
app.listen(8010, () => {
    console.log('Server 8010 is running')
})