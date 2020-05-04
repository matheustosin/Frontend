import styled from 'styled-components';

const Submit = styled.div`
  display: flex;
  margin: 0 400px;
  align-items: center;
  justify-content: space-around;

  @media only screen and (max-width: 1000px) {
    flex-direction: column;
    margin: 10px 0;
  }
`;

export default Submit;
