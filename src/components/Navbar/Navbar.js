import React, { useState } from 'react';
import styled from 'styled-components';

import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';

function Navbar() {
  const [menuStatus, setMenuStatus] = useState(false);

  return (
    <>
      <Container>
        <Menu>
          <a href="#">The Studio</a>
          <a href="#">The Recovery Lounge</a>
          <a href="#">Hub925 Fitness Facility</a>
          <a href="#">The Arena</a>
          <a href="#">The Rejuvenation Spa</a>
        </Menu>
        <RightMenu>
          <CustomMenu onClick={() => setMenuStatus(true)} />
        </RightMenu>

        <MobileMenu show={menuStatus}>
          <CloseMenuWrapper>
            <CloseMenu onClick={() => setMenuStatus(false)} />
          </CloseMenuWrapper>
          <li>
            <a href="#">The Studio</a>
          </li>
          <li>
            <a href="#">The Recovery Lounge</a>
          </li>
          <li>
            <a href="#">Hub925 Fitness Facility</a>
          </li>
          <li>
            <a href="#">The Arena</a>
          </li>
          <li>
            <a href="#">The Rejuvenation Spa</a>
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
    height: 10vh;
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
