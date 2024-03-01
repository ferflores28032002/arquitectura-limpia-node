import {
  AuthDatasource,
  CustomError,
  RegisterUserDto,
  UserEntity,
} from "../../domain";

export class AuthDatasourceImpl implements AuthDatasource {
  async register(registerUserDto: RegisterUserDto): Promise<UserEntity> {
    const { name, password, email } = registerUserDto;

    try {
      if (email === "fernando@gmail.com") {
        throw CustomError.BadRequest("email already exists");
      }

      // todo: 2. hash de la contraseña

      // todo: 3. Mapear la respuesta a nuestra entidad

      return new UserEntity("1", name, email, password, ["ADMIN_ROLE"]);
    } catch (error) {
      if (error instanceof CustomError) {
        throw error;
      }
      throw CustomError.InternalServerError();
    }
  }
}
