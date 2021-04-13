import getters from '../../../../src/store/getters';

describe('Getters', () => {
  const state = {
    isLoading: true,
    isAuthenticated: true,
    token: 'token',
    pods: [
      {
        podName: 'Pod1',
        podMembers: [
          {
            id: 1,
            owner: 'sean',
            member: 'Sean',
            memberEmail: 'sean@mail.com',
            name: 'Pod1',
          },
          {
            id: 2,
            owner: 'sean',
            member: 'Terell',
            memberEmail: 'terell@mail.com',
            name: 'Pod1',
          },
        ],
      },
    ],
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
    expect(getters.getPods(state).length).toEqual(1);
  });

  it('getErrorMessage', () => {
    expect(getters.getErrorMessage(state)).toEqual('error here');
  });

  it('getPodByName', () => {
    expect(getters.getPodByName(state)('Pod1')).toEqual({
      podName: 'Pod1',
      podMembers: [
        {
          id: 1,
          owner: 'sean',
          member: 'Sean',
          memberEmail: 'sean@mail.com',
          name: 'Pod1',
        },
        {
          id: 2,
          owner: 'sean',
          member: 'Terell',
          memberEmail: 'terell@mail.com',
          name: 'Pod1',
        },
      ],
    });
  });

  it('getPodNames', () => {
    expect(getters.getPodNames(state)).toEqual(['Pod1']);
  });
});
