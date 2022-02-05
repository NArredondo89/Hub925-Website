import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Container,
  Menu,
  RightMenu,
  CustomMenu,
  MobileMenu,
  CloseMenu,
  CloseMenuWrapper,
} from './Navbar.js';

function Navbar() {
  const [menuStatus, setMenuStatus] = useState(false);

  return (
    <>
      <Container>
        <Menu>
          <Link to="/the-studio">The Studio</Link>
          <Link to="/the-recovery-lounge">The Recovery Lounge</Link>
          <Link to="/">Hub925 Fitness Facility</Link>
          <Link to="/the-arena">The Arena </Link>
          <Link to="/the-rejuvenation-spa">The Rejuvenation Spa</Link>
        </Menu>
        <RightMenu>
          <CustomMenu onClick={() => setMenuStatus(true)} />
        </RightMenu>

        <MobileMenu show={menuStatus}>
          <CloseMenuWrapper>
            <CloseMenu onClick={() => setMenuStatus(false)} />
          </CloseMenuWrapper>
          <li>
            <Link to="/the-studio">The Studio</Link>
          </li>
          <li>
            <Link to="/the-recovery-lounge">The Recovery Lounge</Link>
          </li>
          <li>
            <Link to="/">Hub925 Fitness Facility</Link>
          </li>
          <li>
            <Link to="/the-the-arena">The Arena </Link>
          </li>
          <li>
            <Link to="/the-rejuvenation-spa">The Rejuvenation Spa</Link>
          </li>
        </MobileMenu>
      </Container>
    </>
  );
}

export default Navbar;
