import styled from 'styled-components';

const ContainerIcon = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 50px;

  div {
    box-sizing: border-box;
    padding: 10px;
    /* background: #d3d3; */
  }

  @media only screen and (max-width: 768px) {
    width: 100%;
    padding: 0px;
  }
`;

export default ContainerIcon;
