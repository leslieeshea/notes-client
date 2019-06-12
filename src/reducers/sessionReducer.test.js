import reducer from './sessionReducer';

jest.mock('../services/auth.js');

describe('Session reducer', () => {
  it('handles the SET_SESSION action', () => {
    const newState = reducer(undefined, {
      type: 'SET_SESSION',
      payload: {
        username: 'test',
        token: 'token',
        image: 'image'
      }
    });

    expect(newState).toEqual({
      username: 'test',
      token: 'token',
      image: 'image'
    });
  });
});
