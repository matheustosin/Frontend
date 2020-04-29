import styled from 'styled-components'

const Container = styled.div`
  width: ${props => props.width || "unset"};
`;

const TextFieldContainer = styled.div`
  display: flex;
  flex-direction:row;
  justify-content: space-evenly;
  align-items: center;
`;

Container.TextFieldContainer = TextFieldContainer;
export default Container;