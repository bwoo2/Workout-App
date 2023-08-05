import { useNavigate } from 'react-router-dom';
import LOGO from '../images/home_page/dumbell.png'
import '../style/nav.css';

const Nav = ({ path }) => {
  const navigate = useNavigate();
  const excludedPaths = ["/login", "/sign_up"];

  return (
    <nav className="nav__container">
      <div className="nav__left">
        <button className="fitme__button gradient-text" onClick={() => navigate('/')}>
          <img src={LOGO} alt="logo" className='logo'/>
          FitMe
        </button>
      </div>
      
      {!excludedPaths.includes(path) && (
        <>
          <div className="nav__center">
            <button className="button" onClick={() => navigate('/about')}>About</button>
            <button className="button" onClick={() => navigate('/blog')}>Blogs</button>
            <button className="button" onClick={() => navigate('/exercises')}>Exercises</button>
            <button className="button" onClick={() => navigate('/trainers')}>Trainers</button>
            <button className="button" onClick={() => navigate('/gallery')}>Gallery</button>
            <button className="button" onClick={() => navigate('/classes')}>Classes</button>
            <button className="button" onClick={() => navigate('/pricing')}>Pricing</button>
            <button className="button" onClick={() => navigate('/contact')}>Contact</button>
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
