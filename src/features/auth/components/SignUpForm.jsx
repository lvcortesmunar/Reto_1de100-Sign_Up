import { useState } from 'react'

function SignUpForm() {
  const [nombre, setNombre] = useState('')

  const manejarEnvio = (evento) => {
    evento.preventDefault() // Detiene el comportamiento por defecto
    alert(`Enviado: ${nombre}`)
  }

  return (
    <form onSubmit={manejarEnvio}>
      <h2>Registro</h2>
      <input 
        type="text" 
        placeholder="Nombre" 
        value={nombre}
        onChange={(e) => setNombre(e.target.value)}
      />
      <p>Hola, mi nombre es {nombre}.</p>
      <button type="submit">Enviar</button>
    </form>
  )
}

export default SignUpForm