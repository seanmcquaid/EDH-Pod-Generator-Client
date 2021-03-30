import axios from 'axios';
import actions from '../../../../src/store/actions';

describe('Actions', () => {
  it('register', async () => {
    jest.spyOn(axios, 'post').mockResolvedValueOnce({
      data: {
        token: 'valid token here',
      },
    });

    const commit = jest.fn();

    const requestBody = {
      username: 'Sean',
      password: 'password',
    };

    const result = await actions.register({ commit }, requestBody);

    expect(result.token).toEqual('valid token here');
  });
});
