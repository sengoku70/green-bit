import React, { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { Search, Leaf, Menu, X } from 'lucide-react';

function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const handleLinkClick = () => {
    setMobileMenuOpen(false);
  };

  return (
    <header className="main-header">
      <div className="header-logo-container">
        <Link to="/" className="header-logo-container">
          <div className="header-logo">
            <Leaf size={24} color="#ffffff" fill="#ffffff" />
          </div>
          <span className="header-logo-text">GREEN BIT</span>
        </Link>
      </div>

      <form className="header-search" onSubmit={(e) => e.preventDefault()}>
        <button type="submit">
          <Search size={18} />
        </button>
        <input type="search" placeholder="Search eco topics..." />
      </form>

      <nav className="header-nav">
        <ul className="nav-list">
          <li>
            <NavLink 
              to="/" 
              className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}
              end
            >
              Home
            </NavLink>
          </li>
          <li>
            <a href="#newsletter" className="nav-link">
              Newsletter
            </a>
          </li>
          <li>
            <a href="#donate" className="nav-link">
              Donate
            </a>
          </li>
          <li>
            <NavLink 
              to="/shopping" 
              className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}
            >
              Shopping
            </NavLink>
          </li>
        </ul>
      </nav>

      <button className="btn-cta">Sign In</button>

      <button className="mobile-menu-toggle" onClick={toggleMobileMenu}>
        {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
      </button>
    </header>
  );
}

export default Header;
