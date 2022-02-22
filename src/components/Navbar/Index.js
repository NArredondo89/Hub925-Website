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
  const [color, setColor] = useState('#009d94');

  return (
    <>
      <Container>
        <Menu>
          <Link
            style={{ color: color }}
            to="/the-studio"
            onClick={() => {
              setColor('#b042ff');
            }}
          >
            The Studio
          </Link>
          <Link
            style={{ color: color }}
            to="/the-recovery-lounge"
            onClick={() => {
              setColor('#0055b3');
            }}
          >
            The Recovery Lounge
          </Link>
          <Link
            style={{ color: color }}
            to="/"
            onClick={() => {
              setColor('#009d94');
            }}
          >
            Hub925 Fitness Facility
          </Link>
          <Link
            style={{ color: color }}
            to="/the-arena"
            onClick={() => {
              setColor('#00ffff');
            }}
          >
            The Arena
          </Link>
          <Link
            style={{ color: color }}
            to="/the-rejuvenation-spa"
            onClick={() => {
              setColor('#7ad7f0');
            }}
          >
            The Rejuvenation Spa
          </Link>
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
