import { Link } from 'react-router-dom';
import LogoTitle from '../../assets/images/name.png';
import './index.scss';

const Home = () => {


    return (
        <div className="container home-page">
            <div className="text-zone">
                <h1>Welcome! <br />I'm
                <img src={LogoTitle} alt='developer' />
                Web Developer 
                </h1>
                <h2>
                  Full Stack Web Developer  
                </h2>
                <Link to="/contact" className='flat-button'>Contact Me</Link>
            </div>
        </div>
    );
}

export default Home