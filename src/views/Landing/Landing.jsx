import React, {useEffect} from 'react';
import { Link } from 'react-router-dom';
import "./landing.css";
import { useDispatch } from 'react-redux';
import { getAllDogs } from '../../redux/actions';
import Logo from '../../image/Logo.png';
import Footer from '../../Components/Footer/Footer';

const Landing = () => {
const dispatch = useDispatch()
useEffect (()=>{
  dispatch(getAllDogs())
}, [dispatch])

return (
  <div className="container">
  <Link to="/home">
    <button className="buttonContainer">Entrar</button>
  </Link>
  {/* <Link to="/home">
    <button className="buttonContainer1">Busca un Perro</button>
  </Link>
  <Link to="/form">
    <button className="buttonContainer2">Crear una raza de perro</button>
  </Link>
  <Link to="/home">
    <button className="buttonContainer3">Pet Store</button>
  </Link> */}
  <div className='imageContainer'>
    <img src={Logo} alt="Logo" className='landing-logo' />
  </div>
  <Footer />
</div>
  );
};

export default Landing;
