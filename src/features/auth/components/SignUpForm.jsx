function SignUpForm() {
  return (
    // Agregamos la clase 'form-container' aquí
    <form className="form-container">
      <h2>Registro</h2>
      {/* Agregamos la clase 'input-field' a cada input */}
      <input className="input-field" type="text" placeholder="Nombre" />
      <input className="input-field" type="text" placeholder="Correo" />
      <input className="input-field" type="text" placeholder="Contraseña" />
      
      {/* Agregamos la clase 'btn-enviar' aquí */}
      <button className="btn-enviar">Enviar</button>
    </form>
  )
}
export default SignUpForm