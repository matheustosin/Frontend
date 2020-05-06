import styled from 'styled-components';

const Container = styled.div`
  border: 3px solid #00273f;
  border-radius: 10px;
  opacity: 1;
  overflow: hidden;
  display: flex;
  width: 755px;
  max-width: 755px;
  height: 165px;
  align-items: space-between;
  color: #00273f;
  @media screen and (max-width: 1000px) {
    width: 85vw;
  }
`;

export default Container;
