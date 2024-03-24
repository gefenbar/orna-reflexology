import { Link } from "react-router-dom"
export default function Navbar() {  
return (
    <nav className="navbar" dir='rtl'>
      <div className="navbar-container">
      
        <div className={`navbar-links`}>
          <ul>
          <a className="navbar-logo" href='/'>
          <img src="logo.webp" width={'150px'} height={'40px'} alt='logo' ></img>
        </a>
        <li>
        <Link to="/">דף הבית</Link>
        </li>
        <li>
        <Link to="/treatments">על הרגל</Link>
        </li>
        <li>
        <Link to="/about">אודות</Link>
        </li>
        <li>

          <Link to="/contact">צרו קשר</Link>
          </li>

          </ul>
        </div>
        
      </div>
    </nav>
  );
};

