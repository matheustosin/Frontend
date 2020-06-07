import React from 'react';
import { string, func, bool } from 'prop-types';
import Container from './StyledComponents';
import visible from '../../assets/visibility-button.png';
import remove from '../../assets/rubbish-bin-delete-button.png';
import edition from '../../assets/create-new-pencil-button.png';
import notVisible from '../../assets/invisible-button.png';
import RedeTimeSlot from '../RedeTimeSlot/RedeTimeSlot';
import RedeIcon from '../RedeIcon/RedeIcon';
import CardDescription from './StyledComponents/card-description';
import CardHeader from './StyledComponents/card-header';
import CardLogo from './StyledComponents/card-logo';
import CardFooter from './StyledComponents/card-footer';
import CardContent from './StyledComponents/card-content';
import IconsWrapper from './StyledComponents/icons-wrapper';
import TimeSlotWrapper from './StyledComponents/timeslot-wrapper';
import MentorName from './StyledComponents/mentor-name';
import MentorImage from './StyledComponents/mentor-image';

import ICON from '../../assets/caminho.png';


const Card = ({
  title,
  description,
  image,
  visibleFunction,
  removeFunction,
  editFunction,
  isVisible,
  timeSlots,
  mentorias,
  mentorName,
  mentorImage,
}) => {
  console.log('TODO: TimeSlots: ', timeSlots);

  return (
    <Container>
      <CardLogo src={image} />
      <CardContent>
        <CardHeader>
          <CardHeader.Title>
            {title}
          </CardHeader.Title>
          <CardHeader.Button descricao="TODOS HORÁRIOS" onClick={() => { }} />
        </CardHeader>
        <CardDescription>
          {description}
        </CardDescription>
        <CardFooter>
          <CardFooter.SubTitle>
            Próximos horários
          </CardFooter.SubTitle>
          <CardFooter.Content>
            <TimeSlotWrapper>
              <RedeTimeSlot descricao="SEG - 12:00" />
              <RedeTimeSlot descricao="TER - 12:00" />
              <RedeTimeSlot descricao="QUA - 12:00" />
            </TimeSlotWrapper>
            <IconsWrapper>
              <CardHeader.Button descricao="TODOS HORÁRIOS" onClick={() => { }} />
              {
                !mentorias && (
                  <>
                    <RedeIcon imageUrl={remove} onClick={removeFunction} />
                    <RedeIcon
                      imageUrl={isVisible ? visible : notVisible}
                      onClick={visibleFunction}
                    />
                    <RedeIcon imageUrl={edition} onClick={editFunction} />
                  </>
                )
              }
              {
                mentorias && (
                  <>
                    <MentorName>{mentorName.split(" ").join("\n")}</MentorName>
                    <MentorImage src={mentorImage}/>
                  </>
                )
              }
            </IconsWrapper>
          </CardFooter.Content>
        </CardFooter>
      </CardContent>
    </Container>
  );
};

Card.propTypes = {
  description: string,
  title: string,
  isVisible: bool,
  visibleFunction: func,
  removeFunction: func,
  editFunction: func,
  mentorias: bool,
  mentorName: string,
};

Card.defaultProps = {
  description: '',
  title: '',
  isVisible: true,
  visibleFunction: null,
  removeFunction: null,
  editFunction: null,
  mentorias: false,
  mentorName: '',
};

export default Card;
