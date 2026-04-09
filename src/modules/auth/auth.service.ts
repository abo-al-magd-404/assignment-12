import { LoginDto, SignupDto } from "./auth.dto";
import { IUser } from "../../common/interfaces";
import {
  BadRequestException,
  ConflictException,
} from "../../common/exceptions";
import { UserRepository } from "../../DB/repository";
import { generateEncryption, generateHash } from "../../common/utils/security";

export class AuthenticationService {
  private readonly userRepository: UserRepository;

  constructor() {
    this.userRepository = new UserRepository();
  }

  public login = (data: LoginDto): LoginDto => {
    return data;
  };

  public async signup({
    email,
    username,
    password,
    phone,
  }: SignupDto): Promise<IUser> {
    const checkUserExist = await this.userRepository.findOne({
      filter: { email },
      projection: "email",
      options: { lean: true },
    });

    console.log({ checkUserExist });

    if (checkUserExist) {
      throw new ConflictException("Email Exist");
    }

    const user = await this.userRepository.createOne({
      data: {
        email,
        username,
        password: await generateHash({ plaintext: password }),
        phone: phone ? await generateEncryption(phone) : undefined,
      },
    });

    if (!user) {
      throw new BadRequestException("Fail");
    }

    return user.toJSON();
  }
}

export default new AuthenticationService();
