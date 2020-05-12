import styled from 'styled-components';

const CardContent = styled.div`
display:flex;
width: 60%;
padding: 20px;
padding-top: 10px;
margin-bottom: 10px;
flex-direction:column;
font-weight: 600;
color:#00273F;
@media screen and (max-width:1000px){
  width:90%;
  padding:20px;
  margin-bottom:20px;
}
`
export default CardContent;   