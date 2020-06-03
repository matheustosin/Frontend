import React, { useEffect, useState } from 'react';
import { Menu, MenuItem } from '@material-ui/core';
import { useHistory } from 'react-router';
import logo from '../../assets/logo2.png';
import { profile as getUser } from '../../services/user';
import Container from './StyledComponents';
import { urlFiles } from '../../services/http';
import standartPhoto from '../../assets/account.png';

// const getTitle = () => sessionStorage.getItem('headerTitle');
const excludedPaths = ['/', '/register', '/cadastro-mentor', '/cadastro-mentorado'];

const RedeHeader = (props) => {
  const [tkn, setTkn] = useState(null);
  const [profile, setProfile] = useState();
  const [anchorEl, setAnchorEl] = useState(null);
  const [title, setTitle] = useState('');
  const history = useHistory();

  const logOut = () => {
    sessionStorage.removeItem('token');
    setProfile(null);
    history.push('/');
  };

  useEffect(() => { // ComponentDidMount
    setTitle(''); // TODO: Tirar esse setTitle();
    const tknValue = sessionStorage.getItem('token');
    if (!tknValue && excludedPaths.indexOf(props.location.pathname) === -1) {
      history.push('/');
    }
  }, []);

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

  const handleEditProfile = () => {
    sessionStorage.setItem('oldProfile', JSON.stringify(profile));
    history.push((profile.userType === 1) ? '/cadastro-mentor' : '/cadastro-mentorado');
    handleMenuClose();
  };

  const handleLogoClick = () => {
    let to = '/';
    if (profile) {
      to = (profile.userType === 1) ? '/Mentor' : 'Mentorado';
    }
    history.push(to);
  };

  return (
    <>
      <Container>
        <Container.Logo src={logo} onClick={handleLogoClick} />
        <Container.Title>{title}</Container.Title>
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
        <MenuItem onClick={() => { }} disabled>{profile ? profile.name : ''}</MenuItem>
        <MenuItem onClick={handleEditProfile}>Editar perfil</MenuItem>
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
