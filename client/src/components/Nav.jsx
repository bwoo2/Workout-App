import { useNavigate } from 'react-router-dom';
import LOGO from '../images/dumbell.png'
import '../style/styles.css'

const Nav = ({ path }) => {
  const navigate = useNavigate();
  const excludedPaths = ["/login", "/sign_up"];

  return (
    <nav className="nav__container">
      <div className="nav__left">
        <button className="fitme__button gradient-text" onClick={() => navigate('/')}>
          <img src={LOGO} alt="logo" className='nav__logo'/>
          FitMe
        </button>
      </div>
      
      {!excludedPaths.includes(path) && (
        <>
          <div className="nav__center">
              <button className="button" onClick={() => navigate('/exercises')}>Exercises</button>
              <button className="button" onClick={() => navigate('/workouts')}>Workouts</button>
              <button className="button" onClick={() => navigate('/calorie')}>Calorie</button>
              <button className="button" onClick={() => navigate('/recipes')}>Recipes</button>
              <button className="button" onClick={() => navigate('/trainers')}>Trainers</button>
          </div>
          <div className="nav__right">
              <button className="button__signin" onClick={() => navigate('/login')}>Sign in</button>
              <button className="button__signup" onClick={() => navigate('/sign_up')}>
                Sign up
                <svg stroke-width="4" stroke="currentColor" viewBox="0 0 24 24" fill="none" class="h-6 w-6" xmlns="http://www.w3.org/2000/svg">
                    <path d="M14 5l7 7m0 0l-7 7m7-7H3" stroke-linejoin="round" stroke-linecap="round"></path>
                </svg>
              </button>
          </div>
        </>
      )}
    </nav>
  );
};

export default Nav;
