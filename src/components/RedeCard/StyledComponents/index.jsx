import styled from 'styled-components';
import CardLogo from './card-logo';
import CardHeader from './card-header';
import CardDescription from './card-description';
import CardContent from './card-content';
import SubTitle from './subtitle';
import TimeSlotWrapper from './timeslot-wrapper';

const Container = styled.div`
    border: 3px solid #00273F;
    border-radius: 10px;
    opacity: 1;
    overflow: hidden;
    display: flex;
    width: 1000px;
    min-height: 210px;
    height:auto;
    margin-bottom: 50px;
    flex-direction:row;
    justify-content:center;
    align-items:center;
    font-family : Roboto, sans-serif;
    @media screen and (max-width:500px){
        flex-direction:column;
        width:85vw;
        min-height:80vh;
        height:auto;
        margin-bottom: 0px;
    }
}
}
`;

export default Container;
