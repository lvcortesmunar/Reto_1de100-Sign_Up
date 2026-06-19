import { useSignUp } from '../hooks/useSignUp';

function SignUpForm() {
  const { formData, handleChange, validate } = useSignUp();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      alert("Registro exitoso!");
    } else {
      alert("Datos inválidos");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input name="nombre" placeholder="Nombre" onChange={handleChange} />
      <input name="email" type="email" placeholder="Email" onChange={handleChange} />
      <input name="password" type="password" placeholder="Contraseña" onChange={handleChange} />
      <button type="submit">Enviar</button>
    </form>
  );
}
export default SignUpForm;