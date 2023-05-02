import {Users} from "../entity/users";
import {Blogs} from "../entity/blogs";
import {AppDataSource} from "../data-source";

class UserService {
    private userRepository

    constructor() {
        this.userRepository = AppDataSource.getRepository(Users)
    }

    findUser = async (id) => {
        return await this.userRepository.find({
            where: {
                id: id
            },
        });
    }
    // register = async (user) => {
    //     await Users.create(user)
    // }
    checkUser = async (user) => {
        let check = await this.userRepository.findOne({
            where: {
                nameUser: user.nameUser,
                password: user.password,
            }
        })
        return check;
    }
    showUserEdit = async (id) => {
        let user = await this.userRepository.find({
            where: {
                id: id
            }
        });
        // console.log(typeof product)
        // console.log(product)
        return user[0];
    }
    editUser = async (id, user) => {
        await this.userRepository.update({
                where: {id: id}
            },
            {
                nameUser: `${user.nameUser}`,
                ageUser: `${user.ageUser}`,
                image: `${user.image}`

            })
    }
}

export default new UserService()