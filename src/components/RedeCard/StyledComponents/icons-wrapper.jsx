import styled from 'styled-components';

const IconsWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-self: flex-end;
  width: 50%;
  button {
    display: none;
  }
  @media screen and (max-width: 1000px) and (min-width: 500px) {
    button {
      display: inline-block;
    }
    width: 100%;
    align-items: center;
  }
  @media screen and (max-width: 499px) {
    flex-direction: row;
    align-items: center;
    button {
      display: inline-block;
      align-items: center;
    }
    div {
      display: flex;
      width: 100%;
      justify-content: center;
    }
    width: 100%;
  }
`;

export default IconsWrapper;
