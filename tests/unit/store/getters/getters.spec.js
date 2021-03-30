import getters from '../../../../src/store/getters';

describe('Getters', () => {
  const state = {
    isLoading: true,
    isAuthenticated: true,
    token: 'token',
    pods: [],
    errorMessage: 'error here',
  };

  it('getIsLoading', () => {
    expect(getters.getIsLoading(state)).toEqual(true);
  });

  it('getIsAuthenticated', () => {
    expect(getters.getIsAuthenticated(state)).toEqual(true);
  });

  it('getToken', () => {
    expect(getters.getToken(state)).toEqual('token');
  });

  it('getPods', () => {
    expect(getters.getPods(state)).toEqual([]);
  });

  it('getErrorMessage', () => {
    expect(getters.getErrorMessage(state)).toEqual('error here');
  });
});
