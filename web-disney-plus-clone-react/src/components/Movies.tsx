import React from 'react';
import styled from 'styled-components';

function Movies() {
  return (
    <Container>
      <h4>Recommanded for you</h4>
      <Content>
        <Wrap>
          <img src='/images/hawkeye.webp' />
        </Wrap>
        <Wrap>
          <img src='/images/movie_2.webp' />
        </Wrap>
        <Wrap>
          <img src='/images/movie_3.webp' />
        </Wrap>
        <Wrap>
          <img src='/images/movie_4.jpeg' />
        </Wrap>
        <Wrap>
          <img src='/images/movie_5.jpeg' />
        </Wrap>
        <Wrap>
          <img src='/images/movie_6.webp' />
        </Wrap>
        <Wrap>
          <img src='/images/movie_7.webp' />
        </Wrap>
        <Wrap>
          <img src='/images/movie_8.webp' />
        </Wrap>
      </Content>
    </Container>
  );
}

export default Movies;

const Container = styled.div``;

const Content = styled.div`
  display: grid;
  grid-gap: 25px;
  grid-template-columns: repeat(4, minmax(0, 1fr));

  @media screen and (max-width: 768px) {
    grid-template-columns: none;
    grid-gap: 5px;
  }
`;

const Wrap = styled.div`
  border-radius: 10px;
  overflow: hidden;
  border: 3px solid rgba(249, 249, 249, 0.1);
  box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px,
    rgb(0 0 0 / 73%) 0px 16px 10px -10px;
  transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;

  img {
    width: 100%;
    height: 120px;
    @media screen and (max-width: 768px) {
      height: 375px;
    }
    object-fit: cover;
  }

  &:hover {
    transform: scale(1.05);
    border-color: rgba(249, 249, 249, 0.8);
    box-shadow: rgb(0 0 0 / 80%) 0px 40px 58px -16px,
      rgb(0 0 0 / 72%) 0px 30px 22px -10px;
  }
`;
