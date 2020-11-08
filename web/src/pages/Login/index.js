
import logo from '../../assets/logo.svg';
import './styles.css';
import { useState } from 'react';
import api from '../../services/api';

export default function Login({ history }) {
  const [username, setUsername] = useState('');
  
  async function handleSubmit(event) {
    event.preventDefault()

    const response = await api.post('/devs', {
      username
    })

    const { _id } = response.data

    history.push(`/dev/${_id}`)
  }

  return (
    <div className="login-container">
      <form onSubmit={handleSubmit}>
        <img src={logo} alt="Tindev" />
        <input 
          placeholder='Nome de usuário'
          value={username}
          onChange={e => setUsername(e.target.value)}
        />
        <button type="submit">Entrar</button>
      </form>
    </div>
  );
}

