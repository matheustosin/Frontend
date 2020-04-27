import styled from 'styled-components';

const Separator = styled.div`
@media (min-width: 1200px) {
    height: 300px;
    color: #97c0e2;
    margin-left: 50%;
    margin-top: 5px;
    margin-bottom: 25px;
    width: 0px;
    border: 4px solid #97C0E2;
    border-radius: 5vw;
    opacity: 1;
    
}
@media (min-width: 768px) and (max-width: 1199px) {
    height: 0px;
    margin-left: 700px;
    margin-top: 50px;
}
@media (max-width: 767px) {
    height: 50px;
    margin-left: 75px;
    margin-right: 75px;
}
`;

export default Separator;
