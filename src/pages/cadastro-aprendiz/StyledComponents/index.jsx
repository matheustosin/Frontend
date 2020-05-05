import styled from 'styled-components';
import React from 'react'

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

const Checkbox = props => (
  <input type="checkbox" {...props}/>
)

const RedeCheckbox = styled(Checkbox)`
  height: 25px;
  width: 25px;
  appearance: none;
  border: 3px solid #00273F;
  border-radius: 4px;
  cursor: pointer;
  text-align: center;

  &:before {
    content: '';
  }

   &:checked {
    &:after {
      content: '✔';
    }
  }
`

const Label = styled.label`
  font-size: 20px;
  color: #00273F;
`


Container.Image = Image;
Container.Label = Label;
Container.RedeCheckbox = RedeCheckbox;
Container.TextContainer = TextContainer;
Container.SeparatorWrapper = SeparatorWrapper;
export default Container;
