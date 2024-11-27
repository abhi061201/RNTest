import {MMKV} from 'react-native-mmkv';
import {reduxStorage} from '../../../src/redux/storage';

// mmkv is like async storage and here we are mocking its all operation to test our redux storage.
jest.mock('react-native-mmkv', () => {
  const setMock = jest.fn();
  const getStringMock = jest.fn();
  const deleteMock = jest.fn();

  return {
    MMKV: jest.fn().mockImplementation(() => ({
      set: setMock,
      getString: getStringMock,
      delete: deleteMock,
    })),
    setMock,
    getStringMock,
    deleteMock,
  };
});

// Actully we dont need to test mmkv storage but we are testing it with our redux implementation.
describe('redux Storage Testing', () => {
  let setMock: jest.Mock;
  let getStringMock: jest.Mock;
  let deleteMock: jest.Mock;

  beforeEach(() => {
    ({setMock, getStringMock, deleteMock} = require('react-native-mmkv'));
  });

  afterAll(() => {
    jest.clearAllMocks();
  });

  test('set item test', async () => {
    const key = 'testKey';
    const value = 'testValue';
    await reduxStorage.setItem(key, value);
    expect(setMock).toHaveBeenCalledWith(key, value);
  });
  test('get item test', async () => {
    const key = 'testKey';
    const value = 'testValue';
    getStringMock.mockReturnValue(value);
    const result = await reduxStorage.getItem(key, value);
    expect(result).toBe(value);
    expect(getStringMock).toHaveBeenCalledWith(key);
  });
  test('delete item test', async () => {
    const key = 'testKey';
    await reduxStorage.removeItem(key);
    expect(deleteMock).toHaveBeenCalledWith(key);
  });
});