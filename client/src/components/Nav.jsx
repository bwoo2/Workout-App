import { useNavigate } from 'react-router-dom';
import '../style/styles.css'

const Nav = ({ path }) => {
  const navigate = useNavigate();
  const excludedPaths = ["/login", "/sign_up"];

  return (
    <nav className="nav__container">
      <button className="button" onClick={() => navigate('/')}>Home</button>
      
      {!excludedPaths.includes(path) && (
        <>
            <button className="button" onClick={() => navigate('/exercises')}>Exercises</button>
            <button className="button" onClick={() => navigate('/calorie')}>Calorie</button>
            <button className="button" onClick={() => navigate('/login')}>Sign in</button>
            <button className="button__signup" onClick={() => navigate('/sign_up')}>Sign up</button>
        </>
      )}
    </nav>
  );
};

export default Nav;
