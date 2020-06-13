import styled from 'styled-components';
import UserName from './user-name'
const UserInformations = styled.div`
  display:flex;
  flex-direction:column;
  height:100%;
  width:100%;
  justify-content:Center;
  self-align:center;
  margin-left: 15px;
  @media screen and (max-width: 1000px) {
    align-items:Center;
    margin:0;
  }
`;

UserInformations.Name = UserName;
export default UserInformations;