import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const NavBar = styled.div`
  display: flex;
  padding: 5px;
  justify-content: flex-end;
  font-family: 'Montserrat', sans-serif;
  background: #c7f1e2;
`;
const NavLink = styled(Link)`
  padding: 3%;
  text-decoration: none;
  font-size: 1.3em;
  color: black;
  :hover {
    color: #787d7b;
  }
`;
const Logo = styled.div`
  padding: 3%;
  text-decoration: none;
  font-size: 1.3em;
  color: black;
  margin-left: 5%;
`;

class Navbar extends React.Component {
  render() {
    return (
      <NavBar>
        <Logo>DMI</Logo>
        <NavLink to="/new" href="/new">
          Add
        </NavLink>
        <NavLink to="/all" href="/all">
          View List
        </NavLink>
      </NavBar>
    );
  }
}

export default Navbar;
