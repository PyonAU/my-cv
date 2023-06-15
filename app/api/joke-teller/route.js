// Get Jokes from Joke API
const apiUrl = 'https://v2.jokeapi.dev/joke/Programming?blacklistFlags=nsfw,political,racist,sexist';

export const GET = async () => {
  try {
    const res = await fetch(apiUrl, { cache: 'no-store' });
    const data = await res.json();
    
    return new Response(JSON.stringify(data), { status: 200 });
  } catch (error) {
    return new Response('Failed to fetch all prompts', { status: 500 });
  }
}