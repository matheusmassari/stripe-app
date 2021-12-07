import React from "react";
import { useGlobalContext } from "../../context/context";
import logo from "../../assets/logo.svg";
import { FaBars } from "react-icons/fa";

const Navbar = () => {
  const { openSidebar, openSubmenu, closeSubmenu } = useGlobalContext();

  const displaySubmenu = (e) => {
    const page = e.target.textContent;
    const tempBtn = e.target.getBoundingClientRect();
    const center = (tempBtn.left + tempBtn.right) / 2;
    const bottom = tempBtn.bottom - 3;
    openSubmenu(page, { center, bottom });
  };
  
  return (
    <nav className="nav">
      <div className="nav-center">
        <div className="nav-header">
          <img src={logo} className="nav-logo" alt="stripe" />
          <button className="btn toggle-btn" onClick={openSidebar}>
            <FaBars />
          </button>
        </div>

        <ul className="nav-links">
          <li>
            <button className="link-btn" onMouseOver={displaySubmenu}>
              produtos
            </button>
          </li>
          <li>
            <button className="link-btn" onMouseOver={displaySubmenu}>
              desenvolvedores
            </button>
          </li>
          <li>
            <button className="link-btn" onMouseOver={displaySubmenu}>
              empresa
            </button>
          </li>
        </ul>
        <button className="btn signin-btn">Entrar</button>
      </div>
    </nav>
  );
};

export default Navbar;
