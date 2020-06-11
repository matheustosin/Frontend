import React from 'react';
import RedeButton from '../../../components/RedeButton/RedeButton';
import RedeTextField from '../../../components/RedeTextField/RedeTextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';


const Modal = ({
    open, handleClose, editFunction, mentoriaTitle
  }) => (
    <div>
        <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title">Edição de Mentoria</DialogTitle>
        <DialogContent>
            <DialogContentText>
                Insira o novo título da mentoria.
            </DialogContentText>
            <RedeTextField
                descricao="Título da mentoria"
                valor={mentoriaTitle}
            />
        </DialogContent>
        <DialogActions>
            <RedeButton descricao="Cancelar" onClick={handleClose} color="primary"/>
            <RedeButton descricao="Salvar" onClick={editFunction} color="primary"/>
        </DialogActions>
        </Dialog>
    </div>
  );

export default Modal;
