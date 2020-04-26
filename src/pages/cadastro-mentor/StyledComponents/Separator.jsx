import styled from 'styled-components';

const Separator = styled.div`
@media (min-width: 1200px) {
    height: 400px;
    border-left: 6px solid;
    border-radius: 5px;
    color: #97c0e2;
    margin-left: 75px;
    margin-right: 75px;
    margin-top: 25px;
    margin-bottom: 25px;
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
