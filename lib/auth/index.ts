import { sha256 } from 'js-sha256';
import { PASSWORD_HASH } from 'config/index';

export const validate = (password: string): boolean => {
  return sha256(password) === PASSWORD_HASH;
};

export const validateHash = (hash: string): boolean => {
  return hash === PASSWORD_HASH;
};
