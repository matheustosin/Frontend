import { userTypes } from './userType.constants';

export default function pushIfNecessary(userType = '', callBack) {
  if (typeof callBack !== 'function') return '';
  switch (userType) {
    case userTypes.ADMINISTRADOR:
      callBack('/administrador');
      break;
    case userTypes.MENTOR:
      callBack('/mentor');
      break;
    case userTypes.MENTORADO:
      callBack('/mentorado');
      break;
    case userTypes.MENTOREMENTORADO:
      callBack(`/${sessionStorage.getItem('homeEscolhida') || 'mentor'}`);
      break;
    default:
      return '';
  }
  return '';
}
