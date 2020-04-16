import React from "react";
import { string, func } from "prop-types";
import TextField from "./StyledComponents";

const RedeTextField = ({ descricao, tipo, valor, onChange }) => (
  <TextField>
    <TextField.Label>{descricao}</TextField.Label>
    <TextField.Input type={tipo} value={valor} onChange={onChange} />
  </TextField>
);

RedeTextField.propTypes = {
  descricao: string,
  tipo: string,
  valor: string.isRequired,
  onChange: func,
};

RedeTextField.defaultProps = {
  descricao: "",
  tipo: "",
  onChange: () => {},
};

export default RedeTextField;
