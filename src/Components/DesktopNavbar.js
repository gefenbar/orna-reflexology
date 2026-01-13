import { NavLink } from "react-router-dom";

export default function DesktopNavbar() {

  return (
    <nav className="navbar" dir="rtl">
      <div className="navbar-container">
        <div className="navbar-links">
          <ul>
            <li>
              <NavLink to="/"  className={({ isActive }) => isActive ? "active" : ""}>דף הבית</NavLink>
            </li>
            <li >
              <NavLink to="/about-me" className={({ isActive }) => isActive ? "active" : ""}>קצת עליי</NavLink>
            </li>
            <li>
              <NavLink to="/testimonials" className={({ isActive }) => isActive ? "active" : ""}>המלצות</NavLink>
            </li>
            <li>
              <NavLink to="/about-legs" className={({ isActive }) => isActive ? "active" : ""}>על הרגל</NavLink>
            </li>
            <li>
              <NavLink to="/contact" className={({ isActive }) => isActive ? "active" : ""}>צרו קשר</NavLink>
            </li>
          </ul>
        </div>
      </div>
      <NavLink className="navbar-logo" to="/">
        <img src="logo.webp" width={"150px"} height={"40px"} alt="logo" />
      </NavLink>
    </nav>
  );
}
