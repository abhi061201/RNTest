import {MMKV} from 'react-native-mmkv';
import {Storage} from 'redux-persist';

const storage = new MMKV();

export const reduxStorage: Storage = {
  setItem(key, value, ...args) {
    storage.set(key, value);
    return Promise.resolve(true);
  },

  getItem(key, ...args) {
    const value = storage.getString(key);
    return Promise.resolve(value);
  },
  removeItem(key, ...args) {
    storage.delete(key);
    return Promise.resolve();
  },
};
