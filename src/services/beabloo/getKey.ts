import axios from 'axios';
import { BEABLOO_URL, headers } from './constants';

interface GetKeyArguments {
  username: string;
  password: string;
}

export const getKey = async ({ username, password }: GetKeyArguments): Promise<string> => {
  try {
    const request = await axios({
      url: `${BEABLOO_URL}/auth`,
      method: 'POST',
      headers,
      data: {
        username,
        password,
      }
    })

    return request.data;
  } catch (e) {
    console.log('BEABLOO:GET_KEY', e)
    throw new Error('unable to authenticate with beabloo')
  }
};
