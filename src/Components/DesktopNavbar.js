import { NavLink, useLocation } from "react-router-dom";

export default function DesktopNavbar() {
  const location = useLocation();

  const isActive = (path) => {
    const normalize = (p) => p.endsWith('/') ? p.slice(0, -1) : p;
    return normalize(location.pathname) === normalize(path);
  };

  const getLinkClass = (path) => isActive(path) ? "active" : "";

  return (
    <nav className="navbar" dir="rtl">
      <div className="navbar-container">
        <div className="navbar-links">
          <ul>
            <li>
              <NavLink to="/" className={getLinkClass('/')}>דף הבית</NavLink>
            </li>
            <li >
              <NavLink to="/about-me/" className={getLinkClass('/about-me/')}>קצת עליי</NavLink>
            </li>
            <li>
              <NavLink to="/testimonials/" className={getLinkClass('/testimonials/')}>המלצות</NavLink>
            </li>
            <li>
              <NavLink to="/about-legs/" className={getLinkClass('/about-legs/')}>על הרגל</NavLink>
            </li>
            <li>
              <NavLink to="/contact/" className={getLinkClass('/contact/')}>צרו קשר</NavLink>
            </li>

          </ul>
        </div>
      </div>
      <NavLink className="navbar-logo" to="/">
        <img src="/logo.webp" width={"150px"} height={"40px"} alt="logo" />
      </NavLink>
    </nav>);
}