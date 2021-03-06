import React from 'react';
import styled from 'styled-components';

function Viewers() {
  return (
    <Container>
      <Wrap>
        {/* <img src='/images/disney.svg' /> */}
        <p>Disney</p>
      </Wrap>
      <Wrap>
        {/* <img src='/images/pixar.svg' /> */}
        <p>Pixar</p>
      </Wrap>
      <Wrap>
        {/* <img src='/images/marvel.svg' /> */}
        <p>Marvel</p>
      </Wrap>
      <Wrap>
        {/* <img src='/images/star_wars.svg' /> */}
        <p>Star Wars</p>
      </Wrap>
      <Wrap>
        {/* <img src='/images/natgeo.svg' /> */}
        <p>Nat Geo</p>
      </Wrap>
    </Container>
  );
}

export default Viewers;

const Container = styled.div`
  margin-top: 30px;
  padding: 30px 0 26px;
  display: grid;
  grid-gap: 25px;
  grid-template-columns: repeat(5, minmax(0, 1fr));
  @media screen and (max-width: 768px) {
    grid-template-columns: none;
    grid-gap: 5px;
  }
`;

const Wrap = styled.div`
  height: 55px;
  cursor: pointer;
  border-radius: 10px;
  border: 3px solid rgba(249, 249, 249, 0.1);
  box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px,
    rgb(0 0 0 / 73%) 0px 16px 10px -10px;
  transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;

  // @media screen and (max-width: 768px) {
  //   height: 375px;
  // }

  // img {
  //   // padding: 12px;
  //   border-radius: 8px;
  //   width: 100%;
  //   height: 100%;
  //   object-fit: cover;
  // }
  p {
    text-align: center;
    font-weight: 900;
    font-family: cursive;
  }

  &:hover {
    transform: scale(1.05);
    border-color: rgba(249, 249, 249, 0.8);
    box-shadow: rgb(0 0 0 / 80%) 0px 40px 58px -16px,
      rgb(0 0 0 / 72%) 0px 30px 22px -10px;
  }
`;
