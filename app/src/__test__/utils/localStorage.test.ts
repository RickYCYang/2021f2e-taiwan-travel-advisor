import {
  setLocalStorageWithExpiry,
  removeLocalStorage,
  getLocalStorageWithExpiry,
} from 'utils/localStorage';

const clearLocalStorage = () => localStorage.clear();

describe('utils/localStorage', () => {
  beforeAll(clearLocalStorage);
  afterAll(clearLocalStorage);

  test('setLocalStorageWithExpiry', () => {
    const [key, value] = ['key', 'value'];
    setLocalStorageWithExpiry(key, value, 1);
    const result = JSON.parse(localStorage.getItem(key) || '');
    expect(result.value).toBe(value);
  });

  test('getLocalStorageWithExpiry', () => {
    const [key, value] = ['key', 'value'];
    const result = getLocalStorageWithExpiry(key);
    expect(result).toBe(value);
  });

  test('removeLocalStorage', () => {
    const key = 'key';
    removeLocalStorage(key);
    const result = getLocalStorageWithExpiry(key);
    expect(result).toBe(null);
  });
});
