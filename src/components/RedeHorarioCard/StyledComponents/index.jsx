import styled from 'styled-components';
import Color from '../../../utils/colors.constants';

const Container = styled.div`
    border: 3px solid ${Color.AZUL};
    border-radius: 10px;
    opacity: 1;
    overflow: hidden;
    display: flex;
    width: 90%;
    min-height: 210px;
    height:auto;
    margin-bottom: 50px;
    flex-direction:column;
    justify-content:center;
    align-items:center;
    font-family : Roboto, sans-serif;
    @media screen and (max-width:1000px){
        flex-direction:column;
        width:85vw;
        height:auto;

    }
    @media screen and (min-width:499px) and (max-width:1000px){
        height:auto;
        padding-bottom:10px;

    }
}
}
`;

const Label = styled.h2`
    margin: 0;
    font-size: 1.2em;
    width: 35%;
    align-self: center;

`;

const Details = styled.div`
    width: 90%;
    min-width: 400px;
    display:flex;
    margin-top: 5px;
    padding-bottom: 2px;
    justify-content: space-evenly;
    border-bottom: 2px solid ${Color.AZUL_CLARO};
`;

const Hours = styled.div`
    width: 80%;
    display:flex;

    > button{
        margin-left: 5px;
    }
`;

Container.Details = Details;
Container.Hours = Hours;
Container.Label = Label;

export default Container;
