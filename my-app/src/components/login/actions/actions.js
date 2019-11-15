/*Redux actions, defined for login process */

export const LOGIN = 'LOGIN';
export const LOGOFF = 'LOGOFF';

export const a_login = (login, pwd_) => ( //login action
  {
    type:LOGIN , user_name:login, pwd:pwd_ 
  }
);

export const a_logoff = () => ( //logoff action
  {
    type:LOGOFF  
  }
);