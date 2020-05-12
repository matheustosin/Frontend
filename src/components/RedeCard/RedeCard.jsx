import React from 'react';
import styled from 'styled-components';
import Container from './StyledComponents';
import { string, func, bool } from 'prop-types';
import visibility from '../../assets/visibility-button.png';
import remove from '../../assets/rubbish-bin-delete-button.png';
import edition from '../../assets/create-new-pencil-button.png';
import RedeTimeSlot from '../RedeTimeSlot/RedeTimeSlot';
import RedeIcon from '../RedeIcon/RedeIcon';
import CardDescription from './StyledComponents/card-description';
import CardHeader from './StyledComponents/card-header'
import CardLogo from './StyledComponents/card-logo'
import CardFooter from './StyledComponents/card-footer'
import CardContent from './StyledComponents/card-content';
const Card = ({
  title, description, image
}) => (
    <Container>
      <CardLogo src={image} />
      <CardContent>
        <CardHeader>
          <CardHeader.Title>
            {title}
          </CardHeader.Title>
          <CardHeader.Button descricao="VER TODOS OS HORÁRIOS" /*claro = 'true'*/ onClick={() => { alert('test') }} />
        </CardHeader>
        <CardDescription>
          {description}
        </CardDescription>
        <CardFooter>
          <CardFooter.SubTitle>
            Próximos horários
          </CardFooter.SubTitle>
          <CardFooter.Content>
            <div>
              <RedeTimeSlot descricao="SEG - 18:00" deselecionado="true" />
              <RedeTimeSlot descricao="SEG - 18:00" selecionado="true" />
            </div>
            <div>
              <RedeIcon imageUrl={remove} />
              <RedeIcon imageUrl={visibility} />
              <RedeIcon imageUrl={edition} />
            </div>
          </CardFooter.Content>
        </CardFooter>
      </CardContent>
    </Container>
  );

Card.propTypes = {
  descricao: string,
  title: string,
};

Card.defaultProps = {
  descricao: '',
  title: '',
};

export default Card;