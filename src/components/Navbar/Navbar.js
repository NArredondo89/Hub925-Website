import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import styled from 'styled-components';

import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';

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

const Container = styled.div`
  min-height: 80px;
  position: fixed;
  display: flex;
  align-items: end;
  justify-content: space-between;
  padding: 10px 20px;
  top: 0;
  left: 0;
  right: 0;
  z-index: -1;
  background-color: black;
`;

const Menu = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex: 1;

  a {
    color: #009d94;
    font-weight: 600;
    text-decoration: none;
    text-transform: uppercase;
    flex-wrap: nowrap;
  }

  @media (max-width: 900px) {
    display: none;
  }
`;

const RightMenu = styled.div`
  display: flex;
  align-items: center;

  a {
    font-weight: 600;
    text-transform: uppercase;
    margin-right: 10px;
    flex-wrap: nowrap;
  }
`;

const CustomMenu = styled(MenuIcon)`
  color: transparent;
  cursor: pointer;

  @media (max-width: 900px) {
    color: white;
  }
`;

const MobileMenu = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  right: 0;
  background: black;
  width: 300px;
  z-index: 16;
  list-style: none;
  padding: 20px;
  display: flex;
  flex-direction: column;
  text-align: start;
  transform: ${(props) => (props.show ? 'translateX(0)' : 'translateX(100%)')};
  transition: transform 0.5s ease-in-out;
  li {
    padding: 15px 0;
    border-bottom: 1px solid rgba(0, 0, 0, 0.2);
    a {
      color: #009d94;
      font-weight: 600;
    }
  }
`;

const CloseMenu = styled(CloseIcon)`
  cursor: pointer;
  color: white;
`;

const CloseMenuWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
`;
