import styled from 'styled-components';
import InformationName from './information-name'
import RedeIcon from '../../RedeIcon/RedeIcon';

const Information = styled.div`
margin-left: 15px;
display:flex;
flex-direction:row;
align-items:center;
margin-top:12px;
img{
  width:32px;
  height:32px;
  
}
@media screen and (max-width: 1000px) {
  margin-left: 0;
}
`;

Information.Name = InformationName;
Information.Icon = RedeIcon
export default Information;