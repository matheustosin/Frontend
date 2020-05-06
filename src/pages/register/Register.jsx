import React, { PureComponent } from 'react';
import { Link, withRouter } from 'react-router-dom';
import teacher from '../../assets/teacher.png';
import interview from '../../assets/interview.png';

import Container from './StyledComponents';

import Header from '../../components/Header/Header';
import RedeButton from '../../components/RedeButton/RedeButton';
import RedeHorizontalSeparator from '../../components/RedeHorizontalSeparator/RedeHorizontalSeparator';

class Register extends PureComponent {
  render() {
    return (
      <Container>
        <Header />
        <Container.Title>COMO DESEJA SE CADASTRAR NA REDE?</Container.Title>
        <Container.Form>
          <Container.Option>
            <Container.Circle>
              <Container.Image src={teacher} />
            </Container.Circle>
            <Link to="/cadastro-mentor">
              <RedeButton descricao="CADASTRAR COMO MENTOR" />
            </Link>
          </Container.Option>

          <RedeHorizontalSeparator />

          <Container.Option>
            <Container.Circle>
              <Container.Image src={interview} />
            </Container.Circle>
            <Link to="/cadastro-aprendiz">
              <RedeButton descricao="CADASTRAR COMO APRENDIZ" />
            </Link>
          </Container.Option>
        </Container.Form>
      </Container>
    );
  }
}

export default withRouter(Register);
