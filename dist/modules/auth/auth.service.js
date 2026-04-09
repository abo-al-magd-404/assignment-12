"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthenticationService = void 0;
const exceptions_1 = require("../../common/exceptions");
const repository_1 = require("../../DB/repository");
const security_1 = require("../../common/utils/security");
class AuthenticationService {
    userRepository;
    constructor() {
        this.userRepository = new repository_1.UserRepository();
    }
    login = (data) => {
        return data;
    };
    async signup({ email, username, password, phone, }) {
        const checkUserExist = await this.userRepository.findOne({
            filter: { email },
            projection: "email",
            options: { lean: true },
        });
        console.log({ checkUserExist });
        if (checkUserExist) {
            throw new exceptions_1.ConflictException("Email Exist");
        }
        const user = await this.userRepository.createOne({
            data: {
                email,
                username,
                password: await (0, security_1.generateHash)({ plaintext: password }),
                phone: phone ? await (0, security_1.generateEncryption)(phone) : undefined,
            },
        });
        if (!user) {
            throw new exceptions_1.BadRequestException("Fail");
        }
        return user.toJSON();
    }
}
exports.AuthenticationService = AuthenticationService;
exports.default = new AuthenticationService();
