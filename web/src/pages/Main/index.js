import { useEffect } from 'react';

import logo from '../../assets/logo.svg';
import like from '../../assets/like.svg';
import dislike from '../../assets/dislike.svg';

import './styles.css';

export default function Login({ match }) {

  useEffect(() => {
      
  }, []);

  return (
    <div className="main-container">
      <img src={logo} alt="Tindev"/>
      <ul>
        <li>
          <img src="https://avatars0.githubusercontent.com/u/25849810?s=460&u=47139c45408de27c67924fb31cca1fb5751d6671&v=4" alt=""/>
          <footer>
            <strong>Herverson</strong>
            <p>Developer</p>
          </footer>

          <div className="buttons">
            <button type="button">
              <img src={dislike} alt=""/>
            </button>
            <button type="button">
              <img src={like} alt=""/>
            </button>
          </div>
        </li>
      </ul>
    </div>
  )
}