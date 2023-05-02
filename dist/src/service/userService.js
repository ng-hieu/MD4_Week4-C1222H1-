"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const users_1 = require("../entity/users");
const data_source_1 = require("../data-source");
class UserService {
    constructor() {
        this.findUser = async (id) => {
            return await this.userRepository.find({
                where: {
                    id: id
                },
            });
        };
        this.checkUser = async (user) => {
            let check = await this.userRepository.findOne({
                where: {
                    nameUser: user.nameUser,
                    password: user.password,
                }
            });
            return check;
        };
        this.showUserEdit = async (id) => {
            let user = await this.userRepository.find({
                where: {
                    id: id
                }
            });
            return user[0];
        };
        this.editUser = async (id, user) => {
            await this.userRepository.update({
                where: { id: id }
            }, {
                nameUser: `${user.nameUser}`,
                ageUser: `${user.ageUser}`,
                image: `${user.image}`
            });
        };
        this.userRepository = data_source_1.AppDataSource.getRepository(users_1.Users);
    }
}
exports.default = new UserService();
//# sourceMappingURL=userService.js.map