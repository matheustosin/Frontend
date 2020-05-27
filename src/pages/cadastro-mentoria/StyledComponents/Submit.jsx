import styled from 'styled-components';

const Submit = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: 15px;

  @media only screen and (max-width: 1024px) {
    flex-direction: column;
    margin: 10px 0;
  }
`;

export default Submit;
