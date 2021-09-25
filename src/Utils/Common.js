import Cookies from 'universal-cookie';

const cookies = new Cookies();

// return the user data from the session storage
export const getUser = () => {
  const userStr = cookies.get('user');
  if (userStr) return userStr;
  else return null;
}

// return the token from the session storage
export const getToken = () => {
  return cookies.get('token') || null;
}

// remove the token and user from the session storage
export const removeUserSession = () => {
  cookies.remove('token');
  cookies.remove('user');
}

// set the token and user from the session storage
export const setUserSession = (token, user) => {
	cookies.set('token', token, { path: '/' });
	cookies.set('user', JSON.stringify(user), { path: '/' });
}
