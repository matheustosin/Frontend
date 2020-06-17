import React from 'react';
import { string, func, bool } from 'prop-types';
import Container from './StyledComponents';
import visible from '../../assets/visibility-button.png';
import remove from '../../assets/rubbish-bin-delete-button.png';
import edition from '../../assets/create-new-pencil-button.png';
import notVisible from '../../assets/invisible-button.png';
//  import RedeTimeSlot from '../RedeTimeSlot/RedeTimeSlot';
import RedeButton from '../RedeButton/RedeButton';
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
import MentorContent from './StyledComponents/mentor-content';
//  import RedeMarcarMentoria from '../RedeMarcarMentoria/RedeMarcarMentoria';

const Card = ({
  title,
  description,
  image,
  onClickSchedule,
  onClickVisible,
  onClickRemove,
  onClickEdit,
  isVisible,
  timeSlots,
  mentorias,
  mentorName,
  mentorImage,
}) => {
  const adjustSizeDescription = () => ((description.length >= 114) ? `${description.substr(0, 111)}...` : description);

  return (
    <Container>
      <CardLogo src={image} />
      <CardContent>
        <CardHeader>
          <CardHeader.Title>
            {title}
          </CardHeader.Title>
          { !mentorias && <RedeButton claro descricao="TODOS HORÁRIOS" onClick={onClickSchedule} /> }
        </CardHeader>
        <CardDescription>
          {adjustSizeDescription(description)}
        </CardDescription>
        <CardFooter>
          <CardFooter.SubTitle>
            Próximos horários
          </CardFooter.SubTitle>
          <CardFooter.Content>
            <TimeSlotWrapper>
              {
                timeSlots
              }
            </TimeSlotWrapper>
            <IconsWrapper>
              { !mentorias && <RedeButton claro descricao="TODOS HORÁRIOS" onClick={onClickSchedule} /> }
              {
                !mentorias && (
                  <>
                    <RedeIcon imageUrl={remove} onClick={onClickRemove} />
                    <RedeIcon
                      imageUrl={isVisible ? visible : notVisible}
                      onClick={onClickVisible}
                    />
                    <RedeIcon imageUrl={edition} onClick={onClickEdit} />
                  </>
                )
              }
              {
                mentorias && (
                  <MentorContent>
                    <MentorImage src={mentorImage} />
                    <MentorName>{mentorName.split(' ').shift()}</MentorName>
                  </MentorContent>
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
  onClickSchedule: func,
  onClickVisible: func,
  onClickRemove: func,
  onClickEdit: func,
  mentorias: bool,
  mentorName: string,
};

Card.defaultProps = {
  description: '',
  title: '',
  isVisible: true,
  onClickSchedule: null,
  onClickVisible: null,
  onClickRemove: null,
  onClickEdit: null,
  mentorias: false,
  mentorName: '',
};

export default Card;
