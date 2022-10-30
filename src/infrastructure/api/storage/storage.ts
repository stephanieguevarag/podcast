export const Storage = {
  get: (key: string): Promise<string | null> =>
    Promise.resolve(localStorage.getItem(key)),
  set: (key: string, value: string): Promise<void> =>
    Promise.resolve(localStorage.setItem(key, value)),
  remove: (key: string): Promise<void> =>
    Promise.resolve(localStorage.removeItem(key)),
};
