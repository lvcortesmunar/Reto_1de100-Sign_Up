import { useState } from 'react'

function SignUpForm() {
  const [nombre, setNombre] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const manejarEnvio = (evento) => {
    evento.preventDefault()
    
    // Validación de seguridad básica
    if (nombre === '' || email === '' || password.length < 6) {
      alert("Por favor, completa todos los campos y asegúrate de que la contraseña tenga al menos 6 caracteres.")
      return // Detiene la ejecución aquí si hay error
    }

    alert(`Registro exitoso para: ${email}`)
  }

  return (
    <form 
  onSubmit={manejarEnvio} 
  className="bg-blue-500 p-8 rounded-lg"
>
      <h2>Registro</h2>
      <input type="text" placeholder="Nombre" value={nombre} onChange={(e) => setNombre(e.target.value)} />
      <input type="email" placeholder="Correo" value={email} onChange={(e) => setEmail(e.target.value)} />
      <input type="password" placeholder="Contraseña (mín 6 caracteres)" value={password} onChange={(e) => setPassword(e.target.value)} />
      <button type="submit">Enviar</button>
    </form>
  )
}

export default SignUpForm