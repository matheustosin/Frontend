import React, { useState } from 'react';
import { string, func, bool } from 'prop-types';
import { Dialog } from '@material-ui/core';
import './RedeMarcarMentoria.css';
import plus from '../../assets/plus.png';
import RedeTextArea from '../RedeTextArea/RedeTextArea';

const RedeButton = ({
  image, title, userImage, userName, date, hour, onConfirm, opened, onClose,
  // descricao, onClick, desabilitado, cancelar, claro, loading,
}) => {
  const [descricao, setDescricao] = useState('');
  const [tipoMentoria, setTipoMentoria] = useState('');
  return (
    <Dialog open={opened} onClose={onClose} className="rede-marcar-mentoria">
      <div className="content">
        <div className="close-icon" onClick={onClose}>
          <img src={plus} alt="fechar" />
        </div>
        <div className="bloco info">
          <div className="foto-mentoria">
            <img src={image} alt="mentoria" />
          </div>
          <div className="informacao">
            <div className="titulo">
              {title}
            </div>
            <div className="mentor">
              <div className="mentor-foto">
                <img src={userImage} alt={userName} />
              </div>
              <div className="mentor-nome">{userName}</div>
            </div>
            <div className="data-hora">
              <div className="data">{date}</div>
              -
              <div className="hora">{hour}</div>
            </div>
          </div>
        </div>
        <div className="subtitulo">Descrição resumida do projeto:</div>
        <div className="bloco descricao">
          <RedeTextArea
            valor={descricao}
            onChange={(evt) => setDescricao(evt.target.value)}
          />
        </div>

      </div>
    </Dialog>
  );
};

RedeButton.propTypes = {
  opened: bool.isRequired,
  onClose: func.isRequired,
  image: string,
  title: string,
  userImage: string,
  userName: string,
  date: string,
  hour: string,
  onConfirm: func,
};

RedeButton.defaultProps = {
  image: '',
  title: '',
  userImage: '',
  userName: '',
  date: '',
  hour: '',
  onConfirm: () => { },
};

export default RedeButton;

// <Button
//   onClick={onClick}
//   disabled={desabilitado || loading}
//   cancelar={cancelar}
//   claro={claro}
//   loading={loading}
// >
//   {loading && (
//   <>
//     <RefreshIcon />
//   </>
//   )}
//   {descricao}
// </Button>
