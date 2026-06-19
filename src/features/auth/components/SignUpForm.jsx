import { useForm } from '../../../hooks/useForm';
import { registerUser } from '../services/authService';
import { validateSignUp } from '../../../utils/validation'; // Asegúrate de ajustar esta ruta

export const SignUpForm = () => {
  const { values, handleInputChange } = useForm({ nombre: '', correo: '', password: '' });

  const handleSubmit = async (e) => {
    e.preventDefault();

    // 1. Validamos antes de hacer nada
    const errors = validateSignUp(values);

    // 2. Si hay errores (si el objeto errors no está vacío), frenamos
    if (Object.keys(errors).length > 0) {
      alert("Errores: " + Object.values(errors).join(', '));
      return;
    }

    // 3. Si todo está bien, enviamos los datos
    const respuesta = await registerUser(values);
    alert(respuesta.message);
  };

  return (
    <form className="form-container" onSubmit={handleSubmit}>
      <h2>Registro</h2>
      <input className="input-field" name="nombre" placeholder="Nombre" value={values.nombre} onChange={handleInputChange} />
      <input className="input-field" name="correo" placeholder="Correo" value={values.correo} onChange={handleInputChange} />
      <input className="input-field" name="password" type="password" placeholder="Contraseña" value={values.password} onChange={handleInputChange} />
      <button className="btn-enviar" type="submit">Enviar</button>
    </form>
  );
};