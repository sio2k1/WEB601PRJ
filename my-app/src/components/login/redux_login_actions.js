export const LOGIN = 'LOGIN';

// export function a_login2(login, pwd_) {
//   return { type:TEST , user_name:login, pwd:pwd_  }
// }

export const a_login = (login, pwd_) => (
{
  type:LOGIN , user_name:login, pwd:pwd_ 
}
);