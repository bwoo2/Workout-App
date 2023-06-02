import { useNavigate } from 'react-router-dom';
import LOGO from '../images/dumbell.png'
import '../style/styles.css'

const Nav = ({ path }) => {
  const navigate = useNavigate();
  const excludedPaths = ["/login", "/sign_up"];

  return (
    <nav className="nav__container">
      <div className="nav__left">
        <button className="fitme__button gradient-text" onClick={() => navigate('/')}><img src={LOGO} alt="logo" className='nav__logo'/>FitMe</button>
      </div>
      
      {!excludedPaths.includes(path) && (
        <>
            <div className="nav__center">
                <button className="button" onClick={() => navigate('/calorie')}>Calorie</button>
                <button className="button" onClick={() => navigate('/exercises')}>Exercises</button>
                <button className="button" onClick={() => navigate('/recipes')}>Recipes</button>
            </div>
            <div className="nav__right">
                <button className="button" onClick={() => navigate('/login')}>Sign in</button>
                <button className="button__signup" onClick={() => navigate('/sign_up')}>Sign up</button>
            </div>
        </>
      )}
    </nav>
  );
};

export default Nav;
