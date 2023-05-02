declare class UserService {
    private userRepository;
    constructor();
    findUser: (id: any) => Promise<any>;
    checkUser: (user: any) => Promise<any>;
    showUserEdit: (id: any) => Promise<any>;
    editUser: (id: any, user: any) => Promise<void>;
}
declare const _default: UserService;
export default _default;
