import React from 'react';
import styled from 'styled-components';
import ImageSlider from './ImageSlider';

function Home() {
  return (
    <Container>
      <ImageSlider />
    </Container>
  );
}

export default Home;

const Container = styled.main`
  min-height: calc(100vh - 70px);
  padding: 0 calc(3.5vw + 5px);
  background-color: rgb(26, 29, 41);
  overflow-x: hidden;
`;
