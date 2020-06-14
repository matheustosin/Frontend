import React from 'react';
import Container from './StyledComponents';
import RedeHorarioButton from '../RedeHorarioButton/RedeHorarioButton';

function RedeHorarioCard() {
  return (
    <Container>
        <Container.Details>
            <Container.Label>Data</Container.Label>
            <Container.Label>Hora</Container.Label>
        </Container.Details>
        <Container.Details>
            <Container.Hours>
                <RedeHorarioButton horario="22:45" onClick={() => console.log('click')} />
                <RedeHorarioButton horario="22:45" onClick={() => console.log('click')} />
                <RedeHorarioButton horario="22:45" onClick={() => console.log('click')} />
            </Container.Hours>
        </Container.Details>
        <Container.Details>
            <Container.Hours>
                <RedeHorarioButton horario="22:45" onClick={() => console.log('click')} />
                <RedeHorarioButton horario="22:45" onClick={() => console.log('click')} />
                <RedeHorarioButton horario="22:45" onClick={() => console.log('click')} />
                <RedeHorarioButton horario="22:45" onClick={() => console.log('click')} />
                <RedeHorarioButton horario="22:45" onClick={() => console.log('click')} />
            </Container.Hours>
        </Container.Details>
        <Container.Details>
            <Container.Hours>
                <RedeHorarioButton horario="22:45" onClick={() => console.log('click')} />
                <RedeHorarioButton horario="22:45" onClick={() => console.log('click')} />
                <RedeHorarioButton horario="22:45" onClick={() => console.log('click')} />
                <RedeHorarioButton horario="22:45" onClick={() => console.log('click')} />
            </Container.Hours>
        </Container.Details>
    </Container>
  );
}

export default RedeHorarioCard;
