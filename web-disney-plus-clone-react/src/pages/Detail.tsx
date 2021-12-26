import React from 'react';
import styled from 'styled-components';

function Detail() {
  return (
    <Container>
      <Background>
        <img src='/images/detail_3.jpeg' />
      </Background>
      <ImageTitle>
        <img src='images/luca.webp' />
      </ImageTitle>
      <Controls>
        <PlayButton>
          <i className='fas fa-play'></i>
          <span>PLAY</span>
        </PlayButton>
        <TrailerButton>
          <i className='fas fa-play'></i>
          <span>TRAILER</span>
        </TrailerButton>
        <AddButton>
          <i className='fas fa-plus'></i>
        </AddButton>
        <GroupWatchButton>
          <i className='fas fa-users'></i>
        </GroupWatchButton>
      </Controls>
      <SubTitle>
        Lorem ipsum dolor sit amet consectetur adipisicing elit
      </SubTitle>
      <Description>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Explicabo
        perferendis quod cupiditate similique repellat in provident aliquid
        error, autem natus et eius tempore ipsa vero dolorum cumque hic, porro
        rerum!
      </Description>
    </Container>
  );
}

export default Detail;

const Container = styled.div`
  position: relative;
  min-height: calc(100vh - 70px);
  padding: 0 calc(3.5vw + 5px);
`;

const Background = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: -1;
  opacity: 0.8;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const ImageTitle = styled.div`
  width: 35vw;
  min-width: 200px;
  height: 30vh;
  min-height: 170px;
  margin: 40px 0;

  img {
    // width: 100%;
    height: 100%;
    object-fit: contain;
  }
`;

const Controls = styled.div`
  display: flex;
  align-items: center;
`;
const PlayButton = styled.div`
  cursor: pointer;
  background-color: rgb(249, 249, 249);
  height: 56px;
  border-radius: 4px;
  align-items: center;
  font-size: 15px;
  display: flex;
  justify-content: center;
  min-width: 140px;
  width: fit-content;
  margin-right: 22px;
  padding: 0 24px;
  letter-spacing: 1.8px;
  text-transform: uppercase;

  i {
    padding-right: 5px;
    color: rgba(10, 10, 10, 0.8);
  }

  span {
    color: rgba(10, 10, 10, 0.8);
  }

  &:hover {
    background-color: rgb(198, 198, 198);
  }
`;
const TrailerButton = styled(PlayButton)`
  background-color: rgba(0, 0, 0, 0.3);
  border: 1px solid rgb(249, 249, 249);
  i,
  span {
    color: rgb(249, 249, 249);
  }
`;
const AddButton = styled.div`
  margin-right: 16px;
  width: 44px;
  height: 44px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 2px solid white;
  border-radius: 50%;
  background-color: rgba(0, 0, 0, 0.6);
  cursor: pointer;
  // font-size: 20px;

  i {
    color: rgb(24ç, 249, 249);
  }

  &:hover {
    background-color: rgb(198, 198, 198);
  }
`;
const GroupWatchButton = styled(AddButton)`
  background-color: rgb(0, 0, 0);
  font-size: 20px;
`;

const SubTitle = styled.div`
  color: rgb(249, 249, 249);
  font-size: 15px;
  min-height: 20px;
  margin-top: 26px;
`;

const Description = styled.div`
  line-height: 1.4;
  font-size: 20px;
  margin-top: 16px;
  color: rgb(249, 249, 249);
`;
