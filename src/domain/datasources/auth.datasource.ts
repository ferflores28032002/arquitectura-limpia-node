import { RegisterUserDto, UserEntity } from "../";

export abstract class AuthDatasource {
  // todo:
  // abstract login(loginUserDto: LoginUserDto): Promise<UserEntity>;

  abstract register(registerUserDto: RegisterUserDto): Promise<UserEntity>;
}
