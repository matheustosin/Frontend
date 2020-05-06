import React from 'react';
import { number } from 'prop-types';
import Container from './StyledComponents';

const RedeHorizontalSeparator = ({ size }) => (
  <Container>
    <Container.Separator size={size} />
  </Container>
);

RedeHorizontalSeparator.propTypes = {
  size: number,
};

RedeHorizontalSeparator.defaultProps = {
  size: 400,
};

export default RedeHorizontalSeparator;
