import styled from 'styled-components';
import Title from './title'
import RedeButton from '../../RedeButton/RedeButton'

const CardHeader = styled.div`
  display:flex;
  justify-content: space-between;
  width: 100%;
  align-items:center;
`;

CardHeader.Title = Title;
CardHeader.Button = RedeButton;
export default CardHeader;   