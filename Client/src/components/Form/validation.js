function validation(data) {
  // data ={username: ...., passwoerd:..}
  let errors = {};
  const regexEmail = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
  const regexNumber = /\d/;

  // validaciones de username y password para que no hayan errores
  if (!regexEmail.test(data.email)) {
    errors.email = "ingrese un mail valido";
  }
  if (!data.email) {
    errors.email = "Debe ingresar un usuario";
  }
  if (data.email.length > 35) {
    errors.email = "Ingrese menos de 35 caracteres";
  }
  if (!regexNumber.test(data.password)) {
    errors.password = "Debe ingresar al menos un numero";
  }
  if (data.password.length < 6 || data.password.length > 10) {
    errors.password = "Longitud de contraseña incorrecta";
  }
  return errors;
}
export default validation;
