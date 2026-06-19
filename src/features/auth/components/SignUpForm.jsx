import { useState } from 'react'

function SignUpForm() {
  const [nombre, setNombre] = useState('')

  return (
    <form>
      <h2>Registro</h2>
      <input 
        type="text" 
        placeholder="Nombre" 
        value={nombre}
        onChange={(e) => setNombre(e.target.value)}
      />
      <p>Hola, {nombre}</p>
      <button type="submit">Enviar</button>
    </form>
  )
}

export default SignUpForm