import axios from 'axios';
import { BEABLOO_URL } from './constants';
import { headers } from './constants';
import { DateTime } from 'luxon';
import { readFileSync } from 'fs';
import path from 'path';

interface CreateMessageArguments {
  channelId: string;
  key: string;
  loop?: number
}

const messageBody = {
  title: 'test',
  publicationDate: DateTime.now().toUnixInteger() * 1000,
  expirationDate: DateTime.now().toUnixInteger() * 1000 + 31536000,
  attachment: {
      name: 'test.png',
      operation: 'REPLACE',

  },
  additionalFields: []
};

export const createMessage = async ({ channelId, key, loop }: CreateMessageArguments) => {

  const file = await readFileSync(path.join(__dirname, '../../image.png'), { encoding: 'base64' });

  try {
    const response = await axios({
      url: `${BEABLOO_URL}/channels/${channelId}/posts`,
      headers: {
        ...headers,
        Authorization: key
      },
      method: 'POST',
      data: {
        ...messageBody,
        attachment: {
          name: 'test.png',
          operation: 'REPLACE',
          fileContent: file
        }
      },
    })
    
    return response.data;
  } catch (e) {
    
    throw new Error(`${e?.response?.statusText} at loop ${loop}`);
  };
}; 
