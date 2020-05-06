import styled from 'styled-components';

const Form = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  @media only screen and (max-width: 1000px) {
    flex-direction: column;
  }
`;

export default Form;
