import styled from 'styled-components';
import InformationName from './information-name'
import RedeIcon from '../../RedeIcon/RedeIcon'
const Information = styled.div`
width:100%;
margin-left: 26px;
display:flex;
flex-direction:row;
align-items:center;
margin-top:5px;
& > img{
  width:32px;
  height:32px;
  margin-bottom: 10px;
  margin-left: 18px;
  margin-right: 6px;
}
`;

Information.Name = InformationName;
Information.Icon = RedeIcon
export default Information;