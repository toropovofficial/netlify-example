/* eslint-disable consistent-return */
/* eslint-disable no-prototype-builtins */
/* eslint-disable no-restricted-syntax */
/* eslint-disable no-continue */
import { IRegistartionFields } from '../pages/interfaces/index';
import validation from './validation';

export function initEventSubmit(children: any, isLogin?: string) {
  let fields: any = {};
  if (isLogin === 'login') {
    fields = {
      login: '',
      password: '',
    };
  }

  if (isLogin === 'password') {
    fields = {
      oldPassword: '',
      newPassword: '',
    };
  }

  if (isLogin === 'reg') {
    fields = {
      first_name: '',
      second_name: '',
      login: '',
      email: '',
      password: '',
      phone: '',
    };
  }

  if (isLogin === 'profile') {
    fields = {
      email: '',
      login: '',
      first_name: '',
      second_name: '',
      display_name: '',
      phone: '',
    };
  }

  if (!children) {
    return;
  }

  Object.keys(children).forEach((key) => {
    const input = children[key].element.querySelector('input');
    if (input && fields[key as keyof IRegistartionFields] !== undefined) {
      fields[key as keyof IRegistartionFields] = input.value;
    }
  });

  const isValid = Object.keys(fields).every((item) => {
    const value = fields[item as keyof IRegistartionFields] || '';
    return validation(value, item)?.status;
  });

  return { fields, isValid };
}

type PlainObject<T = any> = {
  [k in string]: T;
};

function isPlainObject(value: unknown): value is PlainObject {
  return (
    typeof value === 'object'
    && value !== null
    && value.constructor === Object
    && Object.prototype.toString.call(value) === '[object Object]'
  );
}

function isArray(value: unknown): value is [] {
  return Array.isArray(value);
}

function isArrayOrObject(value: unknown): value is [] | PlainObject {
  return isPlainObject(value) || isArray(value);
}

export function isEqual(lhs: PlainObject, rhs: PlainObject) {
  if (Object.keys(lhs).length !== Object.keys(rhs).length) {
    return false;
  }

  for (const [key, value] of Object.entries(lhs)) {
    const rightValue = rhs[key];
    if (isArrayOrObject(value) && isArrayOrObject(rightValue)) {
      if (isEqual(value, rightValue)) {
        continue;
      }
      return false;
    }

    if (value !== rightValue) {
      return false;
    }
  }

  return true;
}

type Indexed<T = any> = {
  [key in string]: T;
};

function merge(lhs: Indexed, rhs: Indexed): Indexed {
  for (const p in rhs) {
    if (!rhs.hasOwnProperty(p)) {
      continue;
    }

    try {
      if (rhs[p].constructor === Object) {
        rhs[p] = merge(lhs[p] as Indexed, rhs[p] as Indexed);
      } else {
        lhs[p] = rhs[p];
      }
    } catch (e) {
      lhs[p] = rhs[p];
    }
  }

  return lhs;
}

export function set(
  object: Indexed | unknown,
  path: string,
  value: unknown,
): Indexed | unknown {
  if (typeof object !== 'object' || object === null) {
    return object;
  }

  if (typeof path !== 'string') {
    throw new Error('path must be string');
  }

  const result = path.split('.').reduceRight<Indexed>((acc, key) => {
    return {
      [key]: acc,
    };
  }, value as any);
  return merge(object as Indexed, result);
}
