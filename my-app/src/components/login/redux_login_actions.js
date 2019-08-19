export const LOGIN = 'LOGIN';
export const LOGOFF = 'LOGOFF';

export const a_login = (login, pwd_) => (
{
  type:LOGIN , user_name:login, pwd:pwd_ 
}
);

export const a_logoff = () => (
{
  type:LOGOFF  
}
);