import React, { useEffect, useState } from 'react';
import { Menu, MenuItem } from '@material-ui/core';
import { useHistory } from 'react-router';
import logo from '../../assets/logo2.png';
import { profile as getUser } from '../../services/user';
import Container from './StyledComponents';
import { urlFiles } from '../../services/http';
import { userTypes } from '../../utils/userType.constants';
import imageDefault from '../../assets/account.png';

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
    let to = '';
    switch (profile.userType) {
      case userTypes.ADMINISTRADOR:
      case userTypes.MENTOREMENTORADO:
        to = sessionStorage.getItem('homeEscolhida')
          ? `/cadastro-${sessionStorage.getItem('homeEscolhida')}`
          : '/cadastro-mentor';
        break;
      case userTypes.MENTOR:
        to = '/cadastro-mentor';
        break;
      case userTypes.MENTORADO:
        to = '/cadastro-mentorado';
        break;
      default:
        return;
    }
    history.push(to);
    handleMenuClose();
  };

  const handleLogoClick = () => {
    let to = '/';
    if (!profile || !profile.userType) return history.push(to);
    switch (profile.userType) {
      case userTypes.ADMINISTRADOR:
        to = '/administrador';
        break;
      case userTypes.MENTOREMENTORADO:
        to = sessionStorage.getItem('homeEscolhida')
          ? `/${sessionStorage.getItem('homeEscolhida')}`
          : '/mentor';
        break;
      case userTypes.MENTOR:
        to = '/mentor';
        break;
      case userTypes.MENTORADO:
        to = '/mentorado';
        break;
      default:
        return '';
    }
    return history.push(to);
  };

  const escolherHome = (path) => {
    sessionStorage.setItem('homeEscolhida', path);
    history.push(`/${path}`);
    handleMenuClose();
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
              src={profile && profile.image ? `${urlFiles}/${profile.image}` : imageDefault}
            />
          ) : (<div />)
        }

      </Container>
      <Container.Clearfix />
      {
        profile && (
          <Menu
            id="user-menu"
            className="header-menu"
            anchorEl={anchorEl}
            keepMounted
            open={Boolean(anchorEl)}
            onClose={handleMenuClose}
          >
            <MenuItem onClick={() => { }} disabled>{profile ? profile.name : ''}</MenuItem>
            {profile.userType === userTypes.ADMINISTRADOR && props && props.location && props.location.pathname !== ('/administrador')
              && (<MenuItem onClick={() => escolherHome('administrador')}>Home Administrador</MenuItem>)}
            {(profile.userType === userTypes.MENTOREMENTORADO
              || profile.userType === userTypes.ADMINISTRADOR)
              && (
                sessionStorage.getItem('homeEscolhida')
                && sessionStorage.getItem('homeEscolhida') !== 'mentor'
              )
              && (
                <MenuItem onClick={() => escolherHome('mentor')}>Home Mentor</MenuItem>
              )}
            {(profile.userType === userTypes.MENTOREMENTORADO
              || profile.userType === userTypes.ADMINISTRADOR)
              && (
                !sessionStorage.getItem('homeEscolhida')
                || sessionStorage.getItem('homeEscolhida') !== 'mentorado'
              )
              && (
                <MenuItem onClick={() => escolherHome('mentorado')}>Home Mentorado</MenuItem>
              )}
            <MenuItem onClick={handleEditProfile}>Editar perfil</MenuItem>
            <MenuItem onClick={handleLogOut}>Sair</MenuItem>
          </Menu>

        )
      }
    </>
  );
};

RedeHeader.propTypes = {
};

RedeHeader.defaultProps = {
};

export default RedeHeader;
