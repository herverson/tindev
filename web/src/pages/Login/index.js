
import logo from '../../assets/logo.svg';
import './styles.css';

export default function Login() {
  return (
    <div className="login-container">
      <form>
        <img src={logo} alt="Tindev" />
        <input placeholder='Nome de usuário'/>
        <button>Entrar</button>
      </form>
    </div>
  );
}

