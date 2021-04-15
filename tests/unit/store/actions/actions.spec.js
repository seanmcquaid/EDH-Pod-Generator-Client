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

  it('login', async () => {
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

    const result = await actions.login({ commit }, requestBody);

    expect(result.token).toEqual('valid token here');
  });

  it('addPodMember', async () => {
    const pods = [
      {
        id: 1,
        owner: 'sean',
        member: 'terrell',
        member_email: 'email@gmail.com',
        spell_table_url: 'www.example.com',
        name: 'Pod Name',
      },
    ];
    jest.spyOn(axios, 'post').mockResolvedValueOnce({
      data: {
        pods,
      },
    });

    const commit = jest.fn();

    const state = {
      token: 'token',
    };

    const requestBody = {
      member: 'terrell',
      memberEmail: 'email@gmail.com',
      spellTableUrl: 'www.example.com',
      name: 'Pod Name',
    };

    const result = await actions.addPodMember({ commit, state }, requestBody);

    expect(result.pods).toEqual(pods);
  });

  it('getPods', () => {});

  it('deletePodMember', () => {});

  it('deletePod', () => {});
});
