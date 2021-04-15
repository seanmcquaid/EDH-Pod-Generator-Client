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

  it('getPods', async () => {
    const pods = [
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
    ];
    jest.spyOn(axios, 'get').mockResolvedValueOnce({
      data: {
        pods,
      },
    });

    const commit = jest.fn();

    const state = {
      token: 'token',
    };

    const result = await actions.getPods({ commit, state });

    expect(result.pods).toEqual(pods);
  });

  it('deletePodMember', async () => {
    const pods = [
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
        ],
      },
    ];
    jest.spyOn(axios, 'delete').mockResolvedValueOnce({
      data: {
        pods,
      },
    });

    const commit = jest.fn();

    const state = {
      token: 'token',
    };

    const result = await actions.deletePodMember(
      { commit, state },
      { memberName: 'Terrell' }
    );

    expect(result.pods).toEqual(pods);
  });

  it('deletePod', async () => {
    const pods = [];
    jest.spyOn(axios, 'delete').mockResolvedValueOnce({
      data: {
        pods,
      },
    });

    const commit = jest.fn();

    const state = {
      token: 'token',
    };

    const result = await actions.deletePod(
      { commit, state },
      { podName: 'Pod1' }
    );

    expect(result.pods).toEqual(pods);
  });
});
