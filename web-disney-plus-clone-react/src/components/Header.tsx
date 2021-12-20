import React from 'react';
import styled from 'styled-components';

function Header() {
  return (
    <Nav>
      <Logo src='/images/disney-plus-logo.png' />
      <NavMenu>
        <a>
          <i className='fas fa-home'></i>
          <span>Home</span>
        </a>
        <a>
          <i className='fas fa-search'></i>
          <span>SEARCH</span>
        </a>
        <a>
          <i className='fas fa-plus'></i>
          <span>WHATCHLIST</span>
        </a>
        <a>
          <i className='fas fa-star'></i>
          <span>ORIGINALS</span>
        </a>
        <a>
          <i className='fas fa-film'></i>
          <span>MOVIES</span>
        </a>
        <a>
          <i className='fas fa-tv'></i>
          <span>SERIES</span>
        </a>
      </NavMenu>
      <UserImg src='/images/person.png' />
    </Nav>
  );
}

export default Header;

const Nav = styled.nav`
  height: 70px;
  background-color: #090b13;
  display: flex;
  align-items: center;
  padding: 0 36px;
`;

const Logo = styled.img`
  width: 80px;
`;

const NavMenu = styled.div`
  display: flex;
  flex: 1;
  margin-left: 25px;
  align-items: center;

  a {
    display: flex;
    align-items: center;
    padding: 0 12px;
    cursor: pointer;

    i,
    span {
      font-size: 13px;
      letter-spacing: 1.42px;
      position: relative;
    }

    span {
      &:after {
        content: '';
        height: 2px;
        position: absolute;
        right: 0;
        left: 0;
        bottom: -6px;
        background-color: white;
        opacity: 0;
        transform-origin: left center;
        transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
        transform: scaleX(0);
      }
    }

    &:hover {
      span:after {
        transform: scaleX(1);
        opacity: 1;
      }
    }
  }
`;

const UserImg = styled.img`
  width: 48px;
  height: 48px;
  border-radius: 50%;
  background-color: white;
  cursor: pointer;
`;
