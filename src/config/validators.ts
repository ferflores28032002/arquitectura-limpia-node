export class Validators {
  
  static get email() {
    // Expresión regular para validar el formato de un correo electrónico
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  }
}
