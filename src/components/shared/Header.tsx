import React, { useEffect, useState } from "react";

import { BiMenuAltRight } from "react-icons/bi";
import { AiOutlineClose } from "react-icons/ai";
import { PiCarFill } from "react-icons/pi";
import { LuSearch } from "react-icons/lu";

import "../../styles/shared/Header.scss";

const Header = () => {
  //   const history = useHistory();
  const [menuOpen, setMenuOpen] = useState(false);
  const [size, setSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  useEffect(() => {
    const handleResize = () => {
      setSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    if (size.width > 768 && menuOpen) {
      setMenuOpen(false);
    }
  }, [size.width, menuOpen]);

  const menuToggleHandler = () => {
    setMenuOpen((p) => !p);
  };

  return (
    <header className="header">
      <div className="header__content">
        <div className="header__content__left">
          <div className="header__content__title">
            <a href="/" className="header__content__logo">
              <PiCarFill />
            </a>
            <h2>Grand Design</h2>
          </div>
          <nav
            className={`header__content__nav ${
              menuOpen && size.width < 768 ? "isMenu" : ""
            }`}
          >
            <ul>
              <li>
                <a href="/travel" onClick={menuToggleHandler}>
                  Travel Trailers
                </a>
              </li>
              <li>
                <a href="/wheel" onClick={menuToggleHandler}>
                  Fifth Wheels
                </a>
              </li>
              <li className="header__content__nav__grow">
                <a href="/toy" onClick={menuToggleHandler}>
                  Toy Haulers
                </a>
              </li>
              <li>
                <a href="/shopping" onClick={menuToggleHandler}>
                  Shopping
                </a>
              </li>
              <li>
                <a href="/blog" onClick={menuToggleHandler}>
                  Blog
                </a>
              </li>
              <li>
                <a href="/owners" onClick={menuToggleHandler}>
                  Owners
                </a>
              </li>
              <li>
                <a href="/company" onClick={menuToggleHandler}>
                  Company
                </a>
              </li>
              <li className="header__iconStyle">
                <LuSearch />
              </li>
            </ul>
          </nav>
        </div>
        <div className="header__content__toggle">
          {!menuOpen ? (
            <BiMenuAltRight onClick={menuToggleHandler} />
          ) : (
            <AiOutlineClose onClick={menuToggleHandler} />
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
