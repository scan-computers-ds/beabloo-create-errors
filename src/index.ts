import { beabloo } from './services';
import { credentials } from './credentials';

const BEABLOO_CHANNEL = '63373';
let messagesToCreate = 5;

const run = async () => {
  try {
    const key = await beabloo.getKey({ 
      username: credentials.username,
      password: credentials.password,
    });
  
    while (messagesToCreate > 0) {
      try {
        beabloo.createMessage({
          key,
          channelId: BEABLOO_CHANNEL,
          loop: messagesToCreate,
        });
        messagesToCreate--;
      } catch (e) {
        throw new Error(`error creating message: ${messagesToCreate}`)
      }
    }

    const message = await beabloo.createMessage({
      key,
      channelId: BEABLOO_CHANNEL
    });
  } catch (e) {
    console.log('error at root')
    console.log(e);
  }
};

run();
