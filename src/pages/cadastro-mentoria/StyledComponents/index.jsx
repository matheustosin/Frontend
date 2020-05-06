import styled from 'styled-components';

import Form from './Form';
import Title from './Title';
import Options from './Options';
import Submit from './Submit';

const Container = styled.div`
  margin: 0;
  width: 100%;
`;

Container.Form = Form;
Container.Title = Title;
Container.Options = Options;
Container.Submit = Submit;

export default Container;
