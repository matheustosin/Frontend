import styled from 'styled-components';

const Container = styled.div`
  width: unset;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  flex-direction: column;
`;

const TextContainer = styled(Container)`
  flex-direction: row;
  flex-wrap: wrap;
  width: 100vw;
`;
const Image = styled.img`
    margin: 5vh;
`;

const SeparatorWrapper = styled.div`
  @media only screen and (max-width: 1200px) {
      display:none !important;
  }
`;

Container.Image = Image;
Container.TextContainer = TextContainer;
Container.SeparatorWrapper = SeparatorWrapper;
export default Container;
