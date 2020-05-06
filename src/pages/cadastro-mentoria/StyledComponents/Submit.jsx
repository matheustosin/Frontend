import styled from 'styled-components';

const Submit = styled.div`
  display: flex;
  width: 40%;
  margin: 0 32%;
  align-items: center;
  justify-content: space-around;

  @media only screen and (max-width: 1000px) {
    flex-direction: column;
    margin: 10px 0;
  }
`;

export default Submit;
