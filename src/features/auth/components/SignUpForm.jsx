import { useState } from 'react'

function SignUpForm() {
  const [nombre, setNombre] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const manejarEnvio = (evento) => {
    evento.preventDefault()
    alert(`Registro exitoso para: ${email}`)
  }

  return (
    <form onSubmit={manejarEnvio}>
      <h2>Registro</h2>
      
      <input 
        type="text" placeholder="Nombre" 
        value={nombre} onChange={(e) => setNombre(e.target.value)} 
      />
      
      <input 
        type="email" placeholder="Correo electrónico" 
        value={email} onChange={(e) => setEmail(e.target.value)} 
      />
      
      <input 
        type="password" placeholder="Contraseña" 
        value={password} onChange={(e) => setPassword(e.target.value)} 
      />
      
      <button type="submit">Enviar</button>
    </form>
  )
}

export default SignUpForm