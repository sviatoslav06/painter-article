import { Link } from 'react-router-dom';
import './App.css';
import Layout from './components/Layout';

function App() {

  return (
    <div className="App container">
      <nav className='header sticky-top'>
        <Link to="" className='link'><img src='./favicon.ico' alt='logo' /></Link>
        <Link to="" className='link'>Painter</Link>
        <Link to="painting" className='link'>Painting</Link>
        <Link to="paintings" className='link'>Paintings</Link>
      </nav>
      <Layout />
      <div className='footer'>
        <a href='https://uk.wikipedia.org/wiki/%D0%9B%D0%B5%D0%BE%D0%BD%D0%B0%D1%80%D0%B4%D0%BE_%D0%B4%D0%B0_%D0%92%D1%96%D0%BD%D1%87%D1%96'>Link to full site</a>
      </div>
    </div>
  );
}

export default App;
