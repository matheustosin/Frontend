import styled from 'styled-components';
import CardLogo from './card-logo';
import CardHeader from './card-header';
import CardDescription from './card-description';
import CardFooter from './card-footer';
import IconsWrapper from './icons-wrapper';
import CardContent from './card-content';
import SubTitle from './subtitle';
import TimeSlotWrapper from './timeslot-wrapper';
import RedeButton from '../../RedeButton/RedeButton';

const Container = styled.div`
    border: 3px solid #00273F;
    border-radius: 10px;
    opacity: 1;
    overflow: hidden;
    display: flex;
    width: 90%;
    min-height: 210px;
    height:auto;
    margin-bottom: 50px;
    flex-direction:row;
    justify-content:center;
    align-items:center;
    font-family : Roboto, sans-serif;
    @media screen and (max-width:1000px){
        flex-direction:column;
        width:85vw;
        min-height:105vh;
        height:auto;
        margin-bottom: 50px;
    }
    @media screen and (min-width:499px) and (max-width:1000px){
        min-height:105vh;
    }
    ${({ visible }) => !visible
     && `
            ${CardDescription}, ${CardHeader}, ${SubTitle}{
                display:none;
            }
           ${TimeSlotWrapper},${CardLogo}{
               visibility:hidden;
           }
           ${CardContent}{
               height:unset;
           }
           height:50px;
           min-height:50px;
           max-height:50px;
     `}
}
}
`;

export default Container;
