// Get Jokes from Joke API
const apiUrl =
  'https://v2.jokeapi.dev/joke/Programming?blacklistFlags=nsfw,political,racist,sexist';

// Import VoiceRSS
import { speech } from '../../projects/lib/joke-teller-app/voice-rss-tts';

export const GET = async () => {
  try {
    const response = await fetch(apiUrl, { cache: 'no-store' });
    const data = await response.json();

    const voice = await voiceHandler(data);

    return new Response(voice.data, { status: 200, headers: voice.headers });
  } catch (error) {
    return new Response('Failed to fetch all prompts', { status: 500 });
  }
};

// Passing Joke to VoiceRSS API
export const voiceHandler = async (data) => {
  let newJoke = data.joke;
  if (data.setup) {
    newJoke = `${data.setup} ... ${data.delivery}`;
  }

  return new Promise((resolve, reject) => {
    speech({
      key: process.env.VOICERSS_KEY,
      src: newJoke,
      hl: 'en-us',
      v: 'Linda',
      r: 0,
      c: 'mp3',
      f: '44khz_16bit_stereo',
      ssml: false,
      b64: true,
      callback: (error, content) => {
        if (error) {
          reject('Failed to fetch');
        }

        resolve(content);
      },
    });
  });
};
