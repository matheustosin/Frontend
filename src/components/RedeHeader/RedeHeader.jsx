import React, { useEffect, useState } from 'react';
import { Menu, MenuItem } from '@material-ui/core';
import { useHistory } from 'react-router';
import logo from '../../assets/logo2.png';
import { profile as getUser } from '../../services/user';
import Container from './StyledComponents';
import { urlFiles } from '../../services/http';
import standartPhoto from '../../assets/account.png';

const RedeHeader = () => {
  const [tkn, setTkn] = useState(null);
  const [profile, setProfile] = useState();
  const [anchorEl, setAnchorEl] = useState(null);
  const history = useHistory();
  const logOut = () => {
    sessionStorage.removeItem('token');
    setProfile(null);
    history.push('/');
  };

  useEffect(() => { // ComponentDidUpdate
    const tknValue = sessionStorage.getItem('token');
    if (tknValue !== tkn) {
      setTkn(tknValue);
    }
  });

  useEffect(() => { // Ao Mudar o tkn
    if (!tkn) return;
    getUser({ headers: { Authorization: `Bearer ${tkn}` } }).then((resp) => {
      console.log('results: ', resp);
      setProfile(resp.data);
    }).catch((erro) => {
      console.error(erro);
      logOut();
    });
  }, [tkn]);

  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const handleLogOut = () => {
    sessionStorage.removeItem('token');
    logOut();
    handleMenuClose();
  };

  return (
    <>
      <Container>
        <Container.Logo src={logo} />
        {
          profile ? (
            <Container.ImgProfile
              onClick={handleProfileMenuOpen}
              src={profile ? `${urlFiles}/${profile.image}` : standartPhoto}
            />
          ) : (<div />)
        }

      </Container>
      <Container.Clearfix />
      <Menu
        id="user-menu"
        className="header-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleMenuClose}
      >
        <MenuItem onClick={handleMenuClose} disabled>{profile ? profile.name : ''}</MenuItem>
        <MenuItem onClick={handleLogOut}>Sair</MenuItem>
      </Menu>
    </>
  );
};

RedeHeader.propTypes = {
};

RedeHeader.defaultProps = {
};

export default RedeHeader;
