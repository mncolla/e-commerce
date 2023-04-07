export const setLocalStorage = <T>(key: string, value: T) => {
  localStorage.setItem(key, JSON.stringify({ ...value }));
};

export const getLocalStorage = (key: string) => localStorage.getItem(key);

export const clearLocalStorage = (key: string) => {
  localStorage.removeItem(key);
};
