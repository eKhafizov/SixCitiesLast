

const API_KEY : string = 'HSncwu42dkz';

export const saveToken = (token: string) => {
  localStorage.setItem(API_KEY, token);
}
export const getToken = () => {
  const token = localStorage.getItem(API_KEY);
  return token?? '';
}
export const removeToken = () => {
  localStorage.removeItem(API_KEY);
}
