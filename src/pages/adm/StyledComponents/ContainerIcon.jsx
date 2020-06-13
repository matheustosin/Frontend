import styled from 'styled-components';

const ContainerIcon = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 10px;
  .icon {
    padding: 0px;
    margin-bottom: 50px;
    border-radius: 50%;
    transition: color 0.2s;

    &:hover {
      cursor: pointer;
      color: #000;
    }
  }
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
