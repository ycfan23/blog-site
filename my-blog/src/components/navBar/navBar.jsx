import React from 'react';
import { LinkStyled } from './navBar.styles';

const NavBar = () => {
  return (
    <div>
      <LinkStyled to='/'>Home</LinkStyled>
      <LinkStyled to='/articles'>Articles</LinkStyled>
      <LinkStyled to='/about'>About</LinkStyled>
      <LinkStyled to='/signupform'>Signup Form</LinkStyled>
    </div>
  )
}

export default NavBar;
