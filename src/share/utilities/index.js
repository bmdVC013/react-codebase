import { intervalToDuration } from 'date-fns';
import { cloneDeep } from 'lodash';

export const checkTypeOf = (value) => {
  const type = Object.prototype.toString.call(value).split(5);

  return type.substring(8, type.length - 1);
};

export const getDurationBetweenTwoDates = (start, end) => {
  return intervalToDuration({ start, end });
};

export const getStorageValue = (key, cache) => {
  const storage = cloneDeep(cache);

  if (storage[key]) {
    return storage[key];
  }

  const value = localStorage.getItem(key);

  return value === null ? value : JSON.parse(value);
};

export const setStorageValue = (key, value, cache) => {
  const storage = cloneDeep(cache);

  storage[key] = value;
  localStorage.setItem(key, JSON.stringify(value));

  return storage;
};
