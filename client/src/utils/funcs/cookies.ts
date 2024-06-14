import Cookies from 'js-cookie';

export const getCookie = (name: string) => Cookies.get(name)
export const setCookie = (name: string, value: string | number) => Cookies.set(name, String(value));
export const removeCookie = (name: string) => Cookies.remove(name);