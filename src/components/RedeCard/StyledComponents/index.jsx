import styled from 'styled-components';

const Container = styled.div`
  border: 3px solid #00273f;
  border-radius: 10px;
  opacity: 1;
  overflow: hidden;
  display: flex;
  width: 1000px;
  height: 210px;
  margin-bottom: 50px;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  @media screen and (max-width: 1000px) {
    flex-direction: column;
    width: 85vw;
    height: 80vh;
  }
`;

export default Container;
