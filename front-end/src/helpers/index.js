import { verifyToken } from '../services/request';

export const setLocalStorage = (storages) => {
  storages.forEach((storage) => {
    localStorage.setItem(storage.name, JSON.stringify(storage.value));
  });
};

export const getLocalStorage = (storage) => {
  const item = localStorage.getItem(storage);
  if (item === null) return null;
  return JSON.parse(item);
};

export const isAuth = () => {
  const user = localStorage.getItem('user')
  if(!user) {
    return null;
  }

  const { payload } = verifyToken('/token', user.token);

  return payload.role;
}
