import { RegisterUserDto, UserEntity } from "../";

export abstract class AuthRepository {
  // todo:
  // abstract login(loginUserDto: LoginUserDto): Promise<UserEntity>;

  abstract register(registerUserDto: RegisterUserDto): Promise<UserEntity>;
}
